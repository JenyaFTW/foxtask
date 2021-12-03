'use strict';

const Sequelize = require('sequelize');

function users(sequelize) {
  return sequelize.define('users', {
    name: {
      type: Sequelize.STRING
    },
    surname: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
  });
}

module.export = users;
