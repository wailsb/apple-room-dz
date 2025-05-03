const express = require('express');
const productsController = require('../controllers/productsController');

const router = express.Router();

// GET all products
router.get('/', productsController.getAllProducts);

// GET a product by ID
router.get('/:id', productsController.getProductById);

// POST create a new product
router.post('/', productsController.createProduct);

// PUT update a product
router.put('/:id', productsController.updateProduct);

// DELETE a product
router.delete('/:id', productsController.deleteProduct);

module.exports = router;
