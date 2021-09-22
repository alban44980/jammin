const mongoose = require('./');

const Schema = mongoose.Schema;

const jamSchema = new Schema({
  date: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  coordinates: {
    type: Array,
    required: true
  },
  host: {
    type: String,
    required: true
  },
  numOfParticipants: {
    type: Number
  },
  languages: {
    type: Array,
    required: true
  },
  pastEvent: {
    type: Boolean
  },
  comingEvent: {
    type: Boolean
  }
});

const Jam = mongoose.model('Jam', jamSchema);

module.exports = Jam;