const {
  express,
  mysql,
  router,
  bodyParser,
  moment,
  errorLog,
  db,
  urlencodedParser,
  date
} = require('../controllers/express-utils.js');

router.get('/', (req, res) => {
  db.query('SELECT * FROM news', (err, result) => {
    if (err) {
      errorLog(err,date);
      res.status(500).send('Error trying to get all contests');
    }
    res.status(200).send(result);
  });
});



module.exports = router;
