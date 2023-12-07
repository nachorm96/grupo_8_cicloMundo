const express = require('express');
const {add, edit} = require('../controllers/productController');
const router = express.Router();

/* /products */

router.get('/agregar', add);
router.get('/editar', edit);


module.exports = router;