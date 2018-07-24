var mongoose = require('mongoose');
var moment = require('moment');

var productSchema = new mongoose.Schema({
    productName: {type: String, required: true},
    quantity: {type: Number, default: 0}, 
    productDescription: {type: String, default:''}
})

module.exports = mongoose.model('productdb', productSchema);