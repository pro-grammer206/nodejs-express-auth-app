const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.json({
        message:"Auth route"
    });
});

router.post("/signup",(req,res)=>{
    console.log(req.body);
   res.render('signup');
});

router.get("/signup",(req,res)=>{
    res.render('signup');
 });

module.exports = router;