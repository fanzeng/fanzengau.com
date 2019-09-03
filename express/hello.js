// exports.handler = function(event, context, callback) {
// 	callback(null, {
// 		statusCode: 200,
// 		body: 'Hellooooo, World'
// 	})
// }

'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();
router.get('/', (req, res) => {
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	res.write('<h1>hello from express</h1>');
	res.end();
});

app.use('/.netlify/functions/hello', router);

module.exports = app;
module.exports.handler = serverless(app);