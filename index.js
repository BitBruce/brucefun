const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const apiRouter = require('./controllers/api');
const lorem = require('./controllers/lorem');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .get('/example/:id', (req, res) => res.send('id ' + req.params.id))
  .use('/api', apiRouter)
  .use('/lorem', lorem)
  .get('/times', (req, res) => {
    let result = '';
    const times = process.env.TIMES || 5;
    for (i = 0; i < times; i++) {
      result += i + ' ';
    }
    res.send(result);
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
