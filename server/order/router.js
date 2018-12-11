var Order = require(__dirname+'/schema.js');
module.exports = function(sd) {
	var router = sd._initRouter('/api/order');
	sd['query_update_all_order_author'] = function(req, res){
		return {
			_id: req.body._id,
			author: req.user._id
		};
	};
	sd['query_unique_field_order'] = function(req, res){
		return {
			_id: req.body._id,
			author: req.user._id
		};
	};
};
