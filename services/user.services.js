const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/User');

const createToken = (user) => {
	const payload = {
		userId: user.usr_id,
		username: user.usr_name,
		exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // 1 day expiration
	};
	return jwt.sign(payload, config.secret);
};

const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({
			usr_email: email,
			usr_active_status: 'Y',
		});
		if (!user) {
			throw new Error('User not found');
		}

		const isPasswordValid = await bcrypt.compare(
			password,
			user.usr_password
		);
		if (!isPasswordValid) {
			throw new Error('Password or Email is incorrect.');
		}

		const token = createToken(user);
		const payload = {
			token,
			username: user.usr_name,
			email: user.usr_email,
		};
		res.json({ status: true, msg: payload });
	} catch (err) {
		console.log(err);
		res.status(400).json({
			status: false,
			msg: err.message || 'Something went wrong.',
		});
	}
};

const signUp = async (req, res) => {
	try {
		const { username, email, password } = req.body;
		const salt = await bcrypt.genSalt();
		const hashPassword = await bcrypt.hash(password, salt);

		await User.create({
			usr_name: username,
			usr_email: email,
			usr_password: hashPassword,
			usr_active_status: 'Y',
		});
		const user = await User.findOne({
			usr_email: email,
			usr_active_status: 'Y',
		});
		console.log('user', user);

		const token = createToken(user);
		const payload = {
			token,
			username: user.usr_name,
			email: user.usr_email,
		};
		res.json({ status: true, msg: payload });
	} catch (err) {
		console.error(err);
		res.status(400).json({
			status: false,
			msg: err.message || 'Something went wrong.',
		});
	}
};

module.exports = {
	login,
	signUp,
};
