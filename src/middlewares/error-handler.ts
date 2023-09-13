import {Request, Response, NextFunction} from 'express';
import { RequestValidationError} from "../errors/request-validation-error";
import { DatabaseConnectionError } from '../errors/database-connection-error';

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next : NextFunction
) => {
    if (err instanceof RequestValidationError) {
        console.log('Erreur de validation de la requête');
    }

    if (err instanceof DatabaseConnectionError) {
        console.log('Erreur de connexion à la base de données');
    }

    res.status(400).send({
        message: err.message
    });
}