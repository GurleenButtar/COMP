var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', home);

function home (req, res, next) {
  res.render('index',
   { 
     title: 'Express' // add variables to be inserted//
     });
};



module.exports = router;
