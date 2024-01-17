var express = require('express');
const { login, register, usuarioAdd, perfil, updatePerfil } = require('../controllers/usersControler');
const uploadUaer = require('../../middlewares/uploadUser');
var router = express.Router();

/* GET users listing. */
router.get('/login',login)
      .get('/register',register)
      .get('/perfil/:id',perfil)
      .put('/actualizar/:id',uploadUaer.single('img-user'),updatePerfil)
      .post('/register',uploadUaer.single('img-users'),usuarioAdd)

module.exports = router;
