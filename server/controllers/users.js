const User = require('../models/users');

exports.getUserInfo = async (req, res) => {
  try {
    console.log('getUserInfo route has been hit bruv');
  } catch (error) {
    res.status(500);
  }
};

exports.createUser = async (req, res) => {
  try {
    console.log('Create User route has been hit bruv');
  } catch (error) {
    res.status(500);
  }
};
