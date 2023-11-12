var createError = require('http-errors');
var express = require('express');
var cors = require('cors')
var indexRouter = require('./routes/index');
var csvRouter = require('./routes/csv');

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/', indexRouter);
app.use('/csv', csvRouter);

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
  res.send('error');
});

module.exports = app;
