const https = require('https');
const http = require('http');
const path = require('path');
const os = require("os");


async function getInclude(hostName, path_, name_) {

	let portNumber;
	let httpToUse;

	if (hostName == 'localhost') {
		portNumber = 3000;
		httpToUse = http;
	} else {
		portNumber = 443;
		httpToUse = https;
	}
	let options = {
	  host: hostName,
	  port: portNumber,
	  path: path.join(path_, name_) || ' '
	};
	console.log(
		'start to get url: ' +
		options.host +
		':' + options.port + 
		options.path
		
	);

	let content = '';
	await new Promise((resolve, reject) => {
		let req = httpToUse.request(options, function(res) {
		    res.setEncoding("utf8");
		    res.on("data", function (chunk) {
		        content += chunk;
		    });

		    res.on("end", function () {
		    	// console.log('getInclude recieved the following content: ' + content);
		    	resolve(content);
		    });
		    req.on('error', function(err) {
				console.log(error);
				reject(error);
			});
		});
		req.end();
	});
	return content;
}


// https.get(options, function(res) {
//   console.log("Got response: " + res.statusCode);
// }).on('error', function(e) {
//   console.log("Got error: " + e.message);
// });


// https.get('https://epicbeaver.netlify.com/public/include/side_panels.html', (res) => {



// const getSiteHeader = async function() { 
// 	let header = '';
// 	return getInclude('site_header');

// };

// const getPortfolio = function() { 
// 	let portfolio = '';
// 	getInclude('portfolio').then( res => {
// 		portfolio = res;
// 		console.log('portfolio = ' + portfolio);
// 		return portfolio;
// 	});
// };

// const getSidePanel = function() { 
// 	let sidePanels = '';
// 	getInclude('side_panels').then( res => {
// 		sidePanels = res;
// 		console.log('side_panels = ' + sidePanels);
// 		return sidePanels;
// 	});
// };

exports.getInclude = getInclude;
// exports.getSiteHeader = getSiteHeader;
// exports.getPortfolio = getPortfolio;
// exports.getSidePanel = getSidePanel;