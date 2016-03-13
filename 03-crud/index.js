'use strict';

let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

let cats = require('./cats')(app);

let server = app.listen(3000, () => {
	console.log('Server running at http://127.0.0.1:3000/');
});
