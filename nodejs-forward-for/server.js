var http = require('http');

var server = http.createServer(function(req, res) {
  console.log('Client request, IP:', req.headers['x-forwarded-for']);
  res.end('Hello, your IP is: "' + req.headers['x-forwarded-for'] + '"');
});

console.log('Listening on port 8000');
server.listen(8000);