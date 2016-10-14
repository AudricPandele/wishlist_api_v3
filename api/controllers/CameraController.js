/**
 * CameraController
 *
 * @description :: Server-side logic for managing cameras
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
		createCamera: function (req, res) {
			console.log(req.paramAll());
			Camera.create({identifier: req.param('identifier'), modele: req.param('modele')})
				.exec(function(err, camera) {
					res.ok(camera);
			})
		}
};
