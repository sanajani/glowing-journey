import AppError from '../utilities/appError.js';

const errorHandlers = {
    JsonWebTokenError: () => new AppError("Invalid token. Please log in again!", 401),
    TokenExpiredError: () => new AppError('Your token has expired! Please log in again.', 401),
      // MongoDB Errors
    CastError: (err) => new AppError(`Invalid ${err.path}: ${err.value}.`, 400),
    ValidationError: (err) => {
        const errors = Object.values(err.errors).map(el => el.message);
        return new AppError(`Invalid input data. ${errors.join('. ')}`, 400);
    },
    MongoError: (err) => {
        if (err.code === 11000) {
            const field = Object.keys(err.keyValue)[0];
            const value = err.keyValue[field];
            return new AppError(`${field} '${value}' already exists. Please use another value!`, 409);
        }
        return new AppError(`Database error: ${err.message}`, 500);
    },
    MongoServerError: (err) => new AppError(`Database error: ${err.message}`, 500)

}

export const errorHandler = (err,req,res,next) => {
    let error = err;

    // Log error for debugging
    console.log('error caught:',err.name, err.message);

    // handle known error type
    if(errorHandlers[err.name]){
        error = errorHandlers[err.name](err);
    }

    // handle express json parse errors
    else if(err.type === 'entity.parse.failed') {
        error = new AppError("Invalid JSON payload in request body", 400);
    }

    // handle unknown errors - convert to operational
    else if(!(err instanceof AppError)){
        error = new AppError(err.message || "Something went wrong!!", err.statusCode || 500);
    }
    sendErrorResponse(error, req,res)
}

const sendErrorResponse = (error, req, res) => {
    if(process.env.NODE_ENV === 'development'){
        res.status(error.statusCode).json({
            status: error.status,
            error: {
                name: error.name,
                message: error.message,
                stack: error.stack,
                ...error
            },
            message: error.message,
            stack: error.stack
        });
    }else {
        res.status(error.statusCode).json({
            status: error.status,
            message: error.isOperational ? error.message : "Something went wrong!"
        })
    }
}