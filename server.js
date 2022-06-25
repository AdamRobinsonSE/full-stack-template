const express = require('express') // Import express, a web framework for node.js, does all the heavy lifting for us
const app = express()           // Create express app, a web framework for node.js, a variable that holds the express app
const cors = require('cors')    // Import cors, a middleware that allows cross-origin requests, bypass cross-origin errors
const { response } = require('express')
const MongoClient = require('mongodb').MongoClient  // Import mongodb, a MongoDB database
require('dotenv').config()   // Import dotenv, a module that loads environment variables from a .env file, hides them from the source code


let db,
    dbConnectionString = process.env.DB_STRING, // Set dbConnectionString, a string that holds the connection string to the database, grabs the variable from the .env file
    dbName = 'star-trek-api', // Set dbName, a string that holds the name of the database',
    collection

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('Connected to database')    // Log to console that we connected to the database
        db = client.db(dbName)  // Set db, a variable that holds the database
        collection = db.collection('alien-info')    // Set collection, a variable that holds the collection of the database
    })

app.set('view engine', 'ejs') // Set the view engine to ejs, a templating engine for node.js, allows us to use html in our code
app.use(cors()) // Use cors, a middleware that allows cross-origin requests, bypass cross-origin errors
app.use(express.static('public')) // Use express.static, a middleware that serves static files, in this case, the public folder
app.use(express.json()) // Use express.json, a middleware that parses JSON, allows us to use JSON in our code
app.use(express.urlencoded({ extended: true })) // Use express.urlencoded, a middleware that parses URL encoded data, allows us to use URL encoded data in our code

app.get('/', async (req, res) => {
    try {
        res.render('index') // Render the index.ejs file, a file that holds the html for the index page
    }
    catch (error) {
        response.status(500).send({message: error.message}) // Send a 500 error if there is an error, and send the error message
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening on port`) // Log to console that the server is listening on port
})