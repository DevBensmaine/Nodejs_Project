// const path = require('path');
const express = require("express");
const router = express.Router();
// const routeRoot = require('../util/path')
const productController =  require('../controllers/products');



const products= [];

router.get("/add-product",productController.getAddProduct );

router.post("/add-product", productController.postAddProduct);

module.exports = router;
// exports.routes=router ;
// exports.products=products;

