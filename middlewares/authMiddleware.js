// authMiddleware.js
const jwt = require('jsonwebtoken');
const config = require('../config');

function verifyToken(req, res, next) {
	const token = req.headers.authorization;
	if (!token) {
		return res.status(401).json({ status: false, msg: 'Forbidden access' });
	}

	if (!token.startsWith('Bearer ')) {
		return res.status(401).json({ status: false, msg: 'Forbidden access' });
	}

	try {
		const bearerToken = token.replace('Bearer ', '');
		const user = jwt.verify(bearerToken, config.secret);
		req.user = user;
		next();
	} catch (err) {
		if (err instanceof jwt.TokenExpiredError) {
			return res.status(401).json({ status: false, msg: 'Unauthorized' });
		}
		return res.status(401).json({ status: false, msg: 'Invalid token' });
	}
}

module.exports = verifyToken;
