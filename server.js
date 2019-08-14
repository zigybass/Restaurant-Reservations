// create server

const express = require('express');

const path = require ('path');

const app = express();

// port 3000?
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/reserve', function(req, res){
  res.sendFile(path.join(__dirname, 'reserve.html'));
});

app.get('/tables', function(req, res){
  res.sendFile(path.join(__dirname, 'tables.html'));
});

app.listen(port, function(){
  console.log("listing at http://localhost:" + port);
});

// variable to hold


// API Route
// 1. land index.html
// 2. View tables
// 3. Make reversations

// create one .get to load page

// create
