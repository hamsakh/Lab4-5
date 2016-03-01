
var express = require('express');
var app = express();

app.use(express.static('./static'));

app.get('/api/post', function(req, res) {
    var post = {
        "header": "Title added with Ajax from a /api/post route",
        "body": "This post's body text was populated with JavaScript"
    }
    res.send(post)
});
/*app.get('/', function (req, res) {
  res.sendFile(__dirname + '/static/index.html');
});

app.get('/css/style.css', function(req, res) {
   res.sendFile(__dirname + '/static/css/style.css'); 
});
*/
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

