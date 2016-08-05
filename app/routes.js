// grab everything we need
var express           = require('express'),
  router              = express.Router(),
  siteController      = require('./controllers/site.controller'),
  dashboardController = require('./controllers/dashboard.controller'),
  nameCheckMiddleware = require('./middleware/nameCheck');

// export the router
module.exports = router;

// assign routes to the router ==================================
// normal site routes
router.get('/',           siteController.getHome);
router.get('/about',      siteController.getAbout);
router.get('/contact',    siteController.getContact);
router.post('/contact',   siteController.postContact);

// profile routes
router.get('/@:username', nameCheckMiddleware, siteController.getProfile);

// dashboard routes
router.get('/dashboard', dashboardController.getDashboard);

// 404 catchall
router.use(function(req, res, next) {
  res.status(404);
  res.send('404 Not Found');
});