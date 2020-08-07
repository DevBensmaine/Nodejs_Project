
const products= [];
const Product =  require('../models/product');

exports.getAddProduct = (req, res, next) => {
  // console.log(" In another middelware");
  // res.sendFile(path.join(routeRoot,'views','add-product.html'))
  res.render('add-product',{pageTitle:'Add Product',path:'/admin/add-product'})
}

exports.postAddProduct = (req, res, next) => {
  console.log(req.body);
  // products.push({title : req.body.title})
  const product = new Product( req.body.title)
  product.save();
  res.redirect("/");
}

exports.getProducts = (req, res, next) => {
  // const products =  adminData.products
  const products =  Product.fetchAll();
  const pageTitle = "Page not found"
  // console.log("Shop",adminData.products)
  // res.sendFile(path.join(routeRoot,'views','shop.html'))
  res.render('shop' , {prods:products , pageTitle:"Shop",path:'/'})
}