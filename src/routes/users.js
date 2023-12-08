var express = require('express');
const { login, register } = require('../controllers/usersControler');
var router = express.Router();

/* GET users listing. */
router.get('/login',login)
      .get('/register',register)

module.exports = router;
