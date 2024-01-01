/* const indexController = {};

indexController.renderIndex = (req, res) => {
  res.render('index'); // Renderiza views/index
};

module.exports = indexController; */

const {existsSync, unlinkSync} = require('fs')
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports = {
    index : (req,res)=> {
        return res.render('index')
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