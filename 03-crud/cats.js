'use strict';
const _ = require('lodash');

module.exports = (app) => {

	let _cats = [];

	/* Create */
	app.post('/cat', (req, res) => {
		_cats.push(req.body);
		res.json({info: 'cat created successfully'});
	});

	/* Read */
	app.get('/cat', (req, res) => {
		res.send(_cats);
	});

	app.get('/cat/:id', (req, res) => {
		res.send(_.find(
			_cats,
			{
				name: req.params.id
			}
		));
	});

	/* Update */
	app.put('/cat/:id', (req, res) => {
		let index = _.findIndex(
			_cats,
			{
				name: req.params.id
			}
		);
		_.merge(_cats[index], req.body);
		res.json({info: 'cat updated successfully'});
	});


	/* Delete */
	app.delete('/cat/:id', (req, res) => {
		_.remove(_cats, (cat) => {
			return cat.name === req.params.id;
		});
		res.json({info: 'cat removed successfully'});
	});
};