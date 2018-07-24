var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/addproduct', function(req, res, next){
  res.render('addproduct', {title: 'Products'});
})

router.post('/addproduct', function(req,res,next){
    productController.addProduct(req.body, function(err, product){
      if (err){
        res.json({
          message: 'Fail',
          error: err
        });
        return;
      }
      res.json({
        message: 'Success',
        data: product
      });
      return;
    });
});

router.get('/viewproducts', function(req, res, next){
  productController.getAllProducts({}, function(err, products){
    if(err){
      res.json({
        message: 'Fail', 
        error: err
      });
      return;
    }
    res.json({
      message: 'Success', 
      data: products
    });
    return;
  });
});

module.exports = router;
