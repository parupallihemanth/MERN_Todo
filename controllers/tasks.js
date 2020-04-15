// const asyncHandler = require('../middlewares/async')
const ErrResponse = require('../utils/errorResponse')
const Tasks = require('../modals/tasks');


// @desc  :   get all Tasks(GET)
// @route :   api/v1/tasks
// @access :  public
exports.getAllTasks = async(req, res) =>{
    try{
        const totalTasks = await Tasks.find()  
        
        res.status(200).json({
        
        data : totalTasks
    })
}

    catch(err){
        res.status(400).json({
            success : false,

    })
}

};




// @desc  :   create new task(POST)
// @route :   api/v1/task
// @access :  public
exports.createTask = async(req, res) =>{
    try{
        const aTask = await Tasks.create(req.body)
    res.status(200).json({
        success : true,
        data : aTask

    })
    }

    catch(err){
        res.status(400).json({
            success : false
        })
    }
    
    
}




// @desc  :   Delete a task(Delete)
// @route :   api/v1/task
// @access :  public
exports.deleteTask = async(req, res, next) =>{
    try{
        const dTask = await Tasks.findByIdAndDelete(req.params.id);
    
    
    if(!dTask){
        return next(new ErrResponse(`Resourse not found with ${req.params.id}` , 400))
    }
    res.status(200).json({
        success : true,
        data : dTask
    })
}
    catch(err){
        //  res.status(400).json({ success : false })
        next(err);
        
    }

}





