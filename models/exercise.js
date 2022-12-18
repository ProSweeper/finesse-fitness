const exerciseSchema = require('./exerciseSchema');

const mongoose = require('mongoose');

module.exports = mongoose.model('Exercise', exerciseSchema);