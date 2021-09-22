const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router');

app.use(cors());
app.use(express.json());
app.use(router);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`!!!!!! SERVER RUNNING on port ${PORT} !!!!!`)
});