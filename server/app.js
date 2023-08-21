'use strict';

const express = require('express');
const port = 3000;
const app = express();

const contestsRoute = require('./routes/contests');


app.use(express.json());

app.use('/contest',contestsRoute);

app.listen(port, () => {
  console.log(`Server listen on port : ${port}`);
});