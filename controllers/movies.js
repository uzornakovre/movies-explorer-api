const Movie = require('../models/movie');
const InvalidDataError = require('../utils/errors/InvalidDataError');
const NotFoundError = require('../utils/errors/NotFoundError');
const {
  OK,
  CREATED,
  INVALID_DATA,
  NOT_FOUND,
} = require('../utils/resStatus');

module.exports.getMovies = (req, res, next) => {
  Movie.find({})
    // .populate(['owner'])
    .then((movies) => res.status(OK.CODE).send(movies))
    .catch(next);
};

module.exports.saveMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameEN,
    nameRU,
    thumbnail,
    movieId,
  } = req.body;
  const ownerId = req.user._id;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameEN,
    nameRU,
    thumbnail,
    movieId,
    owner: ownerId,
  })
    .then((movie) => res.status(CREATED.CODE).send(movie))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new InvalidDataError(`${INVALID_DATA.MESSAGE}: ${err.message}`));
      } else {
        next(err);
      }
    });
};

module.exports.deleteMovie = (req, res, next) => {
  const { movieId } = req.params;

  Movie.findById(movieId)
    .then((movie) => {
      if (movie) {
        Movie.deleteOne(movie._id)
          .then(() => {
            res.status(OK.CODE).send({ message: OK.DEL_MOVIE_MESSAGE });
          })
          .catch((err) => next(err));
      } else {
        next(new NotFoundError(NOT_FOUND.MOVIE_MESSAGE));
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new InvalidDataError(INVALID_DATA.MESSAGE));
      } else {
        next(err);
      }
    });
};
