const { Router } = require('express');
const router = Router();

const productosCtrl = require('../controllers/prod-controller');

//RUTAS PRINCIPALES
router.get('/', productosCtrl.getProducts);

router.get('/:id', productosCtrl.getProduct);

router.delete('/:id', productosCtrl.deleteProduct);

router.put('/:id', productosCtrl.updateProduct);

router.post('/', productosCtrl.createProduct);

module.exports = router;