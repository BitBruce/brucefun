const express     = require('express');
const router      = new express.Router();

var heading = "Bootstrap";

router.get('/', function(req, res) {
  let data = "asd";
  res.render('pages/example', {heading:heading, data:data});
});

module.exports = router;
