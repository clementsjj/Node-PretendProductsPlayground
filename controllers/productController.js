var Products = require('../models/productModel');

module.exports = 
{
    addProduct: function(params, callback){
        Products.create(params, function(err, product){
            if(err){
                callback(err, null);
                return;
            }
            callback(null, product);
            return;
        })
    },

    getAllProducts: function(params, callback){
        Products.find(params, function(err, product){
            if (err){
                callback(err, null);
                return;
            }
            callback(null, product)
        })
    }

}