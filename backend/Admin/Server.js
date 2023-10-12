const express = require('express'); 

const app = express.Router(); 

const {SignIn} = require("./Function")

// app.post("/E_SignUp", SignUp); 
app.post("/A_SignIn", SignIn); 

module.exports = app; 