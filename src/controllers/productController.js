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
        const product = products.find(product => product.id === +req.params.id)
		return res.render('products/product-edit',{
			...product
		})
    },
    update : (req, res) => {
        const {nombre, precio, rodado, color, categoria, descripcion,mainImg} = req.body;

        existsSync('public/images/productos' + mainImg) && unlinkSync('public/images/productos' + mainImg)
                    
        const productUpdate = products.map(product => {
            if (product.id === +req.params.id) {
                product.nombre = nombre;
                product.precio = +precio;
                product.rodado = Array.isArray(rodado) ? rodado : rodado.split(',').map(rodado => rodado.trim());
                product.color = Array.isArray(color) ? color : color.split(',').map(color => color.trim());
                product.categoria = categoria;
                product.descripcion = descripcion;
                if (req.files && req.files.length > 0) {
                    product.mainImg = req.files.map(file => file.filename);
                }
            }
            return product;
        });
		fs.writeFileSync(productsFilePath,JSON.stringify(productUpdate),'utf-8')

		return res.redirect("/admin");
	},
    remove : (req,res) => {
        // return res.render('products/product-delete')
        const {id} = req.params;
	
		const {mainImg} = products.find(product => product.id == id);
		existsSync('public/images/productos/' + mainImg) && unlinkSync('public/images/productos/' + mainImg)

		const productsDelete = products.filter(product => product.id != id);
	
		fs.writeFileSync(productsFilePath,JSON.stringify(productsDelete),'utf-8')
	
		return res.redirect('/admin')

	
    }
}