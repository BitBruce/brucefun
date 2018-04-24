const cool = require('cool-ascii-faces');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const apiRouter = require('./controllers/api');
const lorem = require('./controllers/lorem');
const times = require('./controllers/times');
const psqldb = require('./controllers/db');
const gettingstarted = require('./controllers/gettingstarted');
const bootstrap = require('./controllers/bootstrap');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .get('/example/:id', (req, res) => res.send('id ' + req.params.id))
  .use('/gettingstarted', gettingstarted)
  .use('/api', apiRouter)//scuffed
  .use('/lorem', lorem)
  .use('/times', times)
  .use('/db', psqldb)
  .use('/bootstrap', bootstrap)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));