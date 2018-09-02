var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

var mongoose = require('mongoose');

// var local = require('')

//connect data
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/lazada',{
    useNewUrlParser: true,
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));

app.get('/',(req,res,next)=>{
    res.json({title : "Hello"});
});

app.listen(3000, err=>{
    console.log('server is running');
});