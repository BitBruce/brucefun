const express  = require('express');
const v1       = new express.Router();
const posts    = require('./posts');

v1.use('/posts/:postid', posts);

module.exports = v1;
