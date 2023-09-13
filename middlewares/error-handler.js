const { Request, Response, NextFunction } = require('express');
const { RequestValidationError } = require('../errors/request-validation-error');
const { DatabaseConnectionError } = require('../errors/database-connection-error');

const errorHandler = (err, req, res, next) => {
    if (err instanceof RequestValidationError) {
        console.log('Erreur de validation de la requête');
    }

    if (err instanceof DatabaseConnectionError) {
        console.log('Erreur de connexion à la base de données');
    }

    res.status(400).send({
        message: err.message
    });
};

module.exports = { errorHandler };