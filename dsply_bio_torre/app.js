var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const axios = require('axios');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);

//Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Variables goblales para vistas
app.locals.title = "Bio";
app.locals.urlBio = "https://torre.bio/api/bios/";
app.locals.urlPeople = "https://bio.torre.co/api/people/";
app.locals.idUserDef = "richardapalaciosg";

/**
 * Rutas de mi aplicación web
 */
app.use('/', require('./routes/index'));
app.use('/conections', require('./routes/conections'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // comprueba error de validaciòn
  if (err.array) {
    err.status = 422;
    const errInfo = err.array({ onlyFirstError: true })[0];
    err.message = isAPI(req) 
    ? {message: "Not valid", errors: err.mapped()}
    : `Not valid - ${errInfo.param} ${errInfo.msg}`;
  }
  res.status(err.status || 500);
  if(isAPI(req)) {
    res.json({ success: false, error: err.message});
    return;
  }
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.render("error");
});

// funcion para saber si es una petición a un API
function isAPI(req) {
  return req.originalUrl.indexOf("/api") === 0;
}

module.exports = app;
