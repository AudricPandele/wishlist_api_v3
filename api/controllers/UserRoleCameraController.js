/**
 * UserRoleCameraController
 *
 * @description :: Server-side logic for managing userRoleCameras
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
		getUserCameras: function (req, res) {
			UserRoleCamera.find()
				.where({'user': req.user.id})
				.populate('camera')
				.then(function(urcs){
					var cameras = []
					for (var i = 0; i < urcs.length; i++) {
						cameras.push(urcs[i].camera)
					} return [cameras]
				})
				.spread(function(cameras){
					res.ok(cameras)
				})
		}
};
