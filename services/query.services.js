const { v4: uuidv4 } = require('uuid');
const QueryRecord = require('../models/QueryRecord');
const QueryDqRules = require('../models/QueryDqRules');
const QueryDqSQL = require('../models/QueryDqSQL');
const QueryDqRemidiaotion = require('../models/QueryDqRemidiaotion');
const Bot = require('../models/Bot');
const createQuery = require('../helpers/query/create');
const { literal } = require('sequelize');

const get = async (req, res) => {
	try {
		const user_id = req.user.userId;

		const query = { where: { user_id: user_id } };
		if (req.query.limit) {
			query.limit = req.query.limit;
		}

		const list = await QueryRecord.findAll(query);
		const records = list.map((listItem) => ({
			id: listItem.id,
			group_id: listItem.group_id,
			name: listItem.name,
			token: listItem.token,
		}));
		return res.status(200).json({
			status: true,
			msg: 'List get successfully.',
			data: records,
		});
	} catch (e) {
		console.error(e);
		return res.status(400).json({
			status: false,
			msg: e.message || 'Something went wrong.',
		});
	}
};

const getTotalCount = async (req, res) => {
	try {
		const user_id = req.user.userId;

		const totalRules = await QueryDqRules.count({
			where: { user_id: user_id },
		});
		const totalSql = await QueryDqSQL.count({
			where: { user_id: user_id },
		});
		const totalRemediation = await QueryDqRemidiaotion.count({
			where: { user_id: user_id },
		});
		const records = totalRules + totalSql + totalRemediation;

		return res.status(200).json({
			status: true,
			msg: 'Count get successfully.',
			data: records,
		});
	} catch (e) {
		console.error(e);
		return res.status(400).json({
			status: false,
			msg: e.message || 'Something went wrong.',
		});
	}
};

const getTotalGraphData = async (req, res) => {
	try {
		const user_id = req.user.userId;

		const queryRecords = await QueryRecord.findAll({
			attributes: [[literal('DATE(created_at)'), 'date']],
			where: { user_id },
		});
		const queryDqRemediation = await QueryDqRemidiaotion.findAll({
			attributes: [[literal('DATE(created_at)'), 'date']],
			where: { user_id },
		});
		const queryDqSQLs = await QueryDqSQL.findAll({
			attributes: [[literal('DATE(created_at)'), 'date']],
			where: { user_id },
		});

		const allRecords = [
			...queryRecords,
			...queryDqRemediation,
			...queryDqSQLs,
		];

		const countByDate = {};
		allRecords.forEach((record) => {
			const date = record.getDataValue('date');
			countByDate[date] = (countByDate[date] || 0) + 1;
		});

		return res.status(200).json({
			status: true,
			msg: 'Count get successfully.',
			data: countByDate,
		});
	} catch (e) {
		console.error(e);
		return res.status(400).json({
			status: false,
			msg: e.message || 'Something went wrong.',
		});
	}
};

const create = async (req, res) => {
	try {
		const user_id = req.user.userId;
		const queryName = req.body.name;
		const queryTokens = req.body.tokens;

		for (const token of queryTokens) {
			const group_id = `${uuidv4()}-${user_id}-${Date.now()}`;
			await createQuery(queryName, token, group_id, user_id);
		}

		return res.status(200).json({
			status: true,
			msg: { message: 'Task started successfully' },
			data: [],
		});
	} catch (e) {
		console.error(e);
		return res.status(400).json({
			status: false,
			msg: e.message || 'Something went wrong.',
		});
	}
};

const createFromCustomBot = async (req, res) => {
	try {
		const user_id = req.user.userId;
		const queryName = req.body.name;
		const queryTokens = req.body.tokens;
		const botId = req.body.botId;

		const bot = await Bot.findOne({ where: { user_id, id: botId } });
		if (!bot) {
			return res.status(400).json({
				status: false,
				msg: 'Invalid bot id.',
			});
		}

		for (const token of queryTokens) {
			const group_id = `${uuidv4()}-${user_id}-${Date.now()}`;
			await createQuery(queryName, token, group_id, user_id, botId);
		}

		return res.status(200).json({
			status: true,
			msg: { message: 'Task started successfully' },
			data: [],
		});
	} catch (e) {
		console.error(e);
		return res.status(400).json({
			status: false,
			msg: e.message || 'Something went wrong.',
		});
	}
};

const deleteQuery = async (req, res) => {
	try {
		const user_id = req.user.userId;
		const group_id = req.body.groupId;

		await QueryRecord.destroy({ where: { group_id, user_id } });
		await QueryDqRules.destroy({ where: { group_id, user_id } });
		await QueryDqSQL.destroy({ where: { group_id, user_id } });
		await QueryDqRemidiaotion.destroy({ where: { group_id, user_id } });

		return res.status(200).json({
			status: true,
			msg: 'Deleted.',
		});
	} catch (e) {
		console.error(e);
		return res.status(400).json({
			status: false,
			msg: e.message || 'Something went wrong.',
		});
	}
};

const getByGroupId = async (req, res) => {
	try {
		const user_id = req.user.userId;
		const group_id = req.query.groupid;

		const rules = await QueryDqRules.findOne({
			where: { group_id, user_id },
		});
		const sql = await QueryDqSQL.findOne({ where: { group_id, user_id } });
		const remidiaotion = await QueryDqRemidiaotion.findOne({
			where: { group_id, user_id },
		});

		const records = {
			rules: {
				id: rules.id,
				group_id: rules.group_id,
				name: rules.name,
				token: rules.token,
				result: rules.result,
				isError: rules.isError,
				errorMessage: rules.errorMessage,
			},
			sql: {
				id: sql.id,
				group_id: sql.group_id,
				name: sql.name,
				token: sql.token,
				result: sql.result,
				isError: sql.isError,
				errorMessage: sql.errorMessage,
			},
			remidiaotion: {
				id: remidiaotion.id,
				group_id: remidiaotion.group_id,
				name: remidiaotion.name,
				token: remidiaotion.token,
				result: remidiaotion.result,
				isError: remidiaotion.isError,
				errorMessage: remidiaotion.errorMessage,
			},
		};
		return res.status(200).json({
			status: true,
			msg: 'Task started successfully.',
			data: records,
		});
	} catch (e) {
		console.error(e);
		return res.status(400).json({
			status: false,
			msg: e.message || 'Something went wrong.',
		});
	}
};

module.exports = {
	get,
	getTotalCount,
	getTotalGraphData,
	create,
	createFromCustomBot,
	delete: deleteQuery,
	getByGroupId,
};
