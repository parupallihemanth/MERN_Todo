const asyncHandler = require('../middlewares/async')
const Tasks = require('../modals/tasks');


// @desc  :   get all Tasks(GET)
// @route :   api/v1/tasks
// @access :  public
exports.getAllTasks = asyncHandler(async(req, res) =>{
    const totalTasks = await Tasks.find()
    res.status(200).json({
        success : true,
        data : totalTasks
    })

});




// @desc  :   create new task(POST)
// @route :   api/v1/task
// @access :  public
exports.createTask = asyncHandler(async(req, res) =>{
    const  newTask  = req.body;
    const aTask = await Tasks.create(newTask)
    res.status(200).json({
        success : true,
        data : aTask

    })
    
})




// @desc  :   Delete a task(Delete)
// @route :   api/v1/task
// @access :  public
exports.deleteTask = asyncHandler(async(req, res) =>{
    const id = req.params.id;
    const dTask = await Tasks.findByIdAndDelete(id);
    res.status(200).json({
        success : true,
        data : dTask
    })

})





