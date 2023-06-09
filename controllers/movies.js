const Movie = require('../models/movie');
const InvalidDataError = require('../utils/errors/InvalidDataError');
const NotFoundError = require('../utils/errors/NotFoundError');
const ForbiddenError = require('../utils/errors/ForbiddenError');
const {
  OK,
  CREATED,
  INVALID_DATA,
  NOT_FOUND,
  FORBIDDEN,
} = require('../utils/resStatus');

module.exports.getMovies = (req, res, next) => {
  Movie.find({})
    .then((movies) => res.status(OK.CODE).send(
      movies.filter((movie) => String(movie.owner) === req.user._id),
    ))
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
        next(new InvalidDataError(INVALID_DATA.MESSAGE));
      } else {
        next(err);
      }
    });
};

module.exports.deleteMovie = (req, res, next) => {
  const { _id } = req.params;

  Movie.findById(_id)
    .then((movie) => {
      if (movie && String(movie.owner) === req.user._id) {
        Movie.deleteOne(movie._id)
          .then(() => {
            res.status(OK.CODE).send({ message: OK.DEL_MOVIE_MESSAGE });
          })
          .catch((err) => next(err));
      } else if (movie) {
        next(new ForbiddenError(FORBIDDEN.MESSAGE));
      } else if (!movie) {
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
