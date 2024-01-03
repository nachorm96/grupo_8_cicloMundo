const {existsSync, unlinkSync} = require('fs')
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const { leerJSON, escribirJSON } = require("../data");


module.exports = {
    detail : (req,res)=> {
        return res.render('products/productDetail')
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

        const {id} =req.params;

        const products = leerJSON('productos');

        const product = products.find(product => product.id === +id)

        return res.render('products/product-edit', {
            ...product
        })
    },
    update : (req, res) => {
        const {nombre, precio, rodado, color, categoria, descripcion} = req.body;

        const {id} = req.params;

        const products = leerJSON('products');

        const productsUpdated = products.map((product) => {
            if(product.id === +id) {
                product.nombre = nombre.trim();
                product.precio = precio;
                product.rodado = rodado;
                product.color = color;
                product.categoria = categoria.trim();
                product.descripcion = descripcion.trim();
            }
            return product
        })

        //escribirJSON(productsUpdated, 'products')

        return res.redirect('/admin')
    }
}