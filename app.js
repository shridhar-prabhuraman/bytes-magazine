//==============================================================================

/* 
 * Author: Krushn Dayshmookh
 *
 *  THIS FILE HAS BEEN MADE SPECIFICIALLY TO WORK WITH HEROKU.
 *
 *
 */




/****************************
 *                          *
 *   GLOBAL DECLARATIONS    ****************************************************
 *                          *
 ****************************/


const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

var config = require('./config');

var appport = process.env.PORT || config.appport;




/****************************
 *                          *
 *         APP DATA         ****************************************************
 *                          *
 ****************************
 *
 * This part is used for serving the website.
 *
 */


var app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies

app.use(express.static(__dirname + '/www'));

app.listen(appport, function () {
    console.log('Server listening at port %d', appport);
});

// must be at last
app.use(function (req, res, next) {
    fs.readFile(__dirname + "/www/pages/error404.html", function (err, data) {
        res.status(404).write(data);
        res.end();
    });
});

/*
//var mongolaburi = process.env.MONGOLAB_URI || "mongodb://";
//var MongoClient = require('mongodb').MongoClient;
// Connection URL
//var url = mongolaburi;
// Use connect method to connect to the server
*/
