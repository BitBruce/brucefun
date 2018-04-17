const express     = require('express');
const router      = new express.Router();
const loremIpsum  = require('lorem-ipsum');

var customwords = [
  'fortnite',
  'yops',
  'chicken',
  'dinner'
];

// Optional parameter! ?num=
router.get('/', function(req, res) {
  res.send(loremIpsum({
    count: req.query.num
  }));
});

router.get('/custom', function(req, res) {
  res.send(loremIpsum({
    words: customwords
  }));
});

// A catch-all (no GET method defined after this one won't work)
router.get('/:num', function(req, res) {
  res.send(loremIpsum({
    count: req.params.num
  }));
});

module.exports = router;
