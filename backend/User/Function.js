 const SignUp = async(req,res) => {
    const {fname,lname,contact,email,password}=req.body; 
    console.log(fname); 
    console.log(lname); 
    console.log(contact); 
    console.log(email); 
    console.log(password); 
    res.end("HELLO"); 
}; 

const SignIn = async(req,res) => {
    const {email,password}=req.body; 
    console.log(email); 
    console.log(password); 
    res.end("World"); 
}; 

module.exports = {SignUp,SignIn}; 