var express = require('express'),
  router = express.Router(),
  path = require('path');

// export the router
module.exports = router;

// apply routes to the router
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

router.get('/about', function(req, res) {
  res.json({ message: 'i am the about page' });
});

router.get('/contact', function(req, res) {
  res.sendFile(path.join(__dirname, '../contact.html'));
});

router.post('/contact', function(req, res) {
  console.log(req.body);
  res.send('hello ' + req.body.name + '! Nice to meet you!');
});

router.get('/@:username/:post_slug', function(req, res) {
  console.log(req.params);

  // grab user profile
  // grab the post

  res.send('You are reading ' + req.params.post_slug + ' by ' + req.params.username);
});

// 404
router.use(function(req, res, next) {
  res.status(404);
  res.sendFile(path.join(__dirname, '../404.html'));
});