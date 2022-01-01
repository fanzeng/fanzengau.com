'use strict';

const app = require('./express/server');
const port = 3000;
app.listen(port, () => console.log(`Local server at ${port}.`));

// to start local server, use the following command:
// npm run start:local
// then access the page at the following address:
// http://localhost:3000