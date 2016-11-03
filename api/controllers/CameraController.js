/**
 * CameraController
 *
 * @description :: Server-side logic for managing cameras
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
		createCamera: function (req, res) {
			Camera.create({identifier: req.param('identifier'), modele: req.param('modele')})
				.exec(function(err, camera) {
					Camera.publishCreate(camera, req);
					// sails.sockets.broadcast('cameraAdded', {item: camera});
					res.ok(camera);
			})
		}
};
