// models/QueryRecord.js
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');
const User = require('./User');

const QueryRecord = sequelize.define(
	'QueryRecord',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		group_id: {
			type: DataTypes.STRING(80),
		},
		bot_id: {
			type: DataTypes.STRING(40),
		},
		name: {
			type: DataTypes.STRING(150),
		},
		token: {
			type: DataTypes.STRING(255),
		},
		isError: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		errorMessage: {
			type: DataTypes.STRING(150),
		},
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: User,
				key: 'usr_id',
			},
		},
		created_at: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
		},
	},
	{
		tableName: 'ms_record',
		timestamps: true,
	}
);

module.exports = QueryRecord;
