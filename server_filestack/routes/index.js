var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');
const {apiKey} = require('../key.json');
require('dotenv').config();
var Minio = require('minio');

// Instantiate the minio client with the endpoint
// and access keys as shown below.
var minioClient = new Minio.Client({
    endPoint: '192.168.8.100',
    port: 9000,
    useSSL: false,
    accessKey: 'N91DTHK2W3QBIH8LBY16',
    secretKey: 'Xx98U0Ty9SuuMX+41FHH2gh1+hzi5XMPp+dGUW9O'
});




console.log(apiKey)
// exporting constants
// const apiKey = 'A9ZaZkmYdSYuVVWVsY6q6z';



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { apiKey });
});

module.exports = router;
