// routes/ordersRoutes.js
const express = require('express');
const ordersController = require('../controllers/ordersController');

const router = express.Router();

// Create a new order
router.post('/', ordersController.createOrder);

// Get an order by ID
router.get('/:id', ordersController.getOrderById);

// Get all orders
router.get('/', ordersController.getAllOrders);

// update an order
router.put('/:id', ordersController.updateOrder);
router.delete('/:id', ordersController.deleteOrder);

module.exports = router;
