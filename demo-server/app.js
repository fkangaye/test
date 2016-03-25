var express = require("../node_modules/express");
var app = express();
var path = require("path");

app.get('/', function(request, result){
    result.sendFile(path.join(__dirname+'/../app/index.html'));
});
app.use(express.static(path.join(__dirname,'../')));
var http = require('http').Server(app);
http.listen(8080);

