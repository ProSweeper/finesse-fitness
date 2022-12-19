const express = require('express');
const router = express.Router();
const exerciseCtrl = require('../../controllers/api/exercises');

// all routes start with /api/exercises

// GET /api/exercises
router.get('/', exerciseCtrl.index);

module.exports = router;