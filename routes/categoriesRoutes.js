const express = require('express');
const categoriesController = require('../controllers/categoriesController');

const router = express.Router();

// GET all categories
router.get('/', categoriesController.getAllCategories);

// GET a category by ID
router.get('/:id', categoriesController.getCategoryById);

// POST a new category
router.post('/', categoriesController.createCategory);

// PUT (update) a category
router.put('/:id', categoriesController.updateCategory);

// DELETE a category
router.delete('/:id', categoriesController.deleteCategory);

module.exports = router;
