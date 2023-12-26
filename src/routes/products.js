const express = require('express');
const {add, edit, detail} = require('../controllers/productController');
const router = express.Router();

/* /products */

router.get('/agregar', add);
router.get('/editar', edit);
router.get('/product-detail/:id',detail)


module.exports = router;