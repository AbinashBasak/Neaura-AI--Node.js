// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const User = sequelize.define(
	'User',
	{
		usr_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		usr_name: {
			type: DataTypes.STRING(150),
			allowNull: false,
		},
		usr_email: {
			type: DataTypes.STRING(150),
			allowNull: false,
			unique: true,
		},
		usr_password: {
			type: DataTypes.STRING(250),
			allowNull: false,
		},
		usr_active_status: {
			type: DataTypes.STRING(1),
			allowNull: false,
		},
	},
	{
		tableName: 'ms_user', // Specify the table name
		timestamps: false, // Set to false if you don't want Sequelize to handle timestamps
	}
);

module.exports = User;
