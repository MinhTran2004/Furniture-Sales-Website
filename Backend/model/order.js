const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    idCart: {type:String, required: true},
    date: {type:String, required: true},
    total: {type:String, required: true},
})

const Oder = mongoose.model("Oder", orderSchema);

module.exports = Oder;