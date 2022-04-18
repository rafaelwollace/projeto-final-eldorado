'use strict';
const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('User', [{
      name: "Rafael Cunha",
      email: "rafael.wfc@gmail.com",
      password: bcrypt.hashSync("123", +authConfig.rounds),
    }], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User', null, {});
  }
};
