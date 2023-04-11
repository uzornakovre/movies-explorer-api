const router = require('express').Router();
const { error } = require('../controllers/error');
const auth = require('../middlewares/auth');

router.use(auth);
router.all('/*', error);

module.exports = router;
