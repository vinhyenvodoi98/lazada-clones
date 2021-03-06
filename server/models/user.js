var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');

var UserSchema = new Schema({
    email: String,
    name: String,
    password: String,
    picture: String,
    isSeller:{type: Boolean, default: false},
    address: {
        addr1: String,
        addr2:String,
    },
    created: { type: Date , default: Date.now }
});



UserSchema.pre('save',function(next){
    var user = this;

    if(!user.isModified('password'))return next();

    bcrypt.hash(user.password,null,null,(err,hash)=>{
        if(err) return next(err);

        user.password= hash;
        next();
    })
})

UserSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password,this.password);
}

UserSchema.methods.gravatar= function(size){
    if(!this.size) size = 200;
    if(!this.email) {
        return 'https://gravatar.com/avatar/?s' + size +'&d=retro';
    }else{
        var md5 = crypto.createHash('md5').update(this.email).digest('hex');
        return 'https://gravatar.com/avatar/' + md5 + '?s' +size + '&d=retro';
    }
    
}

module.exports = mongoose.model ('User',UserSchema);