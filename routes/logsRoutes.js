// routes/logsRoutes.js
const express = require('express');
const logsController = require('../controllers/logsController');

const router = express.Router();

// GET /logs - Get all logs
router.get('/', logsController.getAllLogs);

// GET /logs/:id - Get a log by ID
router.get('/:id', logsController.getLogById);

// DELETE /logs/:id - Delete a log
router.delete('/:id', logsController.deleteLog);



module.exports = router;

