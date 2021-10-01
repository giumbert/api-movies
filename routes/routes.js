const express = require('express');
const genres = require('./genres');
const authors = require('./authors');
const movies = require('./movies');
const home = require('./home');

module.exports = function(app){
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/', home);
  app.use('/api/genres', genres);
  app.use('/api/authors', authors);
  app.use('/api/movies', movies);
}