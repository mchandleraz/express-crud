var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* Authentication Endpoint */
router.post('/authenticate', function(req, res) {

	User.findOne({
		name: req.body.name
	}, function (err, user) {

		if (err) {
			throw err;
		}

		if (!user) {
			res.json({
				success: false,
				message: 'dave\'s not here.'
			});
		} else if (user) {
			if (user.password != req.body.password) {
				res.json({
					success: false,
					message: 'wrong password.'
				});
			} else {
				res.json({
					success: true,
					message: 'authentication successful',
					token: jwt.sign(user, app.get('superSecret'), {
						expiresInMinutes: 1440
					})
				});
			}
		}
	});

});

module.exports = router;
