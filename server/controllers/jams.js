const Jam = require('../Models/jams');

exports.getJams = async (req, res) => {
  console.log('ROUTER TO GET JAMS HAS BEEN HIT YIIII');
  try {
    console.log(req.body);
    const city = req.body.city;
    console.log(city);
    const result = await Jam.find({ city });
    let sortedResult = result.sort(function (a, b) {
      return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
    });
    console.log(sortedResult);
    res.json(sortedResult);
  } catch (e) {
    res.status(500);
  }
};

exports.postJam = async (req, res) => {
  try {
    const result = await Jam.create(req.body);
    res.status(201);
    console.log(result);
    res.json(result);
  } catch (e) {
    res.status(500);
  }
};

exports.postMsg = async (req, res) => {
  try {
    const newMsg = req.body;
    const { id } = req.params;
    let result = await Jam.findOneAndUpdate(
      { _id: id },
      { $push: { messages: newMsg } }
    );
    result = await Jam.find({ _id: id });
    console.log(result);
    res.json(result[0].messages);
    res.status(201);
  } catch (e) {
    res.status(500);
  }
};

exports.getEvent = async (req, res) => {
  try {
    console.log('get event route');
    const { id } = req.params;
    const result = await Jam.find({ _id: id });
    console.log(result);
    res.json(result);
    res.status(200);
  } catch (error) {
    res.status(500);
  }
};
