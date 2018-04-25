const cool = require('cool-ascii-faces');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const apiRouter = require('./controllers/api');
const lorem = require('./controllers/lorem');
const times = require('./controllers/times');
const psqldb = require('./controllers/db');
const example = require('./controllers/example');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .get('/splash', (req, res) => res.render('partials/examples/splash'))
  .use('/example', example)
  .use('/lorem', lorem)
  .use('/api', apiRouter)//scuffed
  .use('/times', times)
  .use('/db', psqldb)
  .get('*', (req, res) => res.render('pages/notfound'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));