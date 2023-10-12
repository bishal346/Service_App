const express = require('express'); 
const cors = require('cors'); 

const app = express(); 

app.use(express.json()); 
app.use(express.urlencoded({extended : true})); 
app.use(cors()); 

const routr1 = require("./User/Server"); 
const routr2 = require("./Employee/Server"); 
const routr3 = require("./Admin/Server"); 

app.use(routr1); 
app.use(routr2); 
app.use(routr3); 

// app.post("/U_SignUp", async(req,res) => {
//     const {fname,lname,contact,email,password}=req.body; 
//     console.log(fname); 
//     console.log(lname); 
//     console.log(contact); 
//     console.log(email); 
//     console.log(password); 
//     res.end("HELLO"); 
// }); 
// app.post("/U_SignIn", async(req,res) => {
//     const {email,password}=req.body; 
//     console.log(email); 
//     console.log(password); 
//     res.end("World"); 
// }); 
app.listen(8000, () => {
    console.log("Listening to you Bishal"); 
})