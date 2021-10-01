// const winston = require('winston');
const mongoose = require('mongoose');

module.exports = function(){
  const db = 'mongodb://localhost/api-movies';
  mongoose
  .connect(db)
  .then(() => console.log('Connected to MongoDB...'))
  // .then(() => winston.info(`Connected to ${db}...`));

  // Comentamos esto porque ya no necesitamos esta forma para agarrar el error, ya lo estamos haciendo con winston
  .catch((err) => console.error('Could not connect to MongoDB...'));
}