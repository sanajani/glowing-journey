export class AppError extends Error{
    constructor(message,statusCode, status='', field=''){
        super(message);
        this.message = message;
        this.status = `${status}`.startsWith('4') ? 'fail' : 'error';
        this.statusCode = statusCode
        this.field = field;
        this.isOperational = true;
        
        
        Error.captureStackTrace(this, this.constructor); // Clean stack trace

    }

    static duplicateField(field, value){
        console.log(field, value)
        return new AppError(
            `${field} ${value} already exist`,
            409,
            field
        )
    }

}