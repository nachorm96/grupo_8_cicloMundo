const express = require('express');
const { index, admin, cart } = require('../controllers/indexController');
const router = express.Router();


router.get('/',index)
router.get('/admin',admin)
router.get('/carrito',cart)

module.exports = router;