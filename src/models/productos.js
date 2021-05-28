const {Schema, model} = require('mongoose')

const ProductSchema = new Schema ({
    title:{type:String, required:true},
    brand:{type:String, required:true},
    category:{type:String, required:true},
    qty:{type: Number, required:true},
    img:{type:String, required:true},
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Producto', ProductSchema)