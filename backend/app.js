'use strict';
require('dotenv').config();

const server = require('./server');

server.listen(process.env.PORT, () => {
  console.log(`Server listening on http://localhost:${process.env.PORT}`);
});
