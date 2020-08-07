const path =  require('path');
const express = require("express");
const router = express.Router();
const routeRoot = require('../util/path');
const adminData = require('./admin');


router.get('/',(req, res, next) => {

  console.log("Shop",adminData.products)
  res.sendFile(path.join(routeRoot,'views','shop.html'))
});

module.exports = router