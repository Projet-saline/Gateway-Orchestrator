//Libraries
const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const bodyParser = require('body-parser');
const moment = require('moment');
const errorLog = require('../controllers/errorLog.js');

//Connection to database
const db = mysql.createConnection({
    host: 'localhost',
    port: '8080',
    user: 'root',
    password: 'root',
    database: 'Saline',
  });

//Utilities
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const date = moment().format('yyyy-mm-dd:hh:mm:ss');



//Routes

    router.get('/', (req, res) => {
        db.query('SELECT * FROM blog', (err, result) => {
            if (err) {
                errorLog(err,date);
                res.status(500).send('Error trying to get all blog');
            }
            res.status(200).send(result);
        });
    });

    router.get('/:id', (req, res) => {
        const id = req.params.id;
        db.query('SELECT * FROM blog WHERE id = ?', [id], (err, result) => {
            if (err) {
                errorLog(err,date);
                res.status(500).send('Error trying to get blog');
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
                errorLog(err,date);
                res.status(500).send('Error trying to create blog');
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
                errorLog(err,date);
                res.status(500).send('Error trying to update blog');
            }
            res.status(202).send(result);
        });
    });

    router.delete('/:id', (req, res) => {
        const id = req.params.id;
        db.query('DELETE FROM blog WHERE id = ?', [id], (err, result) => {
            if (err) {
                errorLog(err,date);
                res.status(500).send('Error trying to delete blog');
            }
            res.status(203).send(result);
        });
    });

    router.get('/user/:id', (req, res) => {
        const id = req.params.id;
        db.query('SELECT * FROM blog WHERE id_user = ?', [id], (err, result) => {
            if (err) {
                errorLog(err,date);
                res.status(500).send('Error trying to get blog');
            }
            res.status(200).send(result);
        });
    });



module.exports = router;