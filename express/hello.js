
'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const siteInclude = require('site-include');

const pathInclude = '/public/include/';
const pathMyBlog = '/myblog/content/';

const router = express.Router();

router.get('/', (req, res) => {
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	res.write('<h1>hello from express</h1>');
	res.end();
});

router.get('/myblog', myblogCallback);

router.get('/index', indexCallback);

router.get('/myblog/content/:topic/:blogTitle/:blogFileName',  blogContentCallback);

async function getSiteMainFrame() {
	let siteHeader = await siteInclude.getInclude(pathInclude, 'site_header.html');
	let mainFrameHeader = await siteInclude.getInclude(pathInclude, 'main_frame_header.html');
	let mainFrameContent = await siteInclude.getInclude(pathInclude, 'main_frame_content.html');
	let myBlogIndex = await siteInclude.getInclude(pathInclude, 'my_blog_index.html');
	let sidePanels = await siteInclude.getInclude(pathInclude, 'side_panels.html')
	let siteFooter = await siteInclude.getInclude(pathInclude, 'site_footer.html')
	return {
		'siteHeader': siteHeader,
		'mainFrameHeader': mainFrameHeader,
		'mainFrameContent': mainFrameContent,
		'myBlogIndex': myBlogIndex,
		'sidePanels': sidePanels,
		'siteFooter': siteFooter
	}
}


async function blogContentCallback(req, res) {
	console.log('in blogContentCallback');
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	let pathBlogHTML = path.join(pathMyBlog, req.params['topic'], req.params['blogTitle']);
	let blogFileName = req.params['blogFileName'];
	// console.log('retrieving: ' + path.join(pathBlogHTML, blogFileName));
	let mf = await getSiteMainFrame();
	let blogContent = await siteInclude.getInclude(pathBlogHTML, blogFileName);
	// console.log('blogContent is: ' + blogContent);
	let pageString = mf.siteHeader + mf.mainFrameHeader + mf.mainFrameContent + mf.sidePanels + '<div class="column_uneven_2_6_3_center">' + blogContent + mf.siteFooter;
	res.write(pageString);
	res.end();

}

async function myblogCallback(req, res) {
	console.log('in myblogCallback');
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	let mf = await getSiteMainFrame();

	let pageString = mf.siteHeader + mf.mainFrameHeader + mf.mainFrameContent + mf.sidePanels + '<div class="column_uneven_2_6_3_center">' + mf.myBlogIndex + mf.siteFooter;
	res.write(pageString);
	res.end();
}


async function indexCallback(req, res) {
	console.log('in indexCallback');
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	let mf = await getSiteMainFrame();
	let portfolio = await siteInclude.getInclude(pathInclude, 'portfolio.html');

	let pageString = mf.siteHeader + mf.mainFrameHeader + mf.mainFrameContent + mf.sidePanels + '<div class="column_uneven_2_6_3_center">' + portfolio + mf.siteFooter;
	res.write(pageString);
	res.end();
}

app.use(bodyParser.json());
app.use('/.netlify/functions/hello', router);
app.use(function(req, res, next) {
  return res.status(404).send({ message: 'Route: '+ req.url + ' Not found.' });
});

module.exports = app;
module.exports.handler = serverless(app);