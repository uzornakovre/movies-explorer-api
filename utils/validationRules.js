/* eslint-disable no-useless-escape */
const { celebrate, Joi } = require('celebrate');

// регулярное выражение для валидации URL
const regexUrl = /(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?/i;

// регулярное выражение для валидации ID
const regexId = /[0-9a-f]{24}/i;

const createUserValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(4),
    name: Joi.string(),
  }),
});

const loginValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(4),
  }),
});

const updateUserInfoValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
  }),
});

const saveMovieValidation = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(regexUrl),
    trailerLink: Joi.string().required().pattern(regexUrl),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    thumbnail: Joi.string().required().pattern(regexUrl),
    movieId: Joi.string().pattern(regexId),
  }),
});

const deleteMovieValidation = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().pattern(regexId),
  }),
});

module.exports = {
  createUserValidation,
  loginValidation,
  updateUserInfoValidation,
  saveMovieValidation,
  deleteMovieValidation,
  regexUrl,
  regexId,
};
