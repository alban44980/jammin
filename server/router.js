const express = require('express');
const router = express.Router();

const jams = require('./controllers/jams');
const users = require('./controllers/users');

//jams routes

router.post('/searchjam', jams.getJams);

router.post('/jams', jams.postJam);

router.post('/jams/:id', jams.postMsg);

router.get('/jams/:id', jams.getEvent);

router.post('/addparticipant', jams.addParticipant);

router.post('/removeparticipant', jams.removeParticipant);

//users routes

router.post('/register', users.register);

router.post('/login', users.login);

router.post('/addjam', users.addjam);

router.post('/removejam', users.removejam);

module.exports = router;
