const express = require('express'); 

const app = express.Router(); 

const {SignUp,SignIn} = require("./Function")

app.post("/U_SignUp", SignUp); 
app.post("/U_SignIn", SignIn); 

module.exports = app; 