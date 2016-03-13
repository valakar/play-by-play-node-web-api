'use strict';

let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cats');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));


let cats = require('./cat_routes')(app);

let server = app.listen(3000, () => {
	console.log('Server running at http://127.0.0.1:3000/');
});
