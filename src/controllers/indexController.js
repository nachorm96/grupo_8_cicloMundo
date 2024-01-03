const {existsSync, unlinkSync} = require('fs')
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    index : (req,res)=> {

      return res.render('index', {
        productsBici : products.filter(product=> product.categoria === "Bicicletas"),
        productsEquipa : products.filter(product=> product.categoria === "Equipamiento"),
        products,
        toThousand
      })
    },
    cart : (req,res)=> {
      return res.render('productCart')
    },
    admin : (req,res) => {
      return res.render('dashboard', {
        products,
        toThousand
      })
    },
}