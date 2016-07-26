// create a router
var express = require('express'),
  router    = express.Router();

// export the router
module.exports = router;

// get all the controllers
var siteController      = require('./controllers/site.controller');
var dashboardController = require('./controllers/dashboard.controller');

// apply the routes
router

  // normal site routes
  .get('/', siteController.getHome)
  .get('/about', siteController.getAbout)
  .get('/contact', siteController.getContact)
  .post('/contact', siteController.postContact)

  // dashboard routes
  .get('/dashboard', dashboardController.getDashboard);

