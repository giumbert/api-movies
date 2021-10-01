const express = require('express');
const app = express();
const morgan = require('morgan');

require('dotenv').config({path: '.env'});

app.use(morgan('combined'));

require('./routes/routes')(app);
require('./startup/db')();
require('./startup/validation')();

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

module.exports = server;
