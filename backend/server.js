'use strict';

const express = require('express');
const server = express();

server.get('/', async (req, res) => {
  res.status(200).send('Home');
});

module.exports = server;
