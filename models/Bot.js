// models/Bot.js
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');
const User = require('./User');

const Bot = sequelize.define(
	'Bot',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING(150),
			allowNull: false,
		},
		bot_script: {
			type: DataTypes.STRING(100000),
			allowNull: false,
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		remediation: {
			type: DataTypes.STRING(1000),
		},
		rules: {
			type: DataTypes.STRING(1000),
		},
		sql: {
			type: DataTypes.STRING(1000),
		},
	},
	{
		tableName: 'ms_bot', // Specify the table name
		timestamps: false, // Set to false if you don't want Sequelize to handle timestamps
	}
);

Bot.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Bot;
