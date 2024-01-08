const express = require('express');
const { index, admin, cart, buscarAdmin } = require('../controllers/indexController');
const router = express.Router();
// const productsData = require('../data/productos.json');
// const indexController = require('../controllers/indexController')


router.get('/',index)
router.get('/admin',admin)
router.get('/carrito',cart)
router.get('/admin/productos/buscar',buscarAdmin)

module.exports = router;