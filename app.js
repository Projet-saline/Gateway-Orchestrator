'use strict';

const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');


const port = 3000;
app.use(cors());

const contest = '/contest';
const news = '/news';
const pay = '/pay';
const blog = '/blog';
const messenger = '/messenger';
const metrics = '/metrics';
const initiateDatabase = '/initiate';

const contestsRoute = require('./routes/contests');
const newsRoute = require('./routes/news');
const payRoute = require('./routes/payment');
const blogRoute = require('./routes/blog');
const messengerRoute = require('./routes/messenger');
const metricsRoute = require('./routes/metrics');
const initiateDatabaseRoute = require('./routes/initiateDatabase');

app.use(express.json());


app.use(contest,contestsRoute);
app.use(news,newsRoute);
app.use(pay,payRoute);
app.use(blog,blogRoute);
app.use(messenger,messengerRoute);
app.use(metrics,metricsRoute);
app.use(initiateDatabase,initiateDatabaseRoute);


app.listen(port, () => {
  console.log(`Server listen on port : ${port}`);
});