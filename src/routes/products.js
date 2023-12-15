const express = require('express');
const {add, edit, detail} = require('../controllers/productController');
const router = express.Router();

/* /products */

router.get('/agregar', add);
router.get('/editar', edit);
router.get('/productDetail',detail)


module.exports = router;