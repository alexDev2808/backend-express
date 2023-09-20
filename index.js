const express = require('express');
const app = express();
const port = 3000;


app.get("/", function (req, res) {
  res.send('Hola mi server en express');
});

app.get("/nueva-ruta", function (req, res) {
  res.send('Hola, nueva ruta');
});

app.get("/products", function (req, res) {
  res.json([
    {
      name: 'Producto 1',
      price: 1000,
    },
    {
      name: 'Producto 2',
      price: 1400,
    }
  ])
});

app.get('/products/:id', function(req, res) {
  const { id } = req.params;
  res.json({
    id,
    name: 'Producto aleatorio',
    price: 1000,
  })
});

app.get('/categories/:categoryId/products/:productId', function(req, res) {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  })
});





app.listen(port, () => {
  console.log("Escuchando en el port: " + port);
});
