const validateObjectId = require('../middleware/validateObjectId');
const mongoose = require('mongoose');
const {Genre, validate} = require('../models/genre');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const genres = await Genre.find().sort('name');
  res.send(genres);
});

router.get('/:id', validateObjectId, async (req, res) => {
  
  const genre = await Genre.findById(req.params.id);
  if (!genre) {
    return res.status(404).send('The genre with the given ID was not found.');
  }

  res.send(genre);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let genre = new Genre({ name: req.body.name });
  try {
    genre = await genre.save();
    // res.send(genre);
    res.send({genre, message: 'The genre was SAVED.'});

  } catch (err) {
    for (field in err.errors) {
      res.send(err.errors[field].message);
    }
  }
});

router.put('/:id', validateObjectId, async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const genre = await Genre.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
    },
    { new: true }
  );

  if (!genre) {
    return res.status(404).send('The genre with the given ID was not found.');
  }
  // res.send(genre);
  res.send({genre, message: 'The genre was UPDATED.'});
});

router.delete('/:id', validateObjectId, async (req, res) => {
  const genre = await Genre.findByIdAndRemove(req.params.id);
  if (!genre) {
    return res.status(404).send('The genre with the given ID was not found.');
  }

  // res.send(genre);
  res.send({genre, message: 'The genre was DELETED.'});
});

module.exports = router;
