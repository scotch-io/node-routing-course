var app = require('express')(),
  port = process.env.PORT || 8080,
  morgan = require('morgan'),
  bodyParser = require('body-parser');

// configure
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));



// set routes
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use(authenticate);

app.get('/about', function(req, res) {
  res.json({ message: 'i am the about page' });
});

app.get('/contact', function(req, res) {
  res.sendFile(__dirname + '/contact.html');
});

app.post('/contact', function(req, res) {
  console.log(req.body);
  res.send('hello ' + req.body.name + '! Nice to meet you!');
});

app.get('/@:username/:post_slug', checkName, function(req, res) {
  console.log(req.params);

  // grab user profile
  // grab the post

  res.send('You are reading ' + req.params.post_slug + ' by ' + req.params.username);
});

// 404
app.use(function(req, res, next) {
  res.status(404);
  res.sendFile(__dirname + '/404.html');
});

function authenticate(req, res, next) {
  // make sure the user is authenticated
  // req.params.token

  console.log('authenticating user');

  next();
}

function checkName(req, res, next) {
  console.log(req.params, 'this is the middleware');

  // validation
  // check the database
  // var user = User.findOne({ username: req.params.username });
  // if ( ! user)

  next();
}

// start the server
app.listen(port, function() {
  console.log('App listening on http://localhost:' + port);
});