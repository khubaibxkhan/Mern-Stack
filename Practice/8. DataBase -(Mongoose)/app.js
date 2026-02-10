const express = require('express');
const mongoose = require('mongoose');

//connect to mongodb
const dbURI = 'mongodb+srv://khubaibninja:Test1234@zerothproject.ogec3qp.mongodb.net/?appName=zerothProject';
mongoose.connect(dbURI , {useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err));

//express app
const app = express();

//register view engine
app.set('view engine' , 'ejs');

//listen for request
app.listen(3000);

app.get('/', (req,res) => {
    res.render('index' , { title: 'home'});
});

app.get('/about' , (req,res) => {
    res.render('about' , {title: 'about-me'});
});

//404 error
app.use((req,res) => {
    res.status(404).render('404' , {title: 'error'});
});
