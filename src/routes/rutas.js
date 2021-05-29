const { Router } = require('express');
const router = Router();

const productosCtrl = require('../controllers/prod-controller');

//RUTAS PRINCIPALES
router.get('/', productosCtrl.getProducts);

router.get('/:id', productosCtrl.getProduct);

router.delete('/:id', productosCtrl.deleteProduct);

router.put('/:id', productosCtrl.updateProduct);

router.post('/', productosCtrl.createProduct);

router.get('/cat/:category', productosCtrl.getProductbyCategory);

router.get('/rec/:recommended', productosCtrl.getRecommendedProducts);

router.get('/sales/:sales', productosCtrl.getSales);

router.get('/services/:services', productosCtrl.getServices);

router.get('/pop/:popular', productosCtrl.getPopular);

module.exports = router;