const {existsSync, unlinkSync} = require('fs')
const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs')

const productsFilePath = path.join(__dirname, '../data/usuarios.json');

module.exports = {
    login : (req,res)=> {
        return res.render('users/login')
    },
    register : (req,res)=> {
        return res.render('users/register')
    },
    usuarioAdd : (req, res)=> {
        const usuarios = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        const lastID = usuarios[usuarios.length - 1].id;
		const {nombre, apellido, email, password,imgUser} = req.body;

        const nuevoUsuario = {
            id : lastID + 1,
            nombre : nombre,
            apellido : apellido,
            email : email,
            password : bcryptjs.hashSync(password.trim(),10),
            imgUser : req.file ? req.file.filename : null
        }
        usuarios.push(nuevoUsuario);

        fs.writeFileSync(productsFilePath,JSON.stringify(usuarios),'utf-8')

        res.redirect('/users/login');
    }
}