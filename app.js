const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const homeRouter = require('./routes/homeRoutes')

const app  = express();
const port  = process.env.PORT || 4000;




mongoose.connect("mongodb+srv://huy123:huy123@huyshop.fxjn5oz.mongodb.net/?retryWrites=true&w=majority&appName=HuyShop",{useNewUrlParser : true})
const db = mongoose.connection;
db.on("error",()=>{console.log("err");})
db.once("open",()=>{console.log("Conected");})


app.set('view engine','ejs')

app.use(express.static('public'))



// body parser 

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


// routing home route
app.use('/',homeRouter)


app.listen(port,()=>{
    console.log("Server is Runing");
})









