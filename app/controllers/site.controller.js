// export the functions in this controller
module.exports = {
  getHome: getHome,
  getAbout: getAbout,
  getContact: getContact,
  postContact: postContact
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
  res.json(req.body);
}

