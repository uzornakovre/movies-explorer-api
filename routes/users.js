const router = require('express').Router();
const { updateUserInfoValidation } = require('../utils/validationRules');
const auth = require('../middlewares/auth');
const { getUsers, getCurrentUser, updateUserInfo } = require('../controllers/users');

router.use(auth);
router.get('/', getUsers);
router.get('/me', getCurrentUser);
router.patch('/me', updateUserInfoValidation, updateUserInfo);

module.exports = router;
