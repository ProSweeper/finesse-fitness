const Workout = require('../../models/workout');
const Exercise = require('../../models/exercise');

module.exports = {
  create,
  index,
  addExercise,
  deleteWorkout,
}

async function addExercise(req, res) {
  const exercise = await Exercise.findOne({name: req.body.name});
  const workout = await Workout.findOne({user: req.user._id, name: req.body.workout});
  workout.workoutExercises.push(exercise);
  workout.save();
  res.json(workout);
}

async function index(req, res) {
  const workouts = await Workout.find({user: req.user}).populate({path: 'workoutExercises', populate: {path: 'exercise', model: 'Exercise'}}).exec();
  res.json(workouts);
}

async function create(req, res) {
  try {
    const workout = await Workout.create(req.body);
    res.json(workout);
    // console.log('controller:', req.body)
  } catch (err) {
    res.status(400).json('Error');
  }
}

async function deleteWorkout (req, res) {
  await Workout.findByIdAndDelete({user: req.user, _id: req.body.workout._id});
  const workouts = await Workout.find({user: req.user});
  res.json(workouts);
}