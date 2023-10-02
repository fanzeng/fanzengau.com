
'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, '../client/fanzengau-app/build')));

// eartunes
app.use('/submodules/eartunes/public/', express.static(path.join(__dirname, '/../submodules/eartunes/public/')));

// multimedia-toolbox
app.use('/submodules/multimedia-toolbox/', express.static(path.join(__dirname, '/../submodules/multimedia-toolbox/')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/fanzengau-app/build', 'index.html'));
});

module.exports = app;
module.exports.handler = serverless(app);
