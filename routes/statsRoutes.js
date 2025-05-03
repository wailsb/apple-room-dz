const express = require('express');
const statsController = require('../controllers/statsController');

const router = express.Router();

// GET all stats
router.get('/', statsController.getAllStats);

// POST create a stat
router.post('/', statsController.createStat);

// PUT update a stat
router.put('/:id', statsController.updateStat);

// DELETE delete a stat
router.delete('/:id', statsController.deleteStat);



module.exports = router;
