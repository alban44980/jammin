const express = require('express');
const router = express.Router();

const jams = require('./controllers/jams');
const users = require('./controllers/users');

//jams routes
router.post('/searchjam', jams.getJams);

router.post('/jams', jams.postJam);

router.post('/jams/:id', jams.postMsg);

router.get('/jams/:id', jams.getEvent);

//users routes

router.post('/users', users.createUser);
router.get('/users/:id', users.getUserInfo);

module.exports = router;
