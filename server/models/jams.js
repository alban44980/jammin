const mongoose = require('./');

const Schema = mongoose.Schema;

const jamSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  cityCords:{
    type: Object
  },
  location: {
    type: String,
    required: true
  },
  locCords: {
    type: Object,
  },
  host: {
    type: String,
  },
  numOfParticipants: {
    type: Number
  },
  languages: {
    type: String,
  },
  pastEvent: {
    type: Boolean
  },
  comingEvent: {
    type: Boolean
  },
  messages: {
    type: Array
  }
});

const Jam = mongoose.model('Jam', jamSchema);

module.exports = Jam;