const {check, body} = require('express-validator');
const path = require('path');
const {readFileSync} = require('fs');
const { compareSync } = require('bcryptjs');

const usuariosFilePath = path.join(__dirname, '../data/usuarios.json');

module.exports = [
    check("email")
        .notEmpty().withMessage('El email es obligatorio'),
    body('password')
        .notEmpty().withMessage('La contraseña es obligatoria').bail()
        .custom((value, {req}) => {
            const users = JSON.parse(readFileSync(usuariosFilePath, 'utf-8'));
            const user = users.find(user => user.email === req.body.email.trim())

            if(!user || !compareSync(value.trim(), user.password)) {
                return false
            }
            return true
        }).withMessage('Credenciales inválidas')
]