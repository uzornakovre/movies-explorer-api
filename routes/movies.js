const router = require('express').Router();
const { saveMovieValidation, deleteMovieValidation } = require('../utils/validationRules');
const auth = require('../middlewares/auth');
const { getMovies, saveMovie, deleteMovie } = require('../controllers/movies');

router.use(auth);
router.get('/', getMovies);
router.post('/', saveMovieValidation, saveMovie);
router.delete('/:_id', deleteMovieValidation, deleteMovie);

module.exports = router;
