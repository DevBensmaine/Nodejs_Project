const path = require('path');
const express = require("express");
const router = express.Router();
const routeRoot = require('../util/path')

router.get("/add-product", (req, res, next) => {
  console.log(" In another middelware");
  // res.send(`
  //     <form action="/admin/product" method="POST"> 
  //         <input type="text" name="title">
  //         <button type="submit">Send</button>
  //     </form>
  // `);
  res.sendFile(path.join(routeRoot,'views','add-product.html'))
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
