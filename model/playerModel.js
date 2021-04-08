const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  club: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  debut: {
    type: Date,
  },
});

const playerModel = mongoose.model('player', playerSchema);

module.exports = playerModel;
