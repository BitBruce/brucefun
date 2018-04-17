const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const apiRouter = require('./controllers/api');
const lorem = "abcdzyxw";

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use('/api', apiRouter)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .get('/example/:id', (req, res) => res.send('id ' + req.params.id))
  .get('/lorem', (req, res) => res.send(lorem))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
