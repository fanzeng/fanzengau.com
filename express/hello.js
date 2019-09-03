
'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();
router.get('/', (req, res) => {
	console.log(req);
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	res.write('<h1>hello from express</h1>');
	res.end();
});

router.get('/hello', (req, res) => {
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	res.write('<h1>hellooo from express</h1>');
	res.end();
});

app.use(bodyParser.json());
app.use('/.netlify/functions/hello', router);

module.exports = app;
module.exports.handler = serverless(app);