var express = require('express');
const { login, register, usuarioAdd } = require('../controllers/usersControler');
const uploadUaer = require('../../middlewares/uploadUser');
var router = express.Router();

/* GET users listing. */
router.get('/login',login)
      .get('/register',register)
      .post('/register',uploadUaer.single('img-users'),usuarioAdd)

module.exports = router;
