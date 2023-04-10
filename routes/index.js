const router = require('express').Router();

router.use('/signup', require('./signup'));
router.use('/signin', require('./signin'));
router.use('/users', require('./users'));
router.use('/movies', require('./movies'));
router.use('/', require('./error'));

module.exports = router;
