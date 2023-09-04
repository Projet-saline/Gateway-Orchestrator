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


    /* router.get('/', (req, res) => {
        // Faire le axios pour l'appel des concours je vais écrire un JSON générique pour passer les tests à changer à l'avenir 😊
        res.status(200).send({
        1:{
            test:'ok'
        }
        });
    });*/

module.exports = router;