var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongo = require('mongodb');
var mongoose = require('mongoose');
//var monk = require('monk');
//var db = monk('localhost:27017/nodetest1');
// const MongoClient = require('mongodb').MongoClient;
// MongoClient.connect('localhost:27017/nodetest1');
// const client = MongoClient.connection;
// const db = client.db('nodetest1');


//mongoose.connect('mongodb://localhost:27017/nodetest1');
//var db = mongoose.connection;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var buyerRouter = require('./routes/buyer');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req,res,next){
  //req.db = db;
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/BuyerPortal', buyerRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
