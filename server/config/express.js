var express = require('express');
var passport = require('passport');
var stylus = require('stylus');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

module.exports = function(app, config) {
    
    function compile(str, path){
        return stylus(str).set('filename', path);
    }

    //app.use(express.logger('dev'));
    
    app.use(cookieParser());
    
    app.use(bodyParser.json());
    
    app.use(session({secret: 'Multi Vision Unicorns'}));
    
    app.use(passport.initialize());
    
    app.use(passport.session());
    
    app.use(stylus.middleware(
        {
            src: config.rootPath + '/public',
            compile: compile
        }
    ));

    app.use(express.static(config.rootPath + '/public'));

    app.set('views', config.rootPath + '/server/views');
    app.set('view engine', 'jade');
    
}
