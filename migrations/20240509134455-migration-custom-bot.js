'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn('ms_dq_rules', 'bot_id', {
			type: Sequelize.STRING(40),
		});
		await queryInterface.addColumn('ms_dq_sql', 'bot_id', {
			type: Sequelize.STRING(40),
		});
		await queryInterface.addColumn('ms_dq_remidiaotion', 'bot_id', {
			type: Sequelize.STRING(40),
		});
		await queryInterface.addColumn('ms_record', 'bot_id', {
			type: Sequelize.STRING(40),
		});
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */
	},
};
