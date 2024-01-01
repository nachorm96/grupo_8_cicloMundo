const express = require('express');
const router = express.Router();
const productsData = require('../data/productos.json');

router.get('/dashboard', (req, res) => {
  res.render('dashboard', { products: productsData });
});

router.post('/dashboard/delete/:productId', (req, res) => {
  const productId = req.params.productId;
  // Lógica para eliminar el producto con productId de la fuente de datos (productsData)
  // Puedes utilizar array.filter() u otras técnicas según tu estructura de datos
  // Guarda la fuente de datos actualizada

  res.redirect('/dashboard');
});

module.exports = router;