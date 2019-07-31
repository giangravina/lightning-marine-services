var express = require('express');
var app = express();




app.get('/', function(req, res, next){
	res.send('Hello World!');
	next();
});
app.use(myLogger);

app.listen(3000);