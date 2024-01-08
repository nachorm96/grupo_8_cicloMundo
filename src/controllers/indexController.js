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
    buscarAdmin :(req, res) => {
      
      const {keyword} = req.query

      const resultado = products.filter((product) =>{
        return product.nombre.toLowerCase().includes(keyword.toLowerCase()) || product.categoria.toLowerCase().includes(keyword.toLowerCase())
      });

      return res.render('dashboard', {
        products : resultado,
        keyword,
        toThousand
      })

    }

}