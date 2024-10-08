const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String},
    account: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    phone: {type: String},
    address: {type: String},
})

const User = mongoose.model('User', userSchema);

module.exports = User;