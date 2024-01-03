const express = require('express');
const {add, edit, detail, store, update} = require('../controllers/productController');
const upload = require('../../middlewares/upload');
const router = express.Router();

/* /products */

router.get('/agregar', add);
router.get('/editar/:id', edit);
router.put('/actualizar/:id', update)
router.get('/productDetail',detail)
router.post('/agregar',upload.array('img-porduct'),store)


module.exports = router;