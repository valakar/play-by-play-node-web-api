'use strict';

let express = require('express');
let app = express();

app.get('/', (req, res) => {
	//res.send('Hello World!\n');
	res.json({hello: 'world'});
});

let server = app.listen(3000, () => {
	console.log('Server running at http://127.0.0.1:3000/');
});
