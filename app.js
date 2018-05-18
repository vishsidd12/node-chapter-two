var exp = require('express');
var app = exp();

var routes = require('./routes/route.js');

app.set('view engine','ejs');
app.use(exp.static(__dirname+'/public'));

app.get('/',routes.home);

app.get('/:city',routes.city);  


var port = process.env.PORT || 8080;
app.listen(port);