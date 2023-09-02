//Initiate database with datas
const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const moment = require('moment');
const data = require('../data.json');
const errorLog = require('../controllers/errorLog.js');

//Create connection to database
const db = mysql.createConnection({
    host: 'Database',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'Saline',
  });

//Utilities
const date = moment().format('yyyy-mm-dd:hh:mm:ss');


//Routes

router.post('/', async (req, res) => {
  try {
    console.log(data);
    const lessons = data.lessons;
    const user = data.users;
    const post = data.posts;
    const comment = data.comments;
    const invoice = data.invoice;

    // Fonction pour insérer les données dans la base de données
    const insertData = async (query, values) => {
      return new Promise((resolve, reject) => {
        db.query(query, values, (err, result) => {
          if (err) {
            console.log(err);
            errorLog(err, date);
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    };

    // Insérer les données dans la base de données
    await insertData('INSERT INTO users (id, mail, username, password, role, created_at, is_premium, is_admin) VALUES (?,?,?,?,?,?,?,?)', [user.id, user.mail, user.username, user.password, user.role, user.created_at, user.is_premium, user.is_admin]);
    await insertData('INSERT INTO lessons (id, stu_id, prof_id, progress, video_link, title, body, created_at) VALUES (?,?,?,?,?,?,?,?)', [lessons.id, lessons.stu_id, lessons.prof_id, lessons.progress, lessons.video_link, lessons.title, lessons.body, lessons.created_at]);
    await insertData('INSERT INTO posts (id, title, body, author, created_at) VALUES (?,?,?,?,?)', [post.id, post.title, post.body, post.author, post.created_at]);
    await insertData('INSERT INTO comments (id, blog_id, user_id, body, date) VALUES (?,?,?,?,?)', [comment.id, comment.blog_id, comment.user_id, comment.body, comment.date]);
    await insertData('INSERT INTO invoice (id, user_id, amount, status, date) VALUES (?,?,?,?,?)', [invoice.id, invoice.user_id, invoice.amount, invoice.status, invoice.date]);

    res.status(201).send('All data created successfully');
  } catch (error) {
    res.status(500).send('An error occurred while creating data');
  }
});

module.exports = router;