const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get("/", function (req, res) {
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

router.get('/filter', function(req, res) {
  res.send('Soy un filter');
});

router.get('/:id', function(req, res) {
  const { id } = req.params;
  res.json({
    id,
    name: 'Producto aleatorio',
    price: 1000,
  })
});

router.post('/', function(req, res) {
  const body = req.body;
  res.json({
    message: "created",
    data: body
  })
});


module.exports = router;
