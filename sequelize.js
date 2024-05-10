// sequelize.js
const { Sequelize } = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(config.connectionString, {
	logging: false,
	sync: true,
});

sequelize
	.sync({ force: false })
	.then(() => {
		console.log('Database synchronized');
	})
	.catch((err) => {
		console.error('Error synchronizing database:', err);
	});

module.exports = sequelize;
