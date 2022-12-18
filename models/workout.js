const exerciseSchema = require('./exercise');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutExerciseSchema = new Schema({
  exercise: exerciseSchema,
  reps: {type: Number, default: 0},
  sets: {type: Number, default: 0},
  weight: {type: Number, default: 0},
},{
  timestamps: true,
  toJSON: {virtuals: true},
});


const workoutSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  workoutExercises: [workoutExerciseSchema],
  name: {type: String, required: true, }
}, {
  timestamps: true,
});