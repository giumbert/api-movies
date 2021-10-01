const express = require('express');
const app = express();

require('./routes/routes')(app);
require('./startup/db')();

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  // winston
  //   .add(new winston.transports.Console())
  //   .log({
  //     level: 'info',
  //     message: `Listening on port ${port}...!`
  //   });
  console.log(`Listening on port: ${port}`);
});

module.exports = server;