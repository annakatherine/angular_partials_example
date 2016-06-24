var express = require('express');
var app=express();
var path = require('path');
var bodyParser = require('body-parser');

// server up
app.listen( 8080, 'localhost', function( req, res ){
  console.log( 'server listening on 8080' );
});

// base url
app.get( '/', function ( req, res ){
  console.log( 'at base url' );
  res.sendFile( path.resolve( 'views/index.html') );
});

// static folder
app.use( express.static( 'public' ) );
