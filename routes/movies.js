const { Movie, validate } = require('../models/movie');
const { Genre } = require('../models/genre');
const { Author } = require('../models/author');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const movies = await Movie.find().sort('name');
  res.send(movies);
});

router.get('/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id);

  if (!movie)
    return res.status(404).send('The movie with the given ID was not found.');

  res.send(movie);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(400).send('Invalid genre.');

  const author = await Author.findById(req.body.authorId);
  if (!author) return res.status(400).send('Invalid author.');

  let movie = new Movie({
    title: req.body.title,
    genre: {
      _id: genre._id,
      name: genre.name,
    },
    author: {
      _id: author._id,
      name: author.name,
    },
  });

  try {
    movie = await movie.save();
    res.send({ movie, message: 'The movie was SAVED.' });
  } catch (err) {
    for (field in err.errors) {
      res.send(err.errors[field].message);
    }
  }

  // res.send(movie);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(400).send('Invalid genre.');

  const author = await Author.findById(req.body.authorId);
  if (!author) return res.status(400).send('Invalid author.');

  const movie = await Movie.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      genre: {
        _id: genre._id,
        name: genre.name,
      },
      author: {
        _id: author._id,
        name: author.name,
      },
    },
    { new: true }
  );

  if (!movie)
    return res.status(404).send('The movie with the given ID was not found.');

  // res.send(movie);
  res.send({ movie, message: 'The movie was UPDATED.' });
});

router.delete('/:id', async (req, res) => {
  const movie = await Movie.findByIdAndRemove(req.params.id);

  if (!movie)
    return res.status(404).send('The movie with the given ID was not found.');

  // res.send(movie);
  res.send({ movie, message: 'The movie was DELETED.' });
});

module.exports = router;
