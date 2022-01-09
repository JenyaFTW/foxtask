'use strict';

const express = require('express');
const path = require('path');

exports.getSPA = express.static(
  path.join(__dirname, '..', '..', 'frontend', 'build'));
