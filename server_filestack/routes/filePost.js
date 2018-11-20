var express = require('express');
var router = express.Router();

// router.get('/', function(req, res, next) {
//   res.send('Hello wolrd');
// });

router.get('/', function(req, res, next) {
    res.send('hello!');
});

router.post('/files', function(req, res, next) {
    console.log('request', req.body);
});

module.exports = router;