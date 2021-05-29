const productosCtrl = {}

const producto = require('../models/productos.js');

productosCtrl.getProducts = async (req, res) => {
    const productos = await producto.find();
    res.json(productos);
};

productosCtrl.getProduct = async (req, res) => {
    const productoF = await producto.findById(req.params.id);
    res.send(productoF);
}

productosCtrl.createProduct = async (req, res) => {
    const newProduct = new producto(req.body);
    await newProduct.save();
    res.send({message: 'producto creado', newProduct})
}

productosCtrl.deleteProduct = async (req, res) => {
    const productoF = await producto.findByIdAndDelete(req.params.id)
    res.send({message: 'producto eliminado', productoF})
}

productosCtrl.updateProduct = async (req, res) => {
    const productoM = await producto.findByIdAndUpdate(req.params.id, req.body)
    res.send({message: 'producto modificado', productoM})
}

productosCtrl.getProductbyCategory = async (req, res) => {
    const productos = await producto.find({category: req.params.category})
    res.json(productos);
    //res.send({message: 'productos encontrados', productos})
}

productosCtrl.getRecommendedProducts = async (req, res) => {
    const productos = await producto.find({recommended: req.params.recommended})
    res.json(productos);
    //res.send({message: 'productos encontrados', productos})
}

productosCtrl.getServices = async (req, res) => {
    const productos = await producto.find({services: req.params.services})
    res.json(productos);
    //res.send({message: 'productos encontrados', productos})
}

productosCtrl.getSales = async (req, res) => {
    const productos = await producto.find({sale: req.params.sale})
    res.json(productos);
    //res.send({message: 'productos encontrados', productos})
}

productosCtrl.getPopular = async (req, res) => {
    const productos = await producto.find({popular: req.params.popular})
    res.json(productos);
    //res.send({message: 'productos encontrados', productos})
}

module.exports = productosCtrl;