var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static('public'));

var server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('quickfix listening at http://%s:%s', host, port);
});
