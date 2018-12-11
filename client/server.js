module.exports = function(app, sd) {
	app.get('/', function(req, res){
		res.render('public/Land', sd._ro(req, res, {}));
	});
	app.get('/Tag/:id', function(req, res){
		res.render('public/Tag', sd._ro(req, res, {}));
	});
	app.get('/Item/:id', function(req, res){
		res.render('public/Item', sd._ro(req, res, {}));
	});
	app.get('/Payment', function(req, res){
		res.render('public/Payment', sd._ro(req, res, {}));
	});

	var User = function(req, res){
		res.render('User', sd._ro(req, res, {}));
	}
	app.get('/*', sd._ensure, User);
};