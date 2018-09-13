var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var cors = require('cors');

var app = express();

var mongoose = require('mongoose');

//api login
var login= require('./API/login');

//connect data

//mlab data
// mongoose.set('useFindAndModify', false)
// mongoose.connect('mongodb://vinhpro1998:1998vinhpro@ds125362.mlab.com:25362/vinhnodb',{ useNewUrlParser: true });

//mongodb local
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/lazada',{
    useNewUrlParser: true,
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keybroad cat',
    resave: false,
    saveUninitialized: false
}));

// thiet lap passport
app.use(passport.initialize());
app.use(passport.session());


app.use('/api/account',login);


app.get('/',(req,res,next)=>{
    res.json({title : "Hello"});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  // error handler
  app.use(function(err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

app.listen(3000, err=>{
    console.log('server is running');
});

module.exports = app;