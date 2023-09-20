const express = require('express');

const ProductsService = require('../services/product.service');

const router = express.Router();
const service = new ProductsService();

router.get("/", function (req, res) {

  const products = service.find();

  res.json(products);

});

router.get('/filter', function(req, res) {
  res.send('Soy un filter');
});

router.get('/:id', function(req, res) {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
});

router.post('/', function(req, res) {
  const body = req.body;
  res.status(201).json({
    message: "created",
    data: body
  })
});

router.patch('/:id', function(req, res) {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'updated',
    data: body,
    id
  })
});


router.delete('/:id', function(req, res) {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id
  })
});

module.exports = router;
