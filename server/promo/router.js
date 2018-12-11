var Promo = require(__dirname+'/schema.js');
module.exports = function(sd) {
	var router = sd._initRouter('/api/promo');
	sd['query_update_all_promo_author'] = function(req, res){
		return {
			_id: req.body._id,
			author: req.user._id
		};
	};
	sd['query_unique_field_promo'] = function(req, res){
		return {
			_id: req.body._id,
			author: req.user._id
		};
	};
};
