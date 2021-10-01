const Joi = require('joi');
const mongoose = require('mongoose');
const { genreSchema } = require('./genre');
const { authorSchema } = require('./author');

const Movie = mongoose.model(
  'Movies',
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 255,
    },
    genre: {
      type: genreSchema,
      required: true,
    },
    author: {
      type: authorSchema,
      required: true,
    },
  })
);

function validateMovie(movie) {
  const schema = Joi.object({
    title: Joi.string().min(5).max(50).required(),
    genreId: Joi.objectId().required(),
    authorId: Joi.objectId().required(),
  });

  return schema.validate(movie);
}

exports.Movie = Movie;
exports.validate = validateMovie;
