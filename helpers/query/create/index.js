const { currentBotId } = require('../../../config');
const Bot = require('../../../models/Bot');
const QueryDqRemidiaotion = require('../../../models/QueryDqRemidiaotion');
const QueryDqRules = require('../../../models/QueryDqRules');
const QueryDqSQL = require('../../../models/QueryDqSQL');
const QueryRecord = require('../../../models/QueryRecord');
const callApi = require('./api');

function waitForOneMinute() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, 20000);
	});
}

function getDefaultBotQuery(token) {
	return {
		remediation: `Suggest me data quality rules that can be implemented on the column ${token} column. Also provide the dimension.Make the output in json format with comma separated . Also suggest fixes using SQL command.`,
		rules: `Suggest me data quality rules that can be implemented on the column ${token} column. Explain in business Language as well. Also provide the dimension. Make the output in json format with comma separated.`,
		sql: `Suggest remediation Plan for the SAP Column to FIx data quality issues ${token}.Provide the suggestion in JSON format as well.`,
	};
}
async function getBotQueries(botId, token) {
	const query = getDefaultBotQuery(token);
	if (botId === currentBotId) {
		return query;
	}

	try {
		const re = new RegExp('{{column_name}}', 'g');

		const bot = await Bot.findOne({
			where: { id: botId },
			attributes: ['remediation', 'rules', 'sql'],
		});
		if (bot?.remediation?.length) {
			query.remediation = bot.remediation.replace(re, token);
		}
		if (bot?.rules?.length) {
			query.rules = bot.rules.replace(re, token);
		}
		if (bot?.sql?.length) {
			query.sql = bot.sql.replace(re, token);
		}
	} catch (error) {}

	return query;
}

async function genDataQualityOnlyRules(column_name, group_id, input_text) {
	try {
		const data = await callApi(input_text);

		let result;
		if (data?.error) {
			result = { isError: true, errorMessage: data.errorMessage };
		} else {
			result = { result: JSON.stringify(data.data) };
		}

		const [updatedCount] = await QueryDqRules.update(result, {
			where: { group_id, token: column_name },
		});
		console.log('genDataQualityOnlyRules', updatedCount > 0);
		return updatedCount > 0;
	} catch (error) {
		console.error(error);
		return false;
	}
}

async function genDataQuality(column_name, group_id, input_text) {
	try {
		const data = await callApi(input_text);

		let result;
		if (data?.error) {
			result = { isError: true, errorMessage: data.errorMessage };
		} else {
			result = { result: JSON.stringify(data.data) };
		}

		const [updatedCount] = await QueryDqRemidiaotion.update(result, {
			where: { group_id, token: column_name },
		});
		console.log('genDataQuality', updatedCount > 0);
		return updatedCount > 0;
	} catch (error) {
		console.error(error);
		return false;
	}
}

async function genDataQualitySQL(column_name, group_id, input_text) {
	try {
		const data = await callApi(input_text);

		let result = {};
		if (data?.error) {
			result = { isError: true, errorMessage: data.errorMessage };
		} else {
			result = { result: JSON.stringify(data.data) };
		}

		console.log(result, data);
		const [updatedCount] = await QueryDqSQL.update(result, {
			where: { group_id, token: column_name },
		});
		console.log('genDataQualitySQL', updatedCount > 0);
		return updatedCount > 0;
	} catch (error) {
		console.error(error);
		return false;
	}
}

async function generateResult(token, group_id, bot_id) {
	try {
		const botQueries = await getBotQueries(bot_id, token);
		console.log('----- start2 ----');
		await genDataQuality(token, group_id, botQueries.remediation);
		await waitForOneMinute();
		await genDataQualitySQL(token, group_id, botQueries.sql);
		await waitForOneMinute();
		await genDataQualityOnlyRules(token, group_id, botQueries.rules);
	} catch (error) {
		console.log(error);
	}
}

async function create(queryName, token, group_id, user_id, bot_id) {
	const executeBotId = bot_id || currentBotId;

	await QueryRecord.create({
		name: queryName,
		token: token,
		group_id: group_id,
		user_id: user_id,
		bot_id: executeBotId,
	});
	await QueryDqRules.create({
		name: queryName,
		token: token,
		group_id: group_id,
		user_id: user_id,
		bot_id: executeBotId,
	});
	await QueryDqSQL.create({
		name: queryName,
		token: token,
		group_id: group_id,
		user_id: user_id,
		bot_id: executeBotId,
	});
	await QueryDqRemidiaotion.create({
		name: queryName,
		token: token,
		group_id: group_id,
		user_id: user_id,
		bot_id: executeBotId,
	});

	console.log('----------- start ----------');
	generateResult(token, group_id, executeBotId);
}

module.exports = create;
