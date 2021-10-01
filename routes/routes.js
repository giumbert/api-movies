const express = require('express');
const genres = require('./genre');
const movies = require('./movies');
const home = require('./home');
// const error = require('../middleware/error');

module.exports = function(app){
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/', home);
  app.use('/api/genres', genres);
  app.use('/api/movies', movies);
  // app.use(error);
}