const validateObjectId = require('../middleware/validateObjectId');
const mongoose = require('mongoose');
const {Author, validate} = require('../models/author');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const authors = await Author.find().sort('name');
  res.send(authors);
});

router.get('/:id', validateObjectId, async (req, res) => {
  
  const author = await Author.findById(req.params.id);
  if (!author) {
    return res.status(404).send('The author with the given ID was not found.');
  }

  res.send(author);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let author = new Author({ name: req.body.name });
  try {
    author = await author.save();
    // res.send(author);
    res.send({author, message: 'The author was SAVED.'});

  } catch (err) {
    for (field in err.errors) {
      // console.log(err.errors[field].message);
      res.send(err.errors[field].message);
    }
  }
});

router.put('/:id', validateObjectId, async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const author = await Author.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
    },
    { new: true }
  );

  if (!author) {
    return res.status(404).send('The author with the given ID was not found.');
  }
  // res.send(author);
  res.send({author, message: 'The author was UPDATED.'});
});

router.delete('/:id', validateObjectId, async (req, res) => {
  const author = await Author.findByIdAndRemove(req.params.id);
  if (!author) {
    return res.status(404).send('The author with the given ID was not found.');
  }

  // res.send(author);
  res.send({author, message: 'The author was DELETED.'});
});

module.exports = router;
