const express     = require('express');
const router      = new express.Router();

var heading = "Bootstrap";

router.get('/', function(req, res) {
  res.render('pages/example', {heading:heading});
});

module.exports = router;
