var express = require('express');
var router = express.Router();
var User = require('../models/user');
var jwt = require ('jsonwebtoken');

// var passport = require('passport');  

/* GET home page. */
router.get('/', function(req, res) {
  res.json({ title: 'Express' });
});

router.post('/register', async (req,res)=>{
    console.log(req.body);
    let user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    user.picture = user.gravatar();
    user.isSeller = req.body.isSeller;

    User.findOne({email : req.body.email},(err,user)=>{
        if(user){
            res.json({
                success: false,
                message: 'Accout with that email is exits'
            });
        }else{
            user.save();

            var token = jwt.sign({
                user: user,
            },config.secret,{
                expressIn: '7d'
            });
        }

        res.json({
            success : true,
            message : 'token',
            token : token
        })
    })

})


router.post('login', (req,res,next)=>{
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
            },config.secret,{
                expiresIn: '7d'
            });
            res.json({
                success: true,
                message: 'enjoy',
                token:token
            })
        }
    }
})



module.exports = router;
