'use strict';

const app = require('./express/hello');

app.listen(3000, () => console.log('Local app listening on port 3000!'));