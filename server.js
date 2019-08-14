// create server

const express = require('express');

const path = require('path');

const app = express();

const currentReservations = [];
const currentWaitList = [];

// port 3000?
const port = 3000;

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/reserve', function(req, res) {
  res.sendFile(path.join(__dirname, 'reserve.html'));
});

app.get('/tables', function(req, res) {
  res.sendFile(path.join(__dirname, 'tables.html'));
});

app.get('/api/reservations', function(req, res){
  res.json(currentReservations);
});

app.get('/api/waitList', function(req, res){
  res.json(currentWaitList);
});

app.listen(port, function() {
  console.log("listing at http://localhost:" + port);
});

// variable to hold

// gets information from
app.post('/reserve', function(req, res) {
  if (currentReservations.length < 5) {
    console.log(req.body);
    currentReservations.push(req.body);
    console.log(currentReservations);
    res.end("booked");
  } else {
    currentWaitList.push(req.body);
    console.log(currentWaitList);
    res.end();
  }
});




// API Route
// 1. land index.html
// 2. View tables
// 3. Make reversations

// create one .get to load page

// create
