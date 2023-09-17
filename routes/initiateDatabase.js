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
//Routes

router.post('/', async (req, res) => {
  try {
    const lessons = data.lessons;
    const user = data.users;
    const post = data.posts;
    const comment = data.comments;
    const invoice = data.invoice;

    // Fonction pour insérer les données dans la base de données
    const insertData = async (query, values) => {
      return new Promise((resolve, reject) => {
        db.query(query, values, (err, result) => {
          if (err) {
            console.log(err);
            errorLog(err, date);
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    };

    await insertData('CREATE TABLE users (id INT NOT NULL AUTO_INCREMENT, mail VARCHAR(255) NOT NULL, username VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, role VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, is_premium BOOLEAN NOT NULL, is_admin BOOLEAN NOT NULL, PRIMARY KEY (id))', []);
    await insertData('INSERT INTO users (id, mail, username, password, role, created_at, is_premium, is_admin) VALUES (?,?,?,?,?,?,?,?)', [user.id, user.mail, user.username, user.password, user.role, user.created_at, user.is_premium, user.is_admin]);

    await insertData('CREATE TABLE lessons (id INT NOT NULL AUTO_INCREMENT, stu_id INT NOT NULL, prof_id INT NOT NULL, progress INT NOT NULL, video_link VARCHAR(255) NOT NULL, title VARCHAR(255) NOT NULL, body TEXT NOT NULL, created_at DATETIME NOT NULL, PRIMARY KEY (id))', []);
    await insertData('INSERT INTO lessons (id, stu_id, prof_id, progress, video_link, title, body, created_at) VALUES (?,?,?,?,?,?,?,?)', [lessons.id, lessons.stu_id, lessons.prof_id, lessons.progress, lessons.video_link, lessons.title, lessons.body, lessons.created_at]);

    await insertData('CREATE TABLE blog (id INT NOT NULL AUTO_INCREMENT, title VARCHAR(255) NOT NULL, body TEXT NOT NULL, user_id VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, PRIMARY KEY (id))', []);
    await insertData('INSERT INTO blog (id, title, body, user_id, created_at) VALUES (?,?,?,?,?)', [post.id, post.title, post.body, post.author, post.created_at]);

    await insertData('CREATE TABLE comments (id INT NOT NULL AUTO_INCREMENT, blog_id INT NOT NULL, user_id INT NOT NULL, body TEXT NOT NULL, date DATETIME NOT NULL, PRIMARY KEY (id))', []);
    await insertData('INSERT INTO comments (id, blog_id, user_id, body, date) VALUES (?,?,?,?,?)', [comment.id, comment.blog_id, comment.user_id, comment.body, comment.date]);

    await insertData('CREATE TABLE invoice (id INT NOT NULL AUTO_INCREMENT, user_id INT NOT NULL, amount INT NOT NULL, status VARCHAR(255) NOT NULL, date DATETIME NOT NULL, PRIMARY KEY (id))', []);
    await insertData('INSERT INTO invoice (id, user_id, amount, status, date) VALUES (?,?,?,?,?)', [invoice.id, invoice.user_id, invoice.amount, invoice.status, invoice.date]);
    //create the table news
    await insertData('CREATE TABLE news (id INT NOT NULL AUTO_INCREMENT, title VARCHAR(255) NOT NULL, body TEXT NOT NULL, date DATETIME NOT NULL, PRIMARY KEY (id), author VARCHAR(255) NOT NULL)', []);
    await insertData('INSERT INTO news(id, title, body, date, author) VALUES (?,?,?,?)', [news.id, news.title, news.body, news.date, news.author]);

    res.status(201).send('All data created successfully');
  } catch (error) {
    res.status(500).send('An error occurred while creating data');
  }
});

module.exports = router;