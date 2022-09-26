const express = require('express');
const router = express.Router();
const User = require('../models/users');
const path = require('path');
const app = express();



router.get('/login', async(req,res) => {
    try{
            res.render('login');
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/register', async(req,res) => {
    try{
            res.render('register');
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/form-submit', async(req,res) => {
    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        dob: req.body.birthdate,
        gender: req.body.gender,
        email: req.body.email,
        number: req.body.number,
        city: req.body.city,
        password: req.body.password,
        blood: req.body.blood,
        Address:req.body.Address,
        hospital:req.body.hospital,
        pincode:req.body.pincode,
    });
    try{
        const a1 =  await user.save();
        var val=a1.id;
        var name=a1.firstname;
        res.redirect('/'+name+'/'+val);
    }catch(err){
        res.send('Error ' + err)
    }
})


router.get('/:name/:id', async(req,res) => {
    const userdata = await User.findById(req.params.id);
    try{
        res.render('profile',userdata);
    }catch(err){
        res.send('Error ' + err)
    }
})



router.post('/login-submit', async(req,res) => {
    const number=req.body.number;
    const password=req.body.password;
    const userdata = await User.findOne({'number': number});
    try{
        if(Object.keys(userdata).length === 0)
        {
            res.send("wrong input")
        }
        if(userdata.password==password)
        {
            var val=userdata.id;
            var name=userdata.firstname;
            res.redirect('/'+name+'/'+val);
        }
        else
        {
            res.send("uhhuh")
        }
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/search', async(req,res) => {
    const search=req.body.search;
    try{
        res.redirect('/'+search);
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/covid19', async(req,res) => {
    try{
        
        res.redirect("https://en.wikipedia.org/wiki/COVID-19")
    }catch(err){
        res.send('Error ' + err)
    }
})
router.get('/ebola', async(req,res) => {
    try{
        res.redirect("https://en.wikipedia.org/wiki/Ebola")
    }catch(err){
        res.send('Error ' + err)
    }
})
router.get('/dengue', async(req,res) => {
    try{
        res.redirect("https://en.wikipedia.org/wiki/Dengue_fever")
    }catch(err){
        res.send('Error ' + err)
    }
})
router.get('/cholera', async(req,res) => {
    try{
        
        res.redirect("https://en.wikipedia.org/wiki/Cholera")
    }catch(err){
        res.send('Error ' + err)
    }
})
router.get('/conjunctivitis', async(req,res) => {
    try{
        
        res.redirect("https://en.wikipedia.org/wiki/Conjunctivitis")
    }catch(err){
        res.send('Error ' + err)
    }
})
router.get('/diarrhea', async(req,res) => {
    try{
        
        res.redirect("https://en.wikipedia.org/wiki/Diarrhea")
    }catch(err){
        res.send('Error ' + err)
    }
})
router.get('/alzheimer', async(req,res) => {
    try{
        
        res.redirect("https://en.wikipedia.org/wiki/Alzheimer%27s_disease")
    }catch(err){
        res.send('Error ' + err)
    }
})
router.get('/HIV', async(req,res) => {
    try{
        
        res.redirect("https://en.wikipedia.org/wiki/HIV/AIDS")
    }catch(err){
        res.send('Error ' + err)
    }
})
router.get('/tuberculosis', async(req,res) => {
    try{
        
        res.redirect("https://en.wikipedia.org/wiki/Tuberculosis")
    }catch(err){
        res.send('Error ' + err)
    }
})
router.get('/diabetes', async(req,res) => {
    try{
        
        res.redirect("https://en.wikipedia.org/wiki/Diabetes")
    }catch(err){
        res.send('Error ' + err)
    }
})

module.exports = router