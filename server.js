// grab packages ==========================================
var app       = require('express')(),
  port        = process.env.PORT || 8080,
  morgan      = require('morgan'),
  bodyParser  = require('body-parser');

// configure our app ======================================
// make sure our app can grab data from forms
app.use(bodyParser.urlencoded({ extended: true }));

// log all requests to the console
app.use(morgan('dev'));

// route our app ==========================================
app.use('/', require('./app/routes'));

// start the server =======================================
app.listen(port, function() {
  console.log('App on http://localhost:' + port);
});