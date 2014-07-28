var restify = require('restify');

var server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/echo/:name', function (req, res, next) {
	var name = req.params.name;
	console.log(name);
  res.send("swag");
  res.end();
  return next();
});

server.post("/watever",function(req,res,next) {
	var whatever = req.body.whatever;
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});