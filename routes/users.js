var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/gurleen',gurleen);


/* 2nd route. */


function gurleen (req, res, next) {
  res.render('index',
   { 
     title: 'Express' // add variables to be inserted//
     });
};
module.exports = router;
