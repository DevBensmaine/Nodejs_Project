const path =  require('path');
const express = require("express");
const router = express.Router();
const routeRoot = require('../util/path');


router.get('/',(req, res, next) => {

  // res.send("<h1>Hassan Bensmaine</h1>")
  res.sendFile(path.join(routeRoot,'views','shop.html'))
});

module.exports = router