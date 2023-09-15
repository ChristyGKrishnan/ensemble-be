const { Sequelize, DataTypes } = require('sequelize');

const tableNames = ['logs'];

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS public.logs (
          id SERIAL PRIMARY KEY,
          workflow_id INTEGER,
          start_time TIMESTAMP,
          end_time TIMESTAMP,
          FOREIGN KEY (workflow_id) REFERENCES workflow (id)
      );
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      const tablePromises = tableNames.map(async table => {
        await queryInterface.dropTable(table, { transaction, cascade: true });
      });

      await Promise.all(tablePromises);
    });
  }
};
