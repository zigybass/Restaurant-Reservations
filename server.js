// create server

const express = require('express');

const path = require ('path');

const app = epress();

// port 3000?
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res){
    res.send("Hello World");
});

app.listen(port);

// variable to hold


// API Route
// 1. land index.html
// 2. View tables
// 3. Make reversations

// create one .get to load page

// create