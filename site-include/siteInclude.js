/*
Usage:
(0)
siteInclude.getStaticLocalFile( 'absolute/path/from/site/root/without/initial/slash',
								'avoid_rsync_disaster.html')
	.then(
		data => { console.log('data=', data) }
	);
(1)
let siteHeader = await siteInclude.getInclude(hostName, pathInclude, 'site_header.html');
*/

const https = require('https');
const http = require('http');
const path = require('path');
const os = require('os');
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

async function getStaticLocalFile(absPath, fileName) {
	let dataString = "";
	try {
		const data = await readFile(path.join(absPath, fileName), 'utf-8');
		dataString = data.toString('utf8');
		console.log("In getStaticLocalFile: dataString=", dataString);
		return dataString;
	} catch (err) {
		console.log("In getStaticLocalFile: ",  err);
	}
}

async function getInclude(hostName, path_, name_) {

	let portNumber;
	let httpToUse;

	if (hostName === 'localhost') {
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
exports.getStaticLocalFile = getStaticLocalFile;