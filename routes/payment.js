const express = require("express");
const mysql = require('mysql');
const router = express.Router();

const db = mysql.createConnection({
    host: '172.22.0.3',
    user: 'root',
    password: 'root',
    database: 'Saline',
  });
  
    /* router.get('/', (req, res) => {
        // Faire le axios pour l'appel des concours je vais écrire un JSON générique pour passer les tests à changer à l'avenir 😊
        res.status(200).send({
        1:{
            test:"ok"
        }
        });
    });*/

module.exports = router;