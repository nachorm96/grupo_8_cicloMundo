var express = require('express');
var router = express.Router();
const productController = require('../controllers/productCartController')

/* GET carrito page. */
router.get('/',productController.product)

module.exports = router;  