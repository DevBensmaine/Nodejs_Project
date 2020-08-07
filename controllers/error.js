exports.get404 = (req,res,next)  => {
  const pageTitle = "Page not found"
  // res.status(404).sendFile(path.join(__dirname,'views','404.html'))
  res.status(404).render('404' , {pageTitle})
}