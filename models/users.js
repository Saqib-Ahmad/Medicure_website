const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true,
        trim:true,
    },
    gender: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    hospital: {
        type: String,
        required: true
    },
    blood: {
        type: String,
        required: true
    },
    Address:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    doctor:String,
    disease:String,
    bill:String,
    medical:String,
    website:String,
    


})

module.exports = mongoose.model('User',userSchema)