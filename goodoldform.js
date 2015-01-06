var express = require('express');
var bodyparser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', process.argv[3]);
app.use(bodyparser.urlencoded({extended: false}));
app.post('/form', function(req, res){
	// get the form input from the request
	var reversedStr =  req.body.str.split('').reverse().join('');
	res.end(reversedStr);
});

app.listen(process.argv[2]);