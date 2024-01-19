var express = require('express');
const { login, register, usuarioAdd, perfil, updatePerfil, processLogin, logout } = require('../controllers/usersControler');
const uploadUaer = require('../../middlewares/uploadUser');
const userLoginValidator = require('../validations/user-login-validator');
var router = express.Router();

/* GET users listing. */
router.get('/login',login)
      .get('/register',register)
      .get('/perfil/:id',perfil)
      .put('/actualizar/:id',uploadUaer.single('img-user'),updatePerfil)
      .post('/register',uploadUaer.single('img-users'),usuarioAdd)
      .post('/login', userLoginValidator, processLogin)
      .get('/salir', logout)

module.exports = router;
