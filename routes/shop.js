const path =  require('path');
const express = require("express");
const router = express.Router();
const routeRoot = require('../util/path');
const adminData = require('./admin');


router.get('/',(req, res, next) => {
  const products =  adminData.products
  const pageTitle = "Page not found"
  // console.log("Shop",adminData.products)
  // res.sendFile(path.join(routeRoot,'views','shop.html'))
  res.render('shop' , {prods:products , pageTitle:"Shop",path:'/'})
});

module.exports = router