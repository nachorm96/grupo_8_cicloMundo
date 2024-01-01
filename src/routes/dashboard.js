const express = require('express');
const router = express.Router();
const productsData = require('../data/productos.json');

router.get('/dashboard', (req, res) => {
  res.render('dashboard', { products: productsData });
});

router.post('/dashboard/delete/:productId', (req, res) => {
  const productId = req.params.productId;

  res.redirect('/dashboard');
});

module.exports = router;