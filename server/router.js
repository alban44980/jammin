const express = require ('express');
const router = express.Router();


const jams = require('./controllers/jams');

router.get('/jams', jams.getJams)

router.post('/jams', jams.postJam);

module.exports = router