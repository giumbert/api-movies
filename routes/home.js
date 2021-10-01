const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello movies API!');
})

module.exports = router;