'use strict';
require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.USER_NAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DB_DIALECT,
  }
);

const userModel = require(`./module/users`)(sequelize);

module.exports = { userModel };
