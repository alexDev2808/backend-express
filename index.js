const express = require('express');
const routerApi = require('./routes');

const { logErrors, errorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json()); //middleware

app.get("/", function (req, res) {
  res.send('Hola mi server en express');
});

app.get("/nueva-ruta", function (req, res) {
  res.send('Hola, nueva ruta');
});


routerApi(app);

// Middlewares deben ser declarados despues del routing

app.use(logErrors);
app.use(errorHandler);



app.listen(port, () => {
  console.log("Escuchando en el port: " + port);
});
