'use strict';

const { Pool } = require('pg');

const {
    DB_PORT,
    DB_HOST,
    DB_USER,
    DB_DATABASE,
    DB_PASSWORD
} = process.env;

const db = new Pool({
    user: DB_USER,
    database: DB_DATABASE,
    password: DB_PASSWORD,
    port: DB_PORT,
    host: DB_HOST
});

module.exports = db;