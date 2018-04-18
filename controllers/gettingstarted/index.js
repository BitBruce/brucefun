const express     = require('express');
const router      = new express.Router();

router.get('/', async (req, res) => {
  try {
    res.render('pages/gettingstarted');
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});

module.exports = router;
