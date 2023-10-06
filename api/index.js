const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); //middleware

const whitelist = ['http://localhost:3000', 'https://myapp.com'];
const options = {
  origin: ( origin, callback ) => {
    if ( whitelist.includes( origin ) || !origin ) {
      callback(null, true)
    } else {
      callback(new Error('No permitido'));
    }
  }
}
app.use(cors(options));

app.get("/api", function (req, res) {
  res.send('Hola mi server en express');
});

app.get("/api/nueva-ruta", function (req, res) {
  res.send('Hola, nueva ruta');
});


routerApi(app);

// Middlewares deben ser declarados despues del routing

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);



app.listen(port, () => {
  console.log("Escuchando en el port: " + port);
});
