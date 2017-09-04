var express = require('express');
var app = express();
var artCollection = require('./artCollection');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/info', function (req, res) {
  const code = req.query.code;
  console.log(artCollection);
  if (!code) {
    res.send({error: 'No code provided'});
  } else {
    const art = artCollection[code];
    if (!art) {
      res.send({error: 'Incorrect code provided'});
    } else {
      res.send({data: art});
    }
  }
});

app.get('/', function(req, res) {
  res.send({ answer: 'Hello from Art Tour Server'});
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
