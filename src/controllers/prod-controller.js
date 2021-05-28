const productosCtrl = {}

const producto = require('../models/productos.js');

productosCtrl.getProducts = async (req, res) =>{
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

module.exports = productosCtrl;