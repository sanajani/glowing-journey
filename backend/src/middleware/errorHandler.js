import { AppError } from "../utilities/appError.js";

export const errorHandler = (err,req,res,next) => {
    err.status = err.status || 500;

    if(err instanceof AppError){
        return res.status(err.status).json({
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