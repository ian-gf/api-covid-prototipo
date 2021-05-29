const {Schema, model} = require('mongoose')

const ProductSchema = new Schema ({
    title:{type: String, required: true},
    brand:{type: String, required: true},
    category:{type: String, required: true},
    price:{type: Number, required: true},
    img:{type:String, required: true},
    sale:{type: Boolean, required: true},
    sale_price:{type: Number, required: false},
    service:{type: Boolean, required: true},
    recommended:{type: Boolean, required: true},
    popular:{type: Boolean, required: true}

}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Producto', ProductSchema)