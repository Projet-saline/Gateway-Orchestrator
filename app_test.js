'use strict';

const express = require('express');
const axios = require("axios");


const port = 3000;
const app = express();

const contest = "/contest";
const pay = "/pay";
const blog = "/blog";
const messenger = "/messenger";
const metrics = "/metrics";

const contestsRoute = require('./routes/contests');
const payRoute = require('./routes/payment');
const blogRoute = require('./routes/blog');
const messengerRoute = require('./routes/messenger');
const metricsRoute = require('./routes/metrics');


const server = app.listen(port, () => {
  console.log(`Server listen on port : ${port}`);
});


app.use(express.json());

app.use(contest,contestsRoute);
app.use(pay,payRoute);
app.use(blog,blogRoute);
app.use(messenger,messengerRoute);
app.use(metrics,metricsRoute);

console.log("call on " + contest); 
axios.get("http://localhost:3000" + contest)
    .then(res =>console.log(res.data));

console.log(server);

server.close((err) => {
    console.log('server closed')
    process.exit(err ? 1 : 0)
  })
