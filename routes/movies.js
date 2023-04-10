const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { regexUrl, regexId } = require('../utils/validationRules');
const auth = require('../middlewares/auth');
const {
  getMovies,
  saveMovie,
  deleteMovie,
} = require('../controllers/movies');

router.use(auth);
router.get('/', getMovies);
router.post('/', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(regexUrl),
    trailer: Joi.string().required().pattern(regexUrl),
    nameRU: Joi.string().required(),
    nameEn: Joi.string().required(),
    thumbnail: Joi.string().required().pattern(regexUrl),
    movieId: Joi.string().pattern(regexId),
  }),
}), saveMovie);
router.delete('/:movieId', celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().pattern(regexId),
  }),
}), deleteMovie);

module.exports = router;
