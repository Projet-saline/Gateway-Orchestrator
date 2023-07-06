const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
   res.send('Bonjour depuis Express.js!');
});

app.listen(PORT, () => {
   console.log(`Serveur à l'écoute sur le port ${PORT}`);
});
