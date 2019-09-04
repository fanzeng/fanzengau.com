
'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require("fs");
const util = require('util');
const readFile = util.promisify(fs.readFile);

const siteHeader = require('site-header');
const router = express.Router();
const currentDir = './public';
const directoryPath = './';//currentDir;//+'/../public/include/side_panels.html';


router.get('/', (req, res) => {
	console.log('from get slash, pwd is ' + currentDir);
fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log(err);
    } 
    console.log('all files in current dir: ')
    files.forEach(function (file) {
        console.log(file); 
    });
});

fs.readdir('../', function (err, files) {
    if (err) {
        return console.log(err);
    } 
    console.log('all files in parent dir: ')
    files.forEach(function (file) {
        console.log(file); 
    });
});
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	res.write('<h1>goodbye from express</h1>');
	res.end();
});

router.get('/myblog', myblogCallback);

router.get('/index', indexCallback);

// router.get('/myblog/content/:topic/:blogTitle/:blogFileName', (req, res) => {
//    res.sendFile(path.join(currentDir+'/../myblog/content/' + req.params['topic'] + '/' + req.params['blogTitle'] + '/' + req.params['blogFileName']));
// });


// let siteHeader, siteFooter;
// readFile(path.join(currentDir+'/../public/include/site_header.html'), 'utf-8').then((data) => {
// 	siteHeader = data.toString('utf8');
// });

// readFile(path.join(currentDir+'/../public/include/site_footer.html'), 'utf-8').then((data) => {
// 	siteFooter = data.toString('utf8');
// });

// let mainFrameHeader, mainFrameContent;
// readFile(path.join(currentDir+'/../public/include/main_frame_header.html'), 'utf-8').then((data) => {
// 	mainFrameHeader = data.toString('utf8');
// });

// readFile(path.join(currentDir+'/../public/include/main_frame_content.html'), 'utf-8').then((data) => {
// 	mainFrameContent = data.toString('utf8');
// });

// let sidePanels;
// readFile(path.join(currentDir+'/../public/include/side_panels.html'), 'utf-8').then((data) => {
// 	sidePanels = data.toString('utf8');
// });


function myblogCallback(req, res) {
		console.log(data);
		let dataString = data.toString('utf8');
		res.writeHead(200, {
			'Content-Type': 'text/html'
		});
		let pageString = siteHeader + mainFrameHeader + mainFrameContent + sidePanels + '<div class="column_uneven_2_6_3_center">' + dataString + siteFooter;
		res.write(pageString);
		res.end();
}


function indexCallback(req, res) {
	// const indexFile = path.join(currentDir+'/../public/include/portfolio.html');
		res.writeHead(200, {
			'Content-Type': 'text/html'
		});
		let dataString = 'abc';
			console.log(dataString);

		console.log(siteHeader);
		let pageString = siteHeader.getSiteHeader() + '<div class="column_uneven_2_6_3_center">' + dataString ;
		res.write(pageString);
		res.end();
}

// app.use('/.netlify/functions/hello/resource/', express.static(currentDir + '/../public/resource/'));
// app.use('/.netlify/functions/hello/css/', express.static(currentDir + '/../public/css/'));
// app.use('/.netlify/functions/hello/include/', express.static(currentDir + '/../public/include/'));
// app.use('/.netlify/functions/hello/vendor/', express.static(currentDir + '/../public/vendor/'));
// app.use('/.netlify/functions/hello/scripts/', express.static(currentDir + '/../public/scripts/'));

app.use(bodyParser.json());
app.use('/.netlify/functions/goodbye', router);
app.use(function(req, res, next) {
  return res.status(404).send({ message: 'Route: '+ req.url + ' Not found.' });
});

module.exports = app;
module.exports.handler = serverless(app);