export class DatabaseConnectionError extends Error {
    statusCode = 500;

    reason = 'Erreur de connexion à la base de données';

    constructor() {
        super();

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serializeErrors() {
        return [{ message: this.reason }];
    }
}