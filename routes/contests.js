const express = require("express");
const mysql = require('mysql2');
const router = express.Router();

const db = mysql.createConnection({
  host: '172.22.0.3',
  user: 'root',
  password: 'root',
  database: 'Saline',
});



    router.get('/', (req, res) => {
    // Faire le axios pour l'appel des concours je vais écrire un JSON générique pour passer les tests à changer à l'avenir 😊
    res.status(200).send({
      1:{
        name:"Concours numéro 1",
        lieu:"Terre",
        date:"01-01-1900",
        inscription:"fermée/ouverte",
        link:"http://www.google.com/"
      },
      2:{
        name:"Concours numéro 2",
        lieu:"Terre",
        date:"01-01-1800",
        inscription:"fermée/ouverte",
        link:"http://www.google.com/"
      }
    })
  });

  /////////// exemple de mode avec sql : 
  
  /* 
  app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (error, results) => {
      if (error) {
        return res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs.' });
      }
      res.json({ users: results });
    });
  });
  */

module.exports = router;
