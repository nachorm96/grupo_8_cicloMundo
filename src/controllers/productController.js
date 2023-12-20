module.exports = {
    detail : (req,res)=> {
        return res.render('products/productDetail')
    },
    add : (req, res) => {
        return res.render('products/product-add')
    },
    edit : (req, res) => {
        return res.render('products/product-edit')
    }
}