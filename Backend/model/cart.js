const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    idProduct: {type:String, required: true},
    image: {type:String, required: true},
    name: {type:String, required: true},
    color: {type:String},
    sale: {type:String, required: true},
    quantity: {type:String, required: true},
    status: {type:String, required: true},
})

const Cart = mongoose.model('carts', cartSchema);

module.exports = Cart;