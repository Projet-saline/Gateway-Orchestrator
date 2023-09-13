'use strict';

const express = require('express');
const axios = require('axios');


const port = 3000;
const _app = express();

const contest = '/contest';
const pay = '/pay';
const blog = '/blog';
const messenger = '/messenger';
const metrics = '/metrics';
const initiateDatabase = '/initiate';

const signup = '/signup';
const signin = '/signin';
const signout = '/signout';
const currentuser = '/currentuser';
const errorHandler = '/error';

const contestsRoute = require('../src/routes/contests');
const payRoute = require('../src/routes/payment');
const blogRoute = require('../src/routes/blog');
const messengerRoute = require('../src/routes/messenger');
const metricsRoute = require('../src/routes/metrics');
const initiateDatabaseRoute = require('../src/routes/initiateDatabase');

const signupRoute = require('../src/routes/signup');
const signinRoute = require('../src/routes/signin');
const signoutRoute = require('../src/routes/signout');
const currentuserRoute = require('../src/routes/current-user');
const errorHandlerRoute = require('../src/middlewares/error-handler');

_app.use(express.json());

_app.use(contest,contestsRoute);
_app.use(pay,payRoute);
_app.use(blog,blogRoute);
_app.use(messenger,messengerRoute);
_app.use(metrics,metricsRoute);
_app.use(initiateDatabase,initiateDatabaseRoute);

_app.use(signup,signupRoute);
_app.use(signin,signinRoute);
_app.use(signout,signoutRoute);
_app.use(currentuser,currentuserRoute);
_app.use(errorHandler, errorHandlerRoute);

_app.listen(port, () => {
  console.log(`Server Gateway listen on port : ${port}`);
});