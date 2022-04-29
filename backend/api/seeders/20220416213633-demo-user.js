'use strict';
const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('User', [{
      username: "rafaelcunha",
      email: "rafael.wfc@gmail.com",
      password: bcrypt.hashSync("123456", +authConfig.rounds),
    }], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User', null, {});
  }
};
