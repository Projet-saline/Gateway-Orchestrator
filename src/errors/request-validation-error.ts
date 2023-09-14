import { ValidationError } from 'express-validator';

interface CustomError {
    statusCode: number;
    serializeErrors(): {
        message: string;
        field?: string;
    }
}

export class RequestValidationError extends Error {
    statusCode = 400;

    constructor(public errors: ValidationError[]) {
        super();

        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serializeErrors() {
        return this.errors.map((err) => {
            if (err.type === 'field') {
                return { message: err.msg, field: err.path };
            }
            return { message: err.msg };
        });
    }
}