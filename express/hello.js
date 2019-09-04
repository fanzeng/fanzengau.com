
'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require("fs");
const util = require('util');
const readFile = util.promisify(fs.readFile);


const router = express.Router();

router.get('/', (req, res) => {
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	res.write('<h1>hello from express</h1>');
	res.end();
});

router.get('/myblog', myblogCallback);

router.get('/index.html', indexCallback);

router.get('/myblog/content/:topic/:blogTitle/:blogFileName', (req, res) => {
   res.sendFile(path.join(__dirname+'/../myblog/content/' + req.params['topic'] + '/' + req.params['blogTitle'] + '/' + req.params['blogFileName']));
});

// router.get('/css/:cssFileName', (req, res) => {
//    res.sendFile(path.join(__dirname+'/../public/css/' + req.params['cssFileName']));
//    console.log(req.params['cssFileName']);
// });

// router.get('/include/:fileName', (req, res) => {
//    res.sendFile(path.join(__dirname+'/../public/include/' + req.params['fileName']));
//    console.log(req.params['fileName']);
// });

// router.get('/vendor/scripts/:scriptFileName', (req, res) => {
//    res.sendFile(path.join(__dirname+'/../public/vendor/scripts/' + req.params['scriptFileName']));
//    console.log(req.params['scriptFileName']);
// });

// router.get('/scripts/:scriptFileName', (req, res) => {
//    res.sendFile(path.join(__dirname+'/../public/scripts/' + req.params['scriptFileName']));
//    console.log(req.params['scriptFileName']);
// });

// router.get('/resource/icon/resized/:resourceFileName', (req, res) => {
//    res.sendFile(path.join(__dirname+'/../public/resource/icon/resized/' + req.params['resourceFileName']));
//    console.log(req.params['resourceFileName']);
// });


let siteHeader, siteFooter;
readFile(path.join(__dirname+'/../public/include/site_header.html'), 'utf-8').then((data) => {
	siteHeader = data.toString('utf8');
});

readFile(path.join(__dirname+'/../public/include/site_footer.html'), 'utf-8').then((data) => {
	siteFooter = data.toString('utf8');
});

let mainFrameHeader, mainFrameContent;
readFile(path.join(__dirname+'/../public/include/main_frame_header.html'), 'utf-8').then((data) => {
	mainFrameHeader = data.toString('utf8');
});

readFile(path.join(__dirname+'/../public/include/main_frame_content.html'), 'utf-8').then((data) => {
	mainFrameContent = data.toString('utf8');
});

let sidePanels;
readFile(path.join(__dirname+'/../public/include/side_panels.html'), 'utf-8').then((data) => {
	sidePanels = data.toString('utf8');
});


function myblogCallback(req, res) {
	readFile(path.join(__dirname+'/../myblog/myblog.html'), 'utf-8').then((data) => {
		console.log(data);
		let dataString = data.toString('utf8');
		res.writeHead(200, {
			'Content-Type': 'text/html'
		});
		let pageString = siteHeader + mainFrameHeader + mainFrameContent + sidePanels + '<div class="column_uneven_2_6_3_center">' + dataString + siteFooter;
		res.write(pageString);
		res.end();
	});
}


function indexCallback(req, res) {
	readFile(path.join(__dirname+'/../public/include/portfolio.html'), 'utf-8').then((data) => {
		let dataString = data.toString('utf8');
		res.writeHead(200, {
			'Content-Type': 'text/html'
		});
		let pageString = siteHeader + mainFrameHeader + mainFrameContent + sidePanels + '<div class="column_uneven_2_6_3_center">' + dataString + siteFooter;
		res.write(pageString);
		res.end();
	});
}

app.use('/.netlify/functions/hello/resource/', express.static(__dirname + '/../public/resource/'));
app.use('/.netlify/functions/hello/css/', express.static(__dirname + '/../public/css/'));
app.use('/.netlify/functions/hello/include/', express.static(__dirname + '/../public/include/'));
app.use('/.netlify/functions/hello/vendor/', express.static(__dirname + '/../public/vendor/'));
app.use('/.netlify/functions/hello/scripts/', express.static(__dirname + '/../public/scripts/'));

app.use(bodyParser.json());
app.use('/.netlify/functions/hello', router);

module.exports = app;
module.exports.handler = serverless(app);