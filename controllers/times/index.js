const express     = require('express');
const router      = new express.Router();

router.get('/', function(req, res) {
  let result = '';
  const times = process.env.TIMES || 5;
  for (i = 0; i < times; i++) {
    result += i + ' ';
  }
  res.send(result);
});

module.exports = router;
