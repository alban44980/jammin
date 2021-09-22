const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/jammin', function () {console.log('😎😎 Database Connected 😎😎');}, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;