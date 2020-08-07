const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

const app = express();

const adminRoutes = require('./routes/admin')
// const adminData = require('./routes/admin')
const shopRoutes = require("./routes/shop")

const errorController = require('./controllers/error')


//implement pug
app.set('view engine','pug')
app.set('views')


app.use(bodyParser.urlencoded({extended:false}))
//for style
app.use(express.static(path.join(__dirname,'public')))
app.use('/admin',adminRoutes)
// app.use('/admin',adminData.routes)
app.use(shopRoutes)

app.use('/',(req,res,next) => {
  console.log("this always run...");
  next();
})

app.use(errorController.get404)




app.listen(3000);
