const express = require('express');
const { faker } = require('@faker-js/faker');


const app = express();
const port = 3000;


app.get("/", function (req, res) {
  res.send('Hola mi server en express');
});

app.get("/nueva-ruta", function (req, res) {
  res.send('Hola, nueva ruta');
});

app.get("/products", function (req, res) {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
    });
  }

  res.json(products);

});

app.get('/products/filter', function(req, res) {
  res.send('Soy un filter');
});

app.get('/products/:id', function(req, res) {
  const { id } = req.params;
  res.json({
    id,
    name: 'Producto aleatorio',
    price: 1000,
  })
});


app.get('/users', function(req, res) {
  const { limit, offset } = req.query;

  if ( limit && offset ) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send("No hay parametros");
  }
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
