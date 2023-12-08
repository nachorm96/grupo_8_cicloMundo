module.exports = {
    detail : (req,res)=> {
        return res.render('productDetail')
    },
    add : (req, res) => {
        return res.render('product-add')
    },
    edit : (req, res) => {
        return res.render('product-edit')
    }
}