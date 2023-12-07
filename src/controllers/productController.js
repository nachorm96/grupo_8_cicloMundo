module.exports = {
    add : (req, res) => {
        return res.render('product-add')
    },
    edit : (req, res) => {
        return res.render('product-edit')
    }
}