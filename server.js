// create server

const express = require('express');

const path = require ('path');

const app = express();

// port 3000?
const port = 3000;

// variable to hold

let reservationArr = [];

let waitListArr = [];

// API Route
// 1. land index.html

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname,"index.html"));
});

// 2. Add tables 

app.get('/api/add', function(req,res) {
    res.sendFile(path.to(__dirname,"reserve.html"));
})

// 3. View tables

app.get('/api/listoftables', function(req,res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get('/api/searchreservations/:tablename', function(req,res){

    let searchedReservation = req.params.tablename;
    
    for(let i = 0; i<reservationArr.length; i++) {

        if (searchedReservation === reservationArr[i].username) {
            return res.json(reservationArr[i]);
        }
    }
})


// 4. Make reversations

app.post('/api/reservetable', function(req,res) {
    let newReservation = req.body;


})

// create one .get to load page

// create

//listen to the port

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
