# ToDo/Ideas
- Change templating language?
- Try changing to typescript?
- Use CMS?
- Play audio
- [Build bootstrap](http://getbootstrap.com/docs/4.1/getting-started/webpack/)
- [Display code on site](http://getbootstrap.com/docs/4.1/content/code/)
- Build the pages you want! Build for practice for freelancing!

## Interesting addons
- https://elements.heroku.com/addons/wrenchmode
- https://elements.heroku.com/addons/wwwhisper
- https://elements.heroku.com/buttons/cobyism/ghost-on-heroku
- https://elements.heroku.com/addons/phrase
- https://elements.heroku.com/addons/neutrino-audiomatic
- https://elements.heroku.com/addons/scrapetastic
- https://devcenter.heroku.com/articles/stream

~~### Glyphicons
https://getbootstrap.com/docs/3.3/components/#glyphicons~~

### Fontawesome
- https://fontawesome.com/get-started
- https://fontawesome.com/icons
- from https://stackoverflow.com/questions/32612690/bootstrap-4-glyphicons-migration

### Other
- Possible replacement for bootstrap's missing sub-dropdowns? https://semantic-ui.com/modules/dropdown.html#/definition
(Relevant thread: https://github.com/twbs/bootstrap/issues/21026)
- Hacky hover dropdowns w/o JS: https://codepen.io/svnt/pen/beEgre
- meganavbar http://meganavbar.com/

---

# node-js-getting-started

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone git@github.com:heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
