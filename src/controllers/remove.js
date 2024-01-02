const { leerJSON, escribirJSON } = require('.././data');


module.exports = (req,res) => {


    const {id} = req.params
    const products = leerJSON('productos');

    const productosFiltrados = productos.filter(producto => producto.id != id);

    escribirJSON(productosFiltrados, 'productos');
    


    return res.redirect('/admin')
}