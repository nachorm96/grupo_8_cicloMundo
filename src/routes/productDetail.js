var express = require('express');
var router = express.Router();
const detailController = require('../controllers/productDetailController')

/* GET detalle page. */
router.get('/',detailController.detail)

module.exports = router;