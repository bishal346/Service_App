 const SignUp = async(req,res) => {
    const {fname,lname,contact,email,yoe,fior,password}=req.body; 
    console.log("fname -> "+fname); 
    console.log("lname -> "+lname); 
    console.log("contact -> "+contact); 
    console.log("email -> "+email); 
    console.log("yoe -> "+yoe); 
    console.log("fior -> "+fior); 
    console.log("password -> "+password); 
    res.end("HELLO"); 
}; 

const SignIn = async(req,res) => {
    const {email,password}=req.body; 
    console.log("email -> "+email); 
    console.log("password -> "+password); 
    res.end("World"); 
}; 

module.exports = {SignUp,SignIn}; 