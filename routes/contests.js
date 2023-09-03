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


module.exports = router;
