const mongoose = require('mongoose');


const taskSchema = mongoose.Schema({
    task : {
        type : String,
        required : true
    },

    time : {
        type : Date,
        default : Date.now()
    }
})

module.exports = mongoose.model('Tasks', taskSchema);