const {existsSync, unlinkSync} = require('fs')
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports = {
    detail : (req,res)=> {
        const product=products.find(product=>product.id === +req.params.id)
        return res.render('products/product-detail',{
            productsBici : products.filter(product=> product.precio < +100000),
            products,
            ...product,
            toThousand
        })
    },
    add : (req, res) => {
        return res.render('products/product-add')
    },
    store: (req, res) => {

    },
    edit : (req, res) => {
        return res.render('products/product-edit')
    }
}