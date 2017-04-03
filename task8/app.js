var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db=require('diskdb');
db.connect('./db',['articles']);

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// we need it to parse content-type application/json
app.use(bodyParser.json());

// we need it to parse content-type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(app.get('port'), function(){
  console.log("fhdjhj", app.get('port'));
})

app.get('/articles', function(request,response){
  response.json(db.articles.find());
})

app.get('/articles/:id',function(request,response){
  response.json(db.articles.findOne(
    {id: request.params.id}
  ));
})

app.post('/articles', function (request, response) {
  response.json(db.articles.save(request.body));
});

app.put('/articles', function (request, response) {
  response.json(db.articles.findOne({ id: request.body.id }));
});

app.put('/articles/:id', function (request, response) {
  response.json(db.articles.findOne({ id: request.params.id }));
});

app.delete('/articles', function (request, response) {
  response.json(db.articles.remove({ id: request.body.id }));
});

app.delete('/articles/:id', function (request, response) {
  response.json(db.articles.remove({ id: request.params.id }));
});

app.patch('/articles', function (request, response) {
  var options = {
    multi: false,
    upsert: false
  };
  var query = db.articles.findOne({ id: request.body.id });
  response.json(db.articles.update(query, request.body, options));
});

app.patch('/articles/:id', function (request, response) {
  var options = {
    multi: false,
    upsert: false
  };
  var query = db.articles.findOne({ id: request.params.id });
  response.json(db.articles.update(query, request.body, options));
});

