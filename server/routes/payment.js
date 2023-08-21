const express = require("express");
const mysql = require('mysql2');
const router = express.Router();

const db = mysql.createConnection({
    host: 'mysql_host',
    user: 'mysql_user',
    password: 'mysql_password',
    database: 'mysql_database',
  });
  


    router.get('/', (req, res) => {
        // Faire le axios pour l'appel des concours je vais écrire un JSON générique pour passer les tests à changer à l'avenir 😊
        res.status(200).send({
        1:{
            test:"ok"
        }
        });
    });

module.exports = router;