const { Sequelize, DataTypes } = require('sequelize');

const tableNames = ['workflow'];

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS public.workflow (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255),
          config JSON,
          user_id INTEGER,
          created_at TIMESTAMP,
          updated_at TIMESTAMP
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
