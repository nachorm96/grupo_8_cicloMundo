var express = require('express');
const { login, register, usuarioAdd, perfil, updatePerfil, processRegister } = require('../controllers/usersControler');
const uploadUaer = require('../../middlewares/uploadUser');
const registerValidation = require('../../validations/registerValidator');
var router = express.Router();

/* GET users listing. */
router.get('/login',login)
      .get('/register',register)
      .get('/perfil/:id',perfil)
      .put('/actualizar/:id',uploadUaer.single('img-user'),updatePerfil)
      .post('/register',uploadUaer.single('img-users'),usuarioAdd)
      .post('/login', registerValidation, processRegister)

module.exports = router;
