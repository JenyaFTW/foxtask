'use strict';

const express = require('express');
const path = require('path');

exports.getStatic = express.static(path.join(__dirname, '..', '..', 'frontend', 'build', 'static'));

exports.getFiles = (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '..', '..', 'frontend', 'build')
  });
};
