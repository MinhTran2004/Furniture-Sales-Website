const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: {
        type: [{
            imageProduct: { type: String },
            color: { type: String }
        }], required: true
    },
    price: { type: String, required: true },
    sale: { type: String, required: true },
    label: { type: String, required: true },
    quantity: { type: String, required: true },
    sell: {type:String, required: true},
    type: { type: String, required: true }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;