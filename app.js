require('dotenv').config();

const express = require('express');
let app = express();

const path = require('path');
const ejs = require('ejs');
var bodyParser = require('body-parser');



app.use(express.static(path.join(__dirname, 'public')));
app.set('/views', __dirname + '/views');

// set up template
app.set( 'view engine', 'ejs' );

//Require routes in from routes' index file
var routes = require('./routes/index.js')

app.use(routes);


let port = process.env.PORT || 3001;

app.listen(port, function(){
  console.log('server is running on port:', port)
})
