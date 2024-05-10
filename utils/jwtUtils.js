// jwtUtils.js
const jwt = require('jsonwebtoken');
const config = require('../config');

function generateToken(userId) {
	return jwt.sign({ id: userId }, config.secret, { expiresIn: 86400 }); // expires in 24 hours
}

module.exports = {
	generateToken,
};
