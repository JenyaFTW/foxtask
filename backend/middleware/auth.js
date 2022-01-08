'use strict';

const jwt = require('jsonwebtoken');

exports.authRequired = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        try {
            const authToken = authHeader.split(' ')[1];
            const decoded = jwt.verify(authToken, process.env.JWT_SECRET);
            res.locals.id = decoded.id;
            res.locals.username = decoded.username;
            next();
        } catch (e) {
            res.status(401).json({ message: 'Unauthorized' }); 
        }
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};