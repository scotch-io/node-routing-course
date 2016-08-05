var path = require('path');

module.exports = {
  showHome: showHome,
  showAbout: showAbout,
  showContact: showContact,
  processContact: processContact,
  showProfile: showProfile,
  show404: show404
};

function showHome(req, res) {
  res.sendFile(path.join(__dirname, '../../index.html'));
}

function showAbout(req, res) {
  res.json({ message: 'i am the about page' });
}

function showContact(req, res) {
  res.sendFile(path.join(__dirname, '../../contact.html'));
}

function processContact(req, res) {
  console.log(req.body);
  res.send('hello ' + req.body.name + '! Nice to meet you!');
}

function showProfile(req, res) {
  console.log(req.params);
  // grab user profile
  // grab the post
  res.send('You are reading ' + req.params.post_slug + ' by ' + req.params.username);
}

function show404(req, res, next) {
  res.status(404);
  res.sendFile(path.join(__dirname, '../../404.html'));
}
