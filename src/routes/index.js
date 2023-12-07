/* const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/', indexController.renderIndex);

module.exports = router; */

const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')

/* /index */
router.get('/',indexController.index)
router.get('/admin',indexController.admin)



module.exports = router;