const {existsSync, unlinkSync, readFileSync} = require('fs')
const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs')
const {validationResult} = require('express-validator');

const usuariosFilePath = path.join(__dirname, '../data/usuarios.json');


module.exports = {
    login : (req,res)=> {
        return res.render('users/login')
    },
    processLogin : (req,res) => {
        const errors = validationResult(req);
        const {email} = req.body;

        if(errors.isEmpty()){
            const users = JSON.parse(readFileSync(usuariosFilePath, 'utf-8'));
            const {id, nombre, rol} = users.find(user => user.email === email)

            req.session.userLogin = {
                id,
                nombre,
                rol
            }

            console.log(req.session.userLogin);
            return res.redirect('/')

        }else{
            return res.render('users/login', {
                errors : errors.mapped()
            })
        }
    },
    register : (req,res)=> {
        return res.render('users/register')
    },
    usuarioAdd : (req, res)=> {
        const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));
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

        fs.writeFileSync(usuariosFilePath,JSON.stringify(usuarios),'utf-8')

        res.redirect('/users/login');
    },
    perfil:(req, res) => {
        const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));
        const usuario = usuarios.find(usuario => usuario.id === +req.params.id)
        return res.render('users/perfil',{
            ...usuario,
            
        })
    },
    updatePerfil :(req, res) =>{
        const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));
        const {nombre, apellido, email, password, edad, calle, altura, provincia, localidad, postal, rol, imgUser} = req.body;

        existsSync('public/images/usuarios' +imgUser) && unlinkSync('public/images/usuarios' +imgUser)

        const userPerfil = usuarios.map(user =>{
            if(user.id === +req.params.id){
                user.nombre = nombre;
                user.apellido = apellido;
                user.email = email;
                user.password = password;
                user.edad = edad;
                user.calle = calle;
                user.altura = altura;
                user.provincia = provincia;
                user.localidad = localidad;
                user.postal = postal;
                user.rol = "visitante";
                user.imgUser = req.file ? req.file.filename : user.imgUser;
            }
            return user;
        })
        fs.writeFileSync(usuariosFilePath,JSON.stringify(userPerfil),'utf-8')

		return res.redirect("/");
    },
    logout : (req, res) => {
        req.session.destroy();

        return res.redirect('/');
    }
}