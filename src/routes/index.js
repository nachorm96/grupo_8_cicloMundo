const express = require('express');
const { index, admin, cart } = require('../controllers/indexController');
const router = express.Router();
const productsData = require('../data/productos.json');
// const indexController = require('../controllers/indexController')


router.get('/',index)
router.get('/admin',admin)
router.get('/carrito',cart)
router.get('/', (req, res) => {
    res.render('index', { products: productsData });  /* para enviar los productos a la vista */
  });

module.exports = router;