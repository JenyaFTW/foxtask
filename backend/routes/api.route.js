'use strict';

const express = require('express');

const router = express.Router();

const { any } = require('../controllers/api');
const { postLogin, postSignup, getMe } = require('../controllers/api/auth');

const { authRequired } = require('../middleware/auth');

router.route('/login').post(postLogin);
router.route('/signup').post(postSignup);
router.route('/me').all(authRequired).get(getMe);
router.route('*').all(any);

module.exports = router;