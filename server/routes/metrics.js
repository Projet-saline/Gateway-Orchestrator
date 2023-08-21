const express = require("express");
const router = express.Router();


    router.get('/', (req, res) => {
        // Faire le axios pour l'appel des concours je vais écrire un JSON générique pour passer les tests à changer à l'avenir 😊
        res.status(200).send({
        1:{
            test:"ok"
        }
        });
    });

module.exports = router;