'use strict';

require('dotenv').config();
require('./lib/db');

const server = require('./lib/server');

const { PORT } = process.env || 3000;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
