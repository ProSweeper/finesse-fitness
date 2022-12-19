const Workout = require('../../models/workout');

module.exports = {
  create,
}

async function create(req, res) {
  try {
    Workout.create(req.body);
  } catch (err) {
    res.status(400).json('Error');
  }
}