const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

const app = express();

// const adminRoutes = require('./routes/admin')
const adminData = require('./routes/admin')
const shopRoutes = require("./routes/shop")


app.use(bodyParser.urlencoded({extended:false}))
//for style
app.use(express.static(path.join(__dirname,'public')))
// app.use('/admin',adminRoutes)
app.use('/admin',adminData.routes)
app.use(shopRoutes)

app.use('/',(req,res,next) => {
  console.log("this always run...");
  next();
})

app.use((req,res,next)  => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})




app.listen(3000);
