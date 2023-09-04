// Libraries
const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const bodyParser = require('body-parser');
const moment = require('moment');
const errorLog = require('../controllers/errorLog.js');
require('dotenv').config();

// Connection to database
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

// Utilities
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const date = moment().format('yyyy-mm-dd:hh:mm:ss');

// Export the constants and utilities
module.exports = {
    express,
    mysql,
    router,
    bodyParser,
    moment,
    errorLog,
    db,
    urlencodedParser,
    date
};
