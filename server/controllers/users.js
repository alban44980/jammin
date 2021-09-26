const Jam = require('../Models/jams');
const User = require('../models/users');

exports.getUserInfo = async (req, res) => {
  try {
    console.log('getUserInfo route has been hit bruv');
    const { id } = req.params;
    let result = await User.find({ _id: id });
    console.log(result);
    res.status(200);
    res.json(result);
  } catch (error) {
    res.status(500);
  }
};

exports.createUser = async (req, res) => {
  try {
    console.log('Create User route has been hit bruv');
    const newUser = await User.create(req.body);
    console.log(newUser);
    res.status(201);
    res.json(newUser);
  } catch (error) {
    res.status(500);
  }
};
