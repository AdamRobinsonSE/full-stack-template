const express = require('express') // Import express, a web framework for node.js, does all the heavy lifting for us
const app = express()           // Create express app, a web framework for node.js, a variable that holds the express app
const cors = require('cors')    // Import cors, a middleware that allows cross-origin requests, bypass cross-origin errors
const MongoClient = require('mongodb').MongoClient  // Import mongodb, a MongoDB database
require('dotenv').config()   // Import dotenv, a module that loads environment variables from a .env file, hides them from the source code
const PORT = process.env.PORT || 8000   // Set port, a port number to listen on

let db,
    dbConnectionString = process.env.DB_STRING, // Set dbConnectionString, a string that holds the connection string to the database, grabs the variable from the .env file
    dbName = 'star-trek-api' // Set dbName, a string that holds the name of the database',
    collection

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('Connected to database')    // Log to console that we connected to the database
        db = client.db(dbName)  // Set db, a variable that holds the database
        collection = db.collection('alien-info')    // Set collection, a variable that holds the collection of the database
    })