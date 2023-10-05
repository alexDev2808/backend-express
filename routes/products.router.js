const express = require('express');

const ProductsService = require('../services/product.service');

const router = express.Router();
const service = new ProductsService();

router.get("/", async function (req, res) {

  const products = await service.find();

  res.json(products);

});

router.get('/filter', function(req, res) {
  res.send('Soy un filter');
});

router.get('/:id', async function(req, res, next) {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.post('/', async function(req, res) {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', async function(req, res) {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
  
    res.json(product);
  } catch (error) {
    next(err);
  }

});


router.delete('/:id', async function(req, res) {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

module.exports = router;

