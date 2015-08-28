var express = require('express');
var app = express();
var server = app.listen(5000, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http:// %s : %s',host, port);
});
app.use(require('body-parser')()); //we can get the data na binigay ng client using get.body
app.use(require('method-override')());
app.use(require(__dirname + '/config/router')(express.Router()));

	