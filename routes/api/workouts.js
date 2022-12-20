const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../../controllers/api/workouts')

// all routes starts with /api/workouts

//POST /api/workouts/create (create a workout)
router.post('/create', workoutsCtrl.create);

//GET /api/workouts
router.get('/', workoutsCtrl.index);

//POST /api/workout/add-exercise
router.put('/add-exercise', workoutsCtrl.addExercise);

module.exports = router;
