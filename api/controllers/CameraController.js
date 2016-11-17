/**
 * CameraController
 *
 * @description :: Server-side logic for managing cameras
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	createCamera: function (req, res) {
		Camera.create({identifier: req.param('identifier'), modele: req.param('modele'), position: req.param('position'), group: req.param('group')})
			.exec(function(err, camera) {
				Camera.publishCreate(camera, req);
				res.ok(camera);
		})
	}
};
