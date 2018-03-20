/*
 * This code is based heavily on "Express in Action"
 * ISBN 13: 978-1-61729-242-2
 * Original authors are:
 *   Sesha Sai Darapureddy, Shanmukha Dasari,
 *   Sai Ram Pinnapureddy,  Shushruth Kasarla,
 *   Marc Funston, Perry Copus
 */

// Varibles and declarations required to start
var express = require("express");
var logger = require("morgan"); // simplifies logging operations
var path = require("path");
var http = require("http");
var cors = require("cors");

var app = express();

var mysql = require('mysql');

//enable cross-origin resource sharing (CORS).
//cf  https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
//and https://en.wikipedia.org/wiki/Same-origin_policy
//Without CORS, the Angular client cannot communicate with the
//Express server

app.use(cors()); 

// routes
var manufacturers = require('./routes/manufacturers');
var productionruns = require('./routes/productionruns');
var products = require('./routes/products');
var billofmaterials = require('./routes/billofmaterials');
var lineitems = require('./routes/lineitems');
var parts = require('./routes/parts');
 


// for use in routing later
var staticPath = path.resolve(__dirname, "static");
app.use(express.static(staticPath));

// this is the logging command
app.use(logger("dev"));

// routes
app.use('/productionruns', productionruns);

app.use('/products', products);

app.use('/manufacturers', manufacturers);

app.use('/billofmaterials', billofmaterials);

app.use('/lineitems', lineitems);

app.use('/parts', parts);

// creates server
http.createServer(app).listen(4000);