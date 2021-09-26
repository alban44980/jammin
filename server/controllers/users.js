const Jam = require('../Models/jams');
const User = require('../models/users');
// const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
  try {
    console.log('login route has been hit bruv');
    const { email, password } = req.body;
    let result = await User.findOne({ email: email });
    console.log(result);
    res.status(200);
    res.json(result);
  } catch (error) {
    res.status(500);
  }
};

exports.register = async (req, res) => {
  try {
    console.log('register route has been hit bruv');
    const newUser = await User.create(req.body);
    console.log(newUser);
    res.status(201);
    res.json(newUser);
  } catch (error) {
    res.status(500);
  }
};
