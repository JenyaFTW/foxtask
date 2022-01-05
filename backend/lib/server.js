const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const apiRoute = require('../routes/api.route');
const webRoute = require('../routes/web.route');

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.use('/api', apiRoute);
app.use('/', webRoute);

module.exports = app;