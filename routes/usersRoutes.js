// routes/usersRoutes.js
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// POST /register: for user registration.
router.post('/register', usersController.registerUser);

// POST /login: for user login.
router.post('/login', usersController.loginUser);

// GET /profile: to get user profile.
router.get('/profile', usersController.getUserProfile);

// PUT /:id : to update a user
router.put('/:id',usersController.updateUser)

// DELETE /:id : to delete a user
router.delete('/:id',usersController.deleteUser)



module.exports = router;
