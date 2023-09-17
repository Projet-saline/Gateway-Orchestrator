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


  //route by id

  router.get('/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM news WHERE id = ?', [id], (err, result) => {
        if (err) {
            errorLog(err,date);
            res.status(500).json({ error: 'Error trying to get news' });
        }
        // return data in a json
        res.status(200).send(result);
    });
});

//the last 10 articles
router.get("/last", (req, res) => {
    db.query("SELECT * FROM news ORDER BY id DESC LIMIT 10", (err, result) => {
        if (err) {
            errorLog(err,date);
            res.status(500).json({ error: "Error trying to get news" });
        }
        // return data in a json
        res.status(200).send(result);
    });
});






//route all news

router.get('/', (req, res) => {
    db.query('SELECT * FROM news', (err, result) => {
        if (err) {
            errorLog(err,date);
            res.status(500).send('Error trying to get all news');
        }
        res.status(200).send(result);
    });
});

module.exports = router;

