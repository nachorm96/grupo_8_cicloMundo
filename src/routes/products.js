const express = require('express');
const {add, edit, detail, store, update, remove} = require('../controllers/productController');
const upload = require('../../middlewares/upload');
const router = express.Router();

/* /products */

router.get('/agregar', add);
router.get('/editar/:id', edit);
router.put('/actualizar/:id',upload.array('img-porduct'), update)
router.get('/product-detail/:id',detail)
router.post('/agregar',upload.array('img-porduct'),store)
router.delete('/eliminar/:id', remove)


module.exports = router;