const express = require('express');
const router = express.Router();

const jams = require('./controllers/jams');

router.post('/searchjam', jams.getJams);

router.post('/jams', jams.postJam);

router.post('/jams/:id', jams.postMsg);

router.get('/jams/:id', jams.getEvent);

module.exports = router;
