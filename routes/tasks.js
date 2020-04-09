const express = require('express');
const router = express.Router();

const { getAllTasks, createTask, deleteTask } = require('../controllers/tasks');


router.route('/')
                .get(getAllTasks)
                 .post(createTask)

router.route('/:id')
                   .delete(deleteTask)    
                   
                   
module.exports = router                   