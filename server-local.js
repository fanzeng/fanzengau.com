'use strict';

const app = require('./express/server');

app.listen(3000, () => console.log('Local server at 3000.'));