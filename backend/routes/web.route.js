'use strict';

const express = require('express');
const router = express.Router();

const { getSPA } = require('../controllers/web');

router.route('*').get(getSPA);

router.route('*').post((req, res) => {
  res.status(400).send('You weren\'t supposed to see this');
});

module.exports = router;
