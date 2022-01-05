const express = require('express');
const router = express.Router();

const { any } = require('../controllers/api');
const { postLogin, postSignup } = require('../controllers/api/auth');

router.route('/login').post(postLogin);
router.route('/signup').post(postSignup);
router.route('*').all(any);

module.exports = router;