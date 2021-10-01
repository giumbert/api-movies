const Joi = require('joi');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const authorSchema = new Schema({
  name: { type: String, required: true, minlength: 5, maxlength: 50 },
});

const Author = mongoose.model('Author', authorSchema);

function validateAuthor(author) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
  });

  return schema.validate(author);
}

exports.authorSchema = authorSchema;
exports.Author = Author;
exports.validate = validateAuthor;