'use strict';

const express = require('express');

const port = 3000;
const app = express();



const contestsRoute = require('./routes/contests');
const payRoute = require('./routes/payment');
const blogRoute = require('./routes/blog');
const messengerRoute = require('./routes/messenger');
const metricsRoute = require('./routes/metrics');


app.use(express.json());

app.use('/contest',contestsRoute);
app.use('/pay',payRoute);
app.use('/blog',blogRoute);
app.use('/messenger',messengerRoute);
app.use('/metrics',metricsRoute);

app.listen(port, () => {
  console.log(`Server listen on port : ${port}`);
});