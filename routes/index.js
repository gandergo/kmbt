var express = require('express');
var https = require('https');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'KMB Songs', uid: req.user.fbId });
  //res.render('index', { title: 'KMB Songs' });
});

router.get('/red', function(req, res){
  https.get(process.env.RED_URL, (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      //console.log(JSON.parse(data).explanation);
      res.status(200).send('');
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
    res.status(500).send('Error');
  });
})

module.exports = router;
