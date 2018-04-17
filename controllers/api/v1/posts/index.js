const express   = require('express');
const posts     = new express.Router();
// const mediaCtrl = require('./media.ctrl');

posts.use((req, res, next) => {
    // here we can access the req.params object and make auth checks
    next();
});

// posts.get('/media', mediaCtrl.getMedia);

module.exports = posts;
