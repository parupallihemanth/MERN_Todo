const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    task : {
        type : String,
        required : [ true, 'Please enter the task']
    },

    time : {
        type : Date,
        default : Date.now()
    }
})

module.exports = mongoose.model('Tasks', taskSchema);