'use strict';

const app = require('./express/server');

app.listen(3000, () => console.log('Local server at 3000.'));

// to start local server, use the following command:
// npm run start:local
// then access the page at the following address:
// http://localhost:3000/.netlify/functions/server/index