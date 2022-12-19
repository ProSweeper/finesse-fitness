const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../../controllers/api/workouts')

// all routes starts with /api/workouts

//POST /api/workouts/create (create a workout)
router.post('/create', workoutsCtrl.create);

module.exports = router;
