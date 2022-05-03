'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('category', [
      {
        name: 'SAMSUMG'
      },
      {
        name: 'LG'
      },
      {
        name: 'IPHONE'
      },
      {
        name: 'MOTOROLA'
      },
  ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('category', null, {});

  }
};
