const Jam = require('../Models/jams');

exports.getJams = async (req, res) => {
  console.log('getJams function running')
  try {
    const result =  await Jam.find();
    res.status(200);
    console.log(result);
    res.json(result);
  } catch (e) {
    res.status(500)
  }
};


// exports.getEvents = async (req, res) => {
//   try {
//     const result = await Event.find();
//     // let sortedResult = result.sort((a, b) => b.date - a.date);
//     let sortedResult = result.sort(function(a, b) {
//     return (a.date < b.date) ? -1 : ((a.date > b.date) ? 1 : 0);
//     }); //code this code from stackOverflow https://stackoverflow.com/questions/12192491/sort-array-by-iso-8601-date
//     res.json(sortedResult);
//     res.status(200);
//     res.end();
//   } catch (e) {
//     res.status(500);
//   }
// };




exports.postJam = async (req, res) => {
  try {
    console.log(req.body)
    const result = await Jam.create(req.body);
    res.status(201);
    res.json(result);
  } catch(e) {
    res.status(500)
  }
};

