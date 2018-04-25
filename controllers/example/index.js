const express     = require('express');
const router      = new express.Router();

//TODO: error routing

// Optional parameter! ?p=
router.get('/', function(req, res) {
  let p = req.query.p;
  if (p) {
    let page = '../partials/examples/'+p+'.ejs';
    res.render('pages/example', {page:page});
  } else {
    res.render('pages/example');
  }
});


// router.get('/:page', function(req, res) {
//   page: req.params.page;
//   res.render('pages/dynamic', {page:page});
// });

module.exports = router;
