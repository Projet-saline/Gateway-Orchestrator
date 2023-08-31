const express = require("express");
const mysql = require('mysql');
const router = express.Router();
const bodyParser = require('body-parser');

const db = mysql.createConnection({
    host: '172.22.0.3',
    user: 'root',
    password: 'root',
    database: 'Saline',
  });
  
const urlencodedParser = bodyParser.urlencoded({ extended: false })

    router.get('/', (req, res) => {
        // Faire le axios pour l'appel des blog je vais écrire un JSON générique pour passer les tests à changer à l'avenir 😊
        db.query('SELECT * FROM blog', (err, result) => {
            if (err) {
                console.log(err);
            }
            res.status(200).send(result);
        });
    });

    router.get('/:id', (req, res) => {
        const id = req.params.id;
        db.query('SELECT * FROM blog WHERE id = ?', [id], (err, result) => {
            if (err) {
                console.log(err);
            }
            res.status(200).send(result);
        });
    });

    router.post('/',urlencodedParser, (req, res) => {
        const name = req.body.name;
        const description = req.body.description;
        const date = req.body.date;
        const image = req.body.image;
        const id_user = req.body.id_user;
        db.query('INSERT INTO blog (name, description, date, image, id_user) VALUES (?,?,?,?,?)', [name, description, date, image, id_user], (err, result) => {
            if (err) {
                console.log(err);
            }
            res.status(201).send(result);
        });
    });

    router.put('/:id', (req, res) => {
        const id = req.params.id;
        const name = req.body.name;
        const description = req.body.description;
        const date = req.body.date;
        const image = req.body.image;
        const id_user = req.body.id_user;
        db.query('UPDATE blog SET name = ?, description = ?, date = ?, image = ?, id_user = ? WHERE id = ?', [name, description, date, image, id_user, id], (err, result) => {
            if (err) {
                console.log(err);
            }
            res.status(202).send(result);
        });
    });

    router.delete('/:id', (req, res) => {
        const id = req.params.id;
        db.query('DELETE FROM blog WHERE id = ?', [id], (err, result) => {
            if (err) {
                console.log(err);
            }
            res.status(203).send(result);
        });
    });

    router.get('/user/:id', (req, res) => {
        const id = req.params.id;
        db.query('SELECT * FROM blog WHERE id_user = ?', [id], (err, result) => {
            if (err) {
                console.log(err);
            }
            res.status(200).send(result);
        });
    });






module.exports = router;