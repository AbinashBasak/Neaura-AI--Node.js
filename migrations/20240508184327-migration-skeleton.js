'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn('ms_dq_rules', 'isError', {
			type: Sequelize.BOOLEAN,
			defaultValue: false,
		});
		await queryInterface.addColumn('ms_dq_rules', 'errorMessage', {
			type: Sequelize.STRING(150),
		});
		await queryInterface.addColumn('ms_dq_sql', 'isError', {
			type: Sequelize.BOOLEAN,
			defaultValue: false,
		});
		await queryInterface.addColumn('ms_dq_sql', 'errorMessage', {
			type: Sequelize.STRING(150),
		});
		await queryInterface.addColumn('ms_dq_remidiaotion', 'isError', {
			type: Sequelize.BOOLEAN,
			defaultValue: false,
		});
		await queryInterface.addColumn('ms_dq_remidiaotion', 'errorMessage', {
			type: Sequelize.STRING(150),
		});
		await queryInterface.addColumn('ms_record', 'isError', {
			type: Sequelize.BOOLEAN,
			defaultValue: false,
		});
		await queryInterface.addColumn('ms_record', 'errorMessage', {
			type: Sequelize.STRING(150),
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
