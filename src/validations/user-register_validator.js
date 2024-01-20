const {check, body} = require('express-validator');
const path = require('path');
const {readFileSync} = require('fs');

const usuariosFilePath = path.join(__dirname, '../data/usuarios.json');

module.exports = [
    check("nombre")
        .notEmpty().withMessage('El nombre es obligatorio').bail()
        .isLength({
            min: 2
        }).withMessage("Mínimo dos caracteres").bail()
        .isAlpha('es-ES',{ignore: ' '}).withMessage('Solo caracteres alfabéticos'),
    check("apellido")
        .notEmpty().withMessage('El nombre es obligatorio').bail()
        .isLength({
            min: 2
        }).withMessage("Mínimo dos caracteres").bail()
        .isAlpha('es-ES',{ignore: ' '}).withMessage('Solo caracteres alfabéticos'),
    body("email")
        .notEmpty().withMessage('El email es obligatorio').bail()
        .isEmail().withMessage('El email tiene un formato inválido').bail()
        .custom((value, {req}) => {
            const users = JSON.parse(readFileSync(usuariosFilePath, 'utf-8'));
            const user = users.find(user => user.email === value.trim())

            if(user) {
                return false
            }
            return true
        }).withMessage("El email ya se encuentra regisrado"),
    check("password")
        .notEmpty().withMessage("La contraseña es obligatoria")
        .isLength({
            min: 6,
            max : 12
        }).withMessage('La contraseña debe tener entre 6 y 12 caracteres'),
    body("password2")
        .notEmpty().withMessage("Debe verificar la contraseña")
        .custom((value, {req}) => {
            if(value != req.body.password){
                return false
            }
            return true
        }).withMessage("Las contraseñas no coinciden"),
    check("remember")
        .notEmpty().withMessage("Debes aceptar los términos y condiciones")

]