var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'KMB Songs', uid: req.user.fbId });
  //res.render('index', { title: 'KMB Songs' });
});

router.get('/red', function(req, res){
  try {
    if(typeof process.env.RED_HOST !== 'undefined') {
      var https = require('https');

      var options = {
        host: process.env.RED_HOST,
        port: 443,
        path: '/',
        method: 'GET'
      };

      var req = https.request(options, function(res) {
        // console.log('STATUS: ' + res.statusCode);
        // console.log('HEADERS: ' + JSON.stringify(res.headers));
        // res.setEncoding('utf8');
        // res.on('data', function (chunk) {
        //   console.log('BODY: ' + chunk);
        // });
        res.status(200).send('');
      });
    }
    else {
      res.status(500).send('Error');
    }
  }
  catch(e) {
    console.log(e);
    res.status(500).send('Error');
  }
})

module.exports = router;
