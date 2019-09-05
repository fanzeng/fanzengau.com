'use strict';

const app = require('./express/hello');

app.listen(3000, () => console.log('Local server at 3000.'));