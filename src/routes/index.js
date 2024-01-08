const express = require('express');
const { index, admin, cart } = require('../controllers/indexController');
const router = express.Router();
// const productsData = require('../data/productos.json');
// const indexController = require('../controllers/indexController')


router.get('/',index)
router.get('/admin',admin)
router.get('/carrito',cart)

module.exports = router;