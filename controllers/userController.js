var User = require('../models/userModel');
//var bcrypt = require('bcryptjs');

module.exports = {

    loginUser: function(params, callback){
        User.findOne({name: params.name}, function(err,user){
            if(err){
                callback(err, null);
                return;
            }

            // bcrypt.compare(params.password, user.password, function(err, res){
            //     if(err){
            //         callback(err,null);
            //     }

            //     if(res === false){
            //         callback(err, null);
            //     }else{
            //         callback(null, user);
            //     }
            // });
        });

    }//end function



} //end module.exports