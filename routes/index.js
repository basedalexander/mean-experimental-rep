var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tycon' , age: 22});
});

router.get('/users', function(req, res, next) {
  mongoose.model('users').find(function (err, users) {
    res.send(users);
  });
});

module.exports = router;
