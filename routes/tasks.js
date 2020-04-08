const express = require('express');
const router = express.Router();

import { getAllTasks, createTask, deleteTask } from '../controllers/tasks';


router.route('/')
                .get(getAllTasks)
                 .post(createTask)

router.route('/:id')
                   .delete(deleteTask)    
                   
                   
module.exports = router                   