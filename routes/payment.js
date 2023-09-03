const express = require('express');
const mysql = require('mysql');
const router = express.Router();
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });
  
    /* router.get('/', (req, res) => {
        // Faire le axios pour l'appel des concours je vais écrire un JSON générique pour passer les tests à changer à l'avenir 😊
        res.status(200).send({
        1:{
            test:'ok'
        }
        });
    });*/

module.exports = router;