'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fake_api_records', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      API: {
        type: Sequelize.STRING,
      },
      Description: {
        type: Sequelize.CHAR,
      },
      Auth: {
        type: Sequelize.CHAR,
      },
      HTTPS: {
        type: Sequelize.BOOLEAN,
      },
      Cors: {
        type: Sequelize.STRING,
      },
      Link: {
        type: Sequelize.CHAR,
      },
      Category: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('fake_api_records')
  },
}
