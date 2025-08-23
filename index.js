const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola Mundo desde DevOps CI/CD!');
});

module.exports = app; // exporta la app sin levantar el servidor
