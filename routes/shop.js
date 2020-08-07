const path =  require('path');
const express = require("express");
const router = express.Router();
const routeRoot = require('../util/path');
const adminData = require('./admin');
const productController =  require('../controllers/products');

router.get('/',productController.getProducts);

module.exports = router 