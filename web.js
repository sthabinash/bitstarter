var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var outFile = "index.html";
    var fileBuffer=fs.readFileSync(outFile);
    var line=fileBuffer.toString();
    response.send(line);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});