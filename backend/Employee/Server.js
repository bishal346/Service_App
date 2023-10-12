const express = require('express'); 

const app = express.Router(); 

const {SignUp,SignIn} = require("./Function")

app.post("/E_SignUp", SignUp); 
app.post("/E_SignIn", SignIn); 

module.exports = app; 