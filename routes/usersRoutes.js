var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('You are on the users page');
});

router.get('/login', function(req, res){
  res.render('login', {title: 'User Login'});
});

router.post('/login', function(req, res, next){
  userController.loginUser(req.body, function(err, user){
    if(err){
      res.json({
        message: 'Fail', 
        error: err
      });
      return;
    }
    if(user === null){
      res.status(400).json({
        message: 'Fail', 
        error: 'Check your username and password'
      });
      return;
    } //end user===null
    res.render('result', {
      message: 'Success ' + user.name + '. You have logged in', 
      data: user
    });
    return;
  });
});


module.exports = router;
