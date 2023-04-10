const router = require('express').Router();
const { createUserValidation } = require('../utils/validationRules');
const { createUser } = require('../controllers/users');

router.post('/', createUserValidation, createUser);

module.exports = router;
