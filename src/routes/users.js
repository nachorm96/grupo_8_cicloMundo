var express = require('express');
const { login, register, usuarioAdd, perfil, updatePerfil, processLogin, logout } = require('../controllers/usersControler');
const uploadUaer = require('../../middlewares/uploadUser');
const userLoginValidator = require('../validations/user-login-validator');
const userRegisterValidator = require('../validations/user-register_validator')
const userPerfileValidator = require('../validations/user-perfile-validator')
var router = express.Router();

/* GET users listing. */
router.get('/login',login)
      .get('/register',register)
      .get('/perfil/:id',perfil)
      .put('/actualizar/:id',uploadUaer.single('img-user'),userPerfileValidator,updatePerfil)
      .post('/register',uploadUaer.single('img-users'),userRegisterValidator,usuarioAdd)
      .post('/login', userLoginValidator, processLogin)
      .get('/salir', logout)

module.exports = router;
