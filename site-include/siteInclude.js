const https = require('https');
const http = require('http');
const path = require('path');
const os = require('os');
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

async function getStaticLocalFile(includePath, fileName) {
	let dataString = "";
	readFile(path.join(__dirname, includePath, fileName), 'utf-8').then((data) => {
		dataString = data.toString('utf8');
		console.log("In getStaticLocalFile: dataString: " + dataString);
	});
}



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
		    res.on('error', function(err) {
				console.log(error);
				reject(error);
			});
		});
		
		req.end();
	});
	return content;
}



exports.getInclude = getInclude;
// exports.getSiteHeader = getSiteHeader;
// exports.getPortfolio = getPortfolio;
// exports.getSidePanel = getSidePanel;