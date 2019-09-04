
const https = require('https');

// var options = {
//     host: 'https://epicbeaver.netlify.com',
//     path: '/public/include/side_panels.html'
// }

// let sidePanel = ''
// const request = https.request(options, function (res) {
//     res.on('data', function (chunk) {
//         sidePanel += chunk;
//     });
//     res.on('end', function () {
//         console.log(sidePanel);
//     });
// });
// request.on('error', function (e) {
//     console.log(e.message);
// });
// request.end();

async function getInclude(name) {
	var options = {
	  host: 'epicbeaver.netlify.com',
	  port: 443,
	  path: '/public/include/' + name + '.html'
	};

	let content = ''
	await new Promise((resolve, reject) => {
		var req = https.request(options, function(res) {
		    res.setEncoding("utf8");
		    res.on("data", function (chunk) {
		        content += chunk;
		    });

		    res.on("end", function () {
		    	// console.log(' ' + content);
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