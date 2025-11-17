export class AppError extends Error {
    constructor(message, statusCode) {
        super(message);

        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;
        this.timestamp = new Date().toISOString();

        // Capture stack trace (excluding constructor call)
        Error.captureStackTrace(this, this.constructor);
    }

    // ✅ Common error factory methods for consistency
    static badRequest(message = 'Bad Request') {
        return new AppError(message, 400);
    }

    static unauthorized(message = 'Unauthorized') {
        return new AppError(message, 401);
    }

    static forbidden(message = 'Forbidden') {
        return new AppError(message, 403);
    }

    static notFound(message = 'Resource not found') {
        return new AppError(message, 404);
    }

    static conflict(message = 'Conflict') {
        return new AppError(message, 409);
    }

    static validationError(message = 'Validation failed') {
        return new AppError(message, 422);
    }

    static tooManyRequests(message = 'Too many requests') {
        return new AppError(message, 429);
    }

    static internalServer(message = 'Internal Server Error') {
        return new AppError(message, 500);
    }

    static serviceUnavailable(message = 'Service Unavailable') {
        return new AppError(message, 503);
    }

    // ✅ Specific domain error methods
    static duplicateField(field, value) {
        return new AppError(`${field} '${value}' already exists`, 409);
    }

    static invalidToken(message = 'Invalid token') {
        return new AppError(message, 401);
    }

    static expiredToken(message = 'Token expired') {
        return new AppError(message, 401);
    }

    static invalidCredentials(message = 'Invalid email or password') {
        return new AppError(message, 401);
    }
    
    static requiredField(fieldName) {
        let message = `${!fieldName ? 'All the': fieldName} is required`
        return new AppError(message, 422)
    }

    static accessDenied(message = 'Access denied') {
        return new AppError(message, 403);
    }

    static resourceNotFound(resource = 'Resource') {
        return new AppError(`${resource} not found`, 404);
    }

    // ✅ Method to wrap and convert non-operational errors
    static wrap(error, message = 'An error occurred', statusCode = 500) {
        if (error instanceof AppError) {
            return error;
        }
        
        const appError = new AppError(message, statusCode);
        appError.originalError = error;
        return appError;
    }

    // ✅ Method to add additional context to errors
    withContext(context) {
        this.context = context;
        return this;
    }

    // ✅ Method to add error code for client handling
    withCode(code) {
        this.errorCode = code;
        return this;
    }

    // ✅ Convert to JSON for response (optional)
    toJSON() {
        return {
            status: this.status,
            statusCode: this.statusCode,
            message: this.message,
            timestamp: this.timestamp,
            ...(this.errorCode && { errorCode: this.errorCode }),
            ...(this.context && { context: this.context })
        };
    }
}

// ✅ Optional: Default export for convenience
export default AppError;