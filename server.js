const express = require('express');
const app = express();
const volleyball = require('volleyball');
const port = 3000;

const auth = require('./auth/index.js');


app.use(volleyball);
app.set('view engine',"ejs");
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth',auth);


app.get("/",(req,res)=>{
    res.render('login')
});

app.post("/",(req,res)=>{
    if (req.body.uname==="vipin" && req.body.password==="1234"){
        const name = req.body['uname'];
        res.render('user_page',{name:name});
    }
    else{
        res.render('login',{message:"invalid credentials please try again"});
    }
});

app.listen(port,(req,res)=>{
    console.log(`listening on port ${port}`);
})
