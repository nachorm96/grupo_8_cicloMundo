var express = require('express');
var router = express.Router();

/* GET carrito page. */
router.get('/', function(req, res, next) {
  res.render('productCart', { title: 'Express' });
});

module.exports = router;