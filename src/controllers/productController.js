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
            ...product,
            toThousand
        })
    },
    add : (req, res) => {
        return res.render('products/product-add')
    },
    store: (req, res) => {
        const lastID = products[products.length - 1].id;
		const {nombre, precio, rodado,color,categoria, descripcion,mainImg} = req.body;

        const nuevoProduct = {
            id:lastID + 1,
            nombre:nombre,
            precio:+precio,
            rodado: Array.isArray(rodado) ? rodado : rodado.split(',').map(rodado => rodado.trim()),
            color: Array.isArray(color) ? color : color.split(',').map(color => color.trim()),
            categoria:categoria,
            descripcion:descripcion,
            mainImg:req.files.map(file => file.filename),
        }
        products.push(nuevoProduct);

        fs.writeFileSync(productsFilePath,JSON.stringify(products),'utf-8')

        res.redirect('/admin');
    },
    edit : (req, res) => {
        return res.render('products/product-edit')
    }
}