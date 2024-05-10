const Bot = require('../models/Bot');
const getBotTemplate = require('../utils/templates/bot');

const get = async (req, res) => {
	try {
		const user_id = req.user.userId;
		const list = await Bot.findAll({ where: { user_id } });
		const records = list.map((item) => ({ id: item.id, name: item.name }));

		res.json({
			status: true,
			msg: 'List get successfully.',
			data: records,
		});
	} catch (err) {
		console.error(err);
		res.status(400).json({
			status: false,
			msg: err.message || 'Something went wrong.',
		});
	}
};

const getTotalCount = async (req, res) => {
	try {
		const user_id = req.user.userId;
		const count = await Bot.count({ where: { user_id } });

		res.json({ status: true, msg: 'Count get successfully.', data: count });
	} catch (err) {
		console.error(err);
		res.status(400).json({
			status: false,
			msg: err.message || 'Something went wrong.',
		});
	}
};

const create = async (req, res) => {
	try {
		const user_id = req.user.userId;
		const { name, data } = req.body;

		const template = getBotTemplate(data);
		await Bot.create({
			user_id,
			name,
			bot_script: template.template,
			remediation: template.genDataQuality,
			rules: template.genDataQualityOnlyRules,
			sql: template.genDataQualitySQL,
		});

		res.json({ status: true, msg: 'Bot created successfully.' });
	} catch (err) {
		console.error(err);
		res.status(400).json({
			status: false,
			msg: err.message || 'Something went wrong.',
		});
	}
};

const deleteBot = async (req, res) => {
	try {
		const user_id = req.user.userId;
		const { id } = req.body;
		await Bot.destroy({ where: { user_id, id } });

		res.json({ status: true, msg: 'Deleted.' });
	} catch (err) {
		console.error(err);
		res.status(400).json({
			status: false,
			msg: err.message || 'Something went wrong.',
		});
	}
};

const getById = async (req, res) => {
	try {
		const user_id = req.user.userId;
		const { id } = req.query;
		const record = await Bot.findOne({ where: { id, user_id } });

		res.json({
			status: true,
			msg: 'Bot get successfully.',
			data: record,
		});
	} catch (err) {
		console.error(err);
		res.status(400).json({
			status: false,
			msg: err.message || 'Something went wrong.',
		});
	}
};

module.exports = {
	get,
	getTotalCount,
	create,
	delete: deleteBot,
	getById,
};
