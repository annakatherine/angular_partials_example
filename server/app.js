var express = require('express');
var app=express();
var path = require('path');
var bodyParser = require('body-parser');
app.use( bodyParser.json() );
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/assignments');

var assignmentSchema = new mongoose.Schema( {
  assignment_number: String,
  student_name: String,
  score: String,
  date_completed: String,
  completed: String
});

var assignmentModel = mongoose.model( 'assignmentModel', assignmentSchema);

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

app.get( '/getAssignment', function( req, res ){
  console.log( 'in getassignment get');
  
});

app.post( '/postAssignment', function( req, res ){
  console.log( 'in post assignment ' + req.body.assignment );
  var assignmentAdded = {
    assignment_number: req.body.assignment,
    student_name: req.body.name,
    score: req.body.score,
    date_completed: req.body.date_completed,
    completed: req.body.completed
 };
 // MAGIIIIIIIIIIC
 var assignmentOut = assignmentModel( assignmentAdded );
 console.log( 'assignmentAdded: ' + assignmentAdded );
 assignmentOut.save();
 console.log( 'assignmentOut: ' + assignmentOut );
});
