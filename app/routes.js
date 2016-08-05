var express           = require('express'),
  router              = express.Router(),
  path                = require('path'),
  siteController      = require('./controllers/site.controller'),
  dashboardController = require('./controllers/dashboard.controller'),
  nameCheckMiddleware = require('./middleware/nameCheck');

// export the router
module.exports = router;

// site routes ========================
router.get('/',           siteController.showHome);
router.get('/about',      siteController.showAbout);
router.get('/contact',    siteController.showContact);
router.post('/contact',   siteController.processContact);
router.get('/@:username/:post_slug', nameCheckMiddleware, siteController.showProfile);

// dashboard routes ===================
router.get('/dashboard', dashboardController.showDashboard);

// api routes =========================

// 404 catchall
router.use(siteController.show404);

