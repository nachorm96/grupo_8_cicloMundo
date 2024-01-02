const { leerJSON } = require("../data");

module.exports = {
    detail : (req,res)=> {
        return res.render('products/productDetail')
    },
    add : (req, res) => {
        return res.render('products/product-add')
    },
    edit : (req, res) => {

        const {id} =req.params;

        const products = leerJSON('productos');

        const product = products.find(product => product.id === +id)

        return res.render('products/product-edit', {
            ...product
        })
    }
}