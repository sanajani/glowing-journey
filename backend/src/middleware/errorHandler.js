import { AppError } from "../utilities/appError.js";

export const errorHandler = (err,req,res,next) => {
    err.statusCode = err.statusCode || 500;
    console.log(err);
    

    if(err instanceof AppError){
        return res.status(err.statusCode).json({
            message: err.message,
            status:"error"       
        })
    }

    return res.status(500).json({
        message: "Server error",
        status:"Failed",
        error: err
    })
}