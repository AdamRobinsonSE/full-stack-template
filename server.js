const express = require('express') // Import express, a web framework for node.js, does all the heavy lifting for us
const app = express()           // Create express app, a web framework for node.js, a variable that holds the express app
const cors = require('cors')    // Import cors, a middleware that allows cross-origin requests, bypass cross-origin errors
const MongoClient = require('mongodb').MongoClient  // Import mongodb, a MongoDB database
require('dotenv').config()   // Import dotenv, a module that loads environment variables from a .env file, hides them from the source code
const PORT = process.env.PORT || 8000   // Set port, a port number to listen on