var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', home);

function home (req, res, next) {
  res.render('Portfolio',
   { 
     title: 'Home'
     });
};
router.get('/abtMe', aboutMe);

function aboutMe (req, res, next) {
  res.render('AboutMe',
   { 
     title: 'About Me' 
     });
};

router.get('/ser', services);

function services (req, res, next) {
  res.render('Services',
   { 
     title: 'Services' 
     });
};

router.get('/projects', projects);

function projects (req, res, next) {
  res.render('Projects',
   { 
     title: 'My Work' // add variables to be inserted//
     });
};

router.get('/ContactMe', ContactMe);

function ContactMe (req, res, next) {
  res.render('ContactMe',
   { 
     title: 'Lets Connect' // add variables to be inserted//
     });
};



module.exports = router;
