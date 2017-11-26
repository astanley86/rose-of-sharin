'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('plants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userImageUrl: {
        type: Sequelize.STRING
      },
      wikiImageUrl: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      wikiDescription: {
        type: Sequelize.TEXT
      },
      type: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.CHAR
      },
      address: {
        type: Sequelize.CHAR
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.CHAR
      },
      zipCode: {
        type: Sequelize.CHAR
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('plants');
  }
};