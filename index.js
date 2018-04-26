const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const cool = require('cool-ascii-faces');
const cat = require('cat-ascii-faces');
const yesno = require('yes-no-words');
const apiRouter = require('./controllers/api');
const lorem = require('./controllers/lorem');
const times = require('./controllers/times');
const psqldb = require('./controllers/db');
const example = require('./controllers/example');

function errorHandler (err, req, res, next) {
  res.render('pages/error', {error:err});
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .get('/cat', (req, res) => res.send(cat()))
  .get('/yesno', (req, res) => res.send(yesno.allRandom())) // move to API?
  .get('/splash', (req, res) => res.render('partials/examples/splash'))
  .use('/example', example)
  .use('/lorem', lorem)
  // .use('/api', apiRouter)//scuffed
  .use('/times', times)
  .use('/db', psqldb)
  .use(errorHandler)
  .get('*', (req, res) => res.render('pages/notfound'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));