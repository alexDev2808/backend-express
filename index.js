const express = require('express');
const routerApi = require('./routes');


const app = express();
const port = 3000;


app.get("/", function (req, res) {
  res.send('Hola mi server en express');
});

app.get("/nueva-ruta", function (req, res) {
  res.send('Hola, nueva ruta');
});


routerApi(app);





app.listen(port, () => {
  console.log("Escuchando en el port: " + port);
});
