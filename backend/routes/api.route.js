const express = require('express');
const router = express.Router();

const { any } = require('../controllers/api');

router.route('*').all(any);

module.exports = router;