'use strict';

const { Router } = require('express');
const router = Router();

router.get('*', errorFoundPage);

router.use(serverError);

module.exports = router;
