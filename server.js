// Import libraries 
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors')
const errHandler = require('./middlewares/error')
const bodyParser = require('body-parser')

// Import files
const tasks = require('./routes/tasks')
const connectDB = require('./config/db')


// get the config file
dotenv.config({path:'./config/.env'});
connectDB();

// creating server
const app = express();


// Middlewares
app.use(express.json());
app.use(cors())
app.use('/api/task', tasks);
app.use(errHandler);









// server running port
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running on ${PORT}`))

