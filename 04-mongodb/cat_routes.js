'use strict';
const _ = require('lodash');
const Cat = require('./cat_model');

module.exports = (app) => {

	/* Create */
	app.post('/cat', (req, res) => {
		let newCat = new Cat(req.body);
		newCat.save(err => {
			err
					? res.json({info: 'error during cat create', error: err})
					: '';
			res.json({info: 'cat created successfully'});
		});
	});

	/* Read */
	app.get('/cat', (req, res) => {
		Cat.find((err, cats) => {
			err
					? res.json({info: 'error during find cats', error: err})
					: '';
			res.json({info: 'cat found successfully', data: cats});
		});
	});

	//app.get('/cat/:id', (req, res) => {
	//	res.send(_.find(
	//		_cats,
	//		{
	//			name: req.params.id
	//		}
	//	));
	//});

	///* Update */
	//app.put('/cat/:id', (req, res) => {
	//	let index = _.findIndex(
	//		_cats,
	//		{
	//			name: req.params.id
	//		}
	//	);
	//	_.merge(_cats[index], req.body);
	//	res.json({info: 'cat updated successfully'});
	//});
	//
	//
	///* Delete */
	//app.delete('/cat/:id', (req, res) => {
	//	_.remove(_cats, (cat) => {
	//		return cat.name === req.params.id;
	//	});
	//	res.json({info: 'cat removed successfully'});
	//});
};