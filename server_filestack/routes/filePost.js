var express = require('express');
var router = express.Router();

// router.get('/', function(req, res, next) {
//   res.send('Hello wolrd');
// });

// router.get('/', function(req, res, next) {
//     res.('hello!');
// });

router.post("/", function(req, res, next) {
  console.log("request", req.body)

  res.send(200)
})

module.exports = router;