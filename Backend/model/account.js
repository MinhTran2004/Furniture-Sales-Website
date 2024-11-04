const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    name: {type: String},
    account: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    phone: {type: String},
    address: {type: String},
})

const Account = mongoose.model('accounts', accountSchema);

module.exports = Account;