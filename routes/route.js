const express = require('express');
const renee = express.Router();

renee.route('/api', (req,res) => {
  res.json({
    msg: "Hello There. This is the API"
  })
})
module.exports = renee;