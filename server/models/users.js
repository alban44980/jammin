const mongoose = require('./');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pastEvents: {
    type: Array,
  },
  comingEvents: {
    type: Array,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
