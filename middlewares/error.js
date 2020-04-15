const ErrorResponse = require('../utils/errorResponse')
const errHandler = ( err,req, res, next ) =>{
    let error = { ...err }
    error.message = err.message
    // To print cpmolete error object  on console
    // console.log(err)
    // console.log(err.name)
     if(err.name === 'CastError' ) {
         const message =  `Resourse not found with id of ${err.value}`;
         error = new ErrorResponse(message, 404)

     }
    res.status( error.statusCode || 500).json({
        success : false,
        error : error.message || 'Server Error '
    })
};


module.exports = errHandler