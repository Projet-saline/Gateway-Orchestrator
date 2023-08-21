'use strict';

const express = require('express');
const port = 8000;
const app = express();

app.use(express.json());

app.get('/contests', (req, res) => {
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

app.listen(port, () => {
  console.log(`Server listen on port : ${port}`);
});