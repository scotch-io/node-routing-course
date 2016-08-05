module.exports = function(req, res, next) {

  console.log('middleware!');

  // find username in the database
  // var user = User.findOne({ username: req.params.username });
  var user = false;

  // if no user found
  if ( ! req.params.username) {
    res.status(404);
    return res.send('404 Not Found');
  }

  // save user object to the route
  req.user = {
    username: 'chris'
  };

  // middleware passed, go ahead
  next();
};