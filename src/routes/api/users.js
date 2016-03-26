var express = require('express');
var router = express.Router();
var User = require('../../models/user');

router.post('/users', function () {
	console.log(arguments);
});

module.exports = router;