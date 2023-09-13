// const {
//     express,
//     mysql,
//     router,
//     bodyParser,
//     moment,
//     errorLog,
//     db,
//     urlencodedParser,
//     date
//   } = require('../controllers/express-utils.js');
//
//   // Route pour récupérer les utilisateurs par id
//
// router.get('/:id', (req, res) => {
//     db.query('SELECT * FROM users WHERE id = ?', [req.params.id], (err, rows, fields) => {
//         if (!err)
//             res.send(rows);
//         else
//             console.log(err);
//     })
// });
//
// // Route pour récupérer tous les utilisateurs
// router.get('/', (req, res) => {
//     db.query('SELECT * FROM users', (err, rows, fields) => {
//         if (!err)
//             res.send(rows);
//         else
//             console.log(err);
//     })
// });
//
//
// // Route pour créer un utilisateur
//
// router.post('/',urlencodedParser, (req, res) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const password = req.body.password;
//     const date = req.body.date;
//     db.query('INSERT INTO users (name, email, password, date) VALUES (?,?,?,?)', [name, email, password, date], (err, result) => {
//         if (err) {
//             errorLog(err,date);
//             res.status(500).send('Error trying to create user');
//         }
//         res.status(201).send(result);
//     });
// });
//
// // Route pour modifier un utilisateur
// // Route pour créer un utilisateur (signup)
// // Route pour supprimer un utilisateur (delete)
// // Route pour se connecter (signin)
// // Route pour se déconnecter (signout)
// // Route pour récupérer le profil de l'utilisateur connecté (currentuser)