// Import libraries 
const express = require('express');
const dotenv = require('dotenv')

// Import files
const connectDB = require('./config/db')


// get the config file
dotenv.config({path:'./config/config.env'});
connectDB();

// creating server
const app = express();


// Middlewares










// server running port
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running on ${PORT}`))

