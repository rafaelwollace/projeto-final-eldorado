'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('Device', [
      {
        Color: 'Black',
        PartNumber: 4122266,
        Category_fk: 1
      },
      {
        Color: 'BLUE',
        PartNumber: 33854156,
        Category_fk: 1
      },
      {
        Color: 'RED',
        PartNumber: 22855556,
        Category_fk: 2
      }
  ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Device', null, {});

  }
};
