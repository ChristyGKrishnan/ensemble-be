const { Sequelize, DataTypes } = require('sequelize');

const tableNames = ['logs'];

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      ALTER TABLE workflow ADD COLUMN external_workflow_id VARCHAR(255);
    `);
  },

  down: async (queryInterface, Sequelize) => {
 
  }
};
