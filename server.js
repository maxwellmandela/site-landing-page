var express = require('express'),
    app = express();
var port = process.env.PORT || 8000;
app.use(express.static(__dirname + ''));
app.get('/', function(request, response) {
  response.render('index');
});

app.listen(port);
console.log('Server started on localhost:8000; press Ctrl-C to terminate....');

