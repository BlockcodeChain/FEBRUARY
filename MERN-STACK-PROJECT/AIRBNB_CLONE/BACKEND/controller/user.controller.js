import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import gentoken from '../utils/token.js';
export const SignUp=async(req,res)=>{
 try{
    const {name,email ,password} =req.body;
    if(!name || !email || !password){
        return res.status(400).json({ message: "All fields required" })
    }
 const existemail=await User.findOne({email});
 if(existemail){
    return res.status(400).json({message:"Email already exists"})

 }
 const hashpassword=await bcrypt.hash(password,10);
 const newuser=await User.create({
    name,
    email,
    password:hashpassword
 }) 
    const token =gentoken(newuser._id);
    res.cookie("token",token,{
        httpOnly:true,
        samesite:"strict",
        maxAge:24*60*60*1000,
        secure:process.env.NODE_ENV==="production"
    })
    
    return res.status(201).json({message:"User created successfully",user:newuser})
 }
 catch(err){
     console.log("SIGNUP ERROR:", err);   
    return res.status(500).json({message:"Internal server error",error:err.message})
 }
}
export const Login=async(req,res)=>{
    try{
    const {email ,password} =req.body;
     if(!email || !password){
        return res.status(400).json({ message:"All fields required" })
    }
 const user=await User.findOne({email});
 if(!user){
    return res.status(400).json({message:"User does not exist"})

 }
const isMatched=await bcrypt.compare(password,user.password);
if(!isMatched){
    return res.status(400).json({message:"Invalid password"})
}

    const token =gentoken(user._id);
    res.cookie("token",token,{
        httpOnly:true,
        sameSite:"strict",
        maxAge:24*60*60*1000,
        secure:process.env.NODE_ENV==="production"
    })
    return res.status(200).json({message:"User login successfully",user:user})
 }
 catch(err){
    return res.status(500).json({message:"Internal login server error",error:err.message})
 }
}
export const Logout=async(req,res)=>{
    try{
   return res.clearCookie("token").status(200).json({message:"User logged out successfully"})
 }
 catch(err){
    return res.status(500).json({message:"Internal logout server error",error:err.message})
 }
}