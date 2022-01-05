const express = require('express');

const router = express.Router();

router.route('*').all((req, res) => {
    res.status(400).send('You weren\'t supposed to see this');
});

module.exports = router;