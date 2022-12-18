const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  bodyPart: { type: String, required: true },
  equipment: { type: String, required: true },
  gifUrl: { type: String, required: true },
  id: { type: String, required: true },
  name: { type: String, required: true },
  target: { type: String, required: true },
}, {
  timestamps: true
})

module.exports = exerciseSchema;