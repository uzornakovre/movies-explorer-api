const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    validate: {
      validator: validator.isURL,
      message: 'Необходимо ввести корректный URL',
    },
    required: true,
  },
  trailerLink: {
    type: String,
    validate: {
      validator: validator.isURL,
      message: 'Необходимо ввести корректный URL',
    },
    required: true,
  },
  thumbnail: {
    type: String,
    validate: {
      validator: validator.isURL,
      message: 'Необходимо ввести корректный URL',
    },
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('card', movieSchema);
