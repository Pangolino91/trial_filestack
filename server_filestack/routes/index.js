var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');
const client = require('filestack-js').init('A9ZaZkmYdSYuVVWVsY6q6z');

// exporting constants




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { client });
});

module.exports = router;
