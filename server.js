var express = require('express');
var mongoose = require('mongoose');
var stylus = require('stylus');
var bodyParser = require('body-parser');


var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var PORT = process.env.PORT || 3030;

var app = express();

function compile(str, path){
    return stylus(str).set('filename', path);
}

//app.use(express.logger('dev'));

app.use(bodyParser.json());

app.use(stylus.middleware(
    {
        src: __dirname + '/public',
        compile: compile
    }
));

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

app.listen(PORT);
console.log(`listening on port ${PORT}`);

if(env === 'development') {
    
    mongoose.connect('mongodb://localhost/multivision');

} else {
    
    mongoose.connect('mongodb://prashant:mongovision@ds037165.mongolab.com:37165/mongovision');

}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error ..'));
db.once('open', function callback() {
    console.log('hey database up and running !');
});

var messageSchema = mongoose.Schema({ message: String });
var Message = mongoose.model('Message', messageSchema);

var mongoMessage;

Message.findOne().exec(function(err, messageDoc) {
    mongoMessage = messageDoc.message;
});


app.get('/partials/:partialPath', function(req, res) {
    res.render('partials/' + req.params.partialPath);
});


app.get('*', function(req, res) {
    res.render('index', {
        mongoMessage: mongoMessage
    });
});
