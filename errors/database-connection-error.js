export class DatabaseConnectionError extends Error {
    reason = 'Erreur de connexion à la base de données';

    constructor() {
        super();

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
}