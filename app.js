const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 8000;
mongoose.connect("mongodb://localhost:27017/weather",{useNewUrlParser: true , useUnifiedTopology: true})
.then( () => console.log("connection successful...."))
.catch((err) => console.log(err));


const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
app.set('views', template_path);
app.set('view engine', 'hbs');

hbs.registerPartials(partials_path);

app.use(express.static(static_path));


app.get("/",(req, res)=> {
res.render('index')
})

app.get("/about",(req, res)=> {
res.render('about')
})

app.get("/weather",(req, res)=> {
res.render('weather')
})


app.get("*",(req, res)=> {
    res.render('404error')
})


app.listen(port, ()=>{
    console.log(`listening to the port at ${port}`)
})