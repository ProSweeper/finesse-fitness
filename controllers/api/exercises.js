const Exercise = require('../../models/exercise');

module.exports = {
  index
}

async function index(req, res) {
  const exercises = await Exercise.find({}).sort({'name' : 'ascending'});
  res.json(exercises);
}