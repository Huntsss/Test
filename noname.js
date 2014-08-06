var restify = require('restify'),moment = require("moment");

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
	// inits moment module -> calls utc time -> get the value from the epoch -> casts it to string and sends it
  res.send(moment().utc().valueOf().toString());
  res.end();
  return next();
});

server.post("/post",function(req,res,next) {
	// casts it to a JSON object from a string
	var body = JSON.parse(req.body);
	// json part .whatever from the json
	var string = body.string;
	console.log(string);
  res.send("success");
  res.end();
  return next();
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});