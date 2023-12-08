/* const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/', indexController.renderIndex);

module.exports = router; */

const express = require('express');
const { index, admin, cart } = require('../controllers/indexController');
const router = express.Router();
// const indexController = require('../controllers/indexController')

/* /index */
// router.get('/',indexController.index)
// router.get('/admin',indexController.admin)
// router.get('/',index)
//       .ger('/admin',admin)
//       .get('/cart',cart)
router.get('/',index)
router.get('/admin',admin)
router.get('/carrito',cart)

module.exports = router;