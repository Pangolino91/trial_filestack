var express = require('express');
var router = express.Router();

// router.get('/', function(req, res, next) {
//   res.send('Hello wolrd');
// });

router.post('/files', function(req, res, next) {
    console.log(req.files)
});

module.exports = router;