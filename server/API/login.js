var express = require('express');
var router = express.Router();
var User = require('../models/user');
var jwt = require ('jsonwebtoken');

var checkJWT = require ('../middlewares/check-jwt');

/* GET home page. */
router.get('/', function(req, res) {
  res.json({ title: 'Express' });
});

router.post('/register', (req,res,next)=>{
    
    let user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    user.picture = user.gravatar();
    user.isSeller = req.body.isSeller;
    
    console.log(user);

    User.findOne({email : req.body.email},(err,existing)=>{
        if(existing){
            res.json({
                success: false,
                message: 'Accout with that email is exits'
            });
        }else{
            user.save();

            var token = jwt.sign({
                user: user,
            },'supersecret123');

            res.json({
                success : true,
                message : 'token',
                token : token
            })
        }       
    })
})


router.post('/login', (req,res,next)=>{
    
    User.findOne({email : req.body.email},(err,user)=>{
    if(err) throw err;

    if(!user){
        res.json({
            success: false,
            message: 'Dang nhap that bai'
        });
    }else if(user){

        var validPassword = user.comparePassword(req.body.password);
        if(!validPassword){
            res.json({
                success: false,
                message: 'Dang nhap that bai, sai pass'
            });
        }else{
            var token = jwt.sign({
                user:user
            },'supersecret123');
            res.json({
                success: true,
                user : user.name,
                message: 'enjoy',
                token:token
            })
        }
    }
    })
})

router.route('/profile')
    .get(checkJWT, (req,res,next)=>{
        User.findOne({_id: req.decoded.user._id},(err,user)=>{
            res.json({
                success: true,
                user: user,
                message: "Success"
            });
        });
    })

    .post(checkJWT, (req,res,next)=>{
        User.findOne({_id: req.decoded.user._id},(err,user)=>{
            if(err) return next(err);

            if(req.body.name) user.name = req.body.name;
            if(req.body.email) user.email = req.body.email;
            if(req.body.password) user.password = req.body.password;

            user.isSeller = req.body.isSeller;

            user.save();
            res.json({
                success: true,
                message: 'tao thanh cong profile'
            });
        });
    });


module.exports = router;
