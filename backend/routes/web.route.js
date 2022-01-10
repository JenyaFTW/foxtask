'use strict';

const express = require('express');
const router = express.Router();

const { getStatic, getFiles } = require('../controllers/web');

router.use('/static', getStatic);
router.get('*', getFiles);

module.exports = router;
