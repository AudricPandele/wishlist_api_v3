/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	me: function (req, res){
		return res.ok ({
				user: req.user
		})
	},

	// getUser : function (req,res) {
	// 	User.findOne({
	// 		id : req.param('user_id')
	// 	 })
	// 	.exec(function(err, user){
	// 		res.ok({
	// 			user
	// 		})
	// 	})
	// },

	// getUsers : function (req, res) {
	// 	User.find().exec(function(err, user){
	// 		res.ok({user})
	// 	})
	// },

};
