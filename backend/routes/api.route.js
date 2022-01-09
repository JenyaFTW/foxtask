'use strict';

const express = require('express');

const router = express.Router();

const { any } = require('../controllers/api');
const { postLogin, postSignup, getMe } = require('../controllers/api/auth');
const { getAll, postTasks } = require('../controllers/api/tasks');

const { authRequired } = require('../middleware/auth');

router.route('/login').post(postLogin);
router.route('/signup').post(postSignup);
router.route('/me').all(authRequired).get(getMe);

router
  .route('/tasks')
  .all(authRequired)
  .get(getAll)
  .post(postTasks);

router.route('*').all(any);

module.exports = router;
