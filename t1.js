var express = require('express');
var app = express();
app.get('/ping', function(req, res){
  res.send('Ashley Test');
});
var server = app.listen(8000, function() {
    console.log('Ashley Test branch 3');
});