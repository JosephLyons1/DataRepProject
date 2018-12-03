var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var mongoDB = 'mongodb://joe:password123@ds033966.mlab.com:33966/datarepdatabase';
mongoose.connect(mongoDB);

var Schema = mongoose.Schema;
var bookSchema = new Schema({
    title: String,
    content: String
})
var bookModel = mongoose.model('book', bookSchema);


//Here we are configuring express to use body-parser as middle-ware. 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });
    
app.post('/name', function(req, res){
    res.send("Hello you sent " +
    req.body.firstname + " " +
    req.body.lastname);
})

app.get('/', function (req, res) {
   res.send('Hello from Express');
})

app.post('/api/book', function(req, res){
    console.log("post successful");
    console.log(req.body.title);
    console.log(req.body.content);

    bookModel.create({
        title: req.body.title,
        content: req.body.content
    });
    res.send('Item added');


})

app.get('/api/book', function(req, res){
    bookModel.find(function(err, data){
        res.json(data);
    });
})

app.get('/api/book/:id', function(req, res){
    console.log("Read book " +req.params.id);

    //bookModel.find({_id : req.params.id}, 
    bookModel.findById(req.params.id,
        function (err, data) {
            res.json(data);
        });
})

app.put('/api/book/:id', function(req, res){
    console.log("Update book" +req.params.id);
    console.log(req.body.title);
    console.log(req.body.content);

    bookModel.findByIdAndUpdate(req.params.id, req.body, 
        function(err, data){
            res.send(data);
        })
})

app.delete('/api/book/:id', function(req, res){
    console.log(req.params.id);

    bookModel.deleteOne({_id:req.params.id},
    function(err, data)
    {
        if(err)
            res.send(err);
        res.send(data);
    })
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})