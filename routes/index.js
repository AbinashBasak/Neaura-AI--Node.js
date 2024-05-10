const express = require('express');
const user = require('../services/user.services');

const router = express.Router();

router.post('/login', user.login);
router.post('/sign-up', user.signUp);

module.exports = router;
