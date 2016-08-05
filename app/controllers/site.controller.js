// export the functions in this controller
module.exports = {
  getHome: getHome,
  getAbout: getAbout,
  getContact: getContact,
  postContact: postContact,
  getProfile: getProfile
};

// create our route functions
function getHome(req, res) {
  res.send('home page');
}

function getAbout(req, res) {
  res.send('about page');
}

function getContact(req, res) {
  res.send('contact page');
}

function postContact(req, res) {
  res.send(req.body);
}

function getProfile(req, res) {
  // find the user by username
  var username = req.params.username;
  console.log(username);
  res.send(username);
}
