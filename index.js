import express from "express";
import dotenv from "dotenv";
import connection from "./config/db.js";
import User from "./models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
dotenv.config();
const app=express();
const PORT=process.env.PORT || 4000;


//connected db
connection()

app.use(express.json());

//temperory route
app.post("/test/user",async(req,res)=>{
try {

    
    const {name,email,password}=req.body;
    //create new user
    const user=new User({name,email,password});
    await user.save()

    res.status(201).json({message:"User is created successfully",user})
} catch (error) {
    res.status(400).json({error:error.message})
}
})
//login route
app.post("/login",async(req,res)=>{
    try {
        const {email,password}=req.body;
        //check if user exists
        const user=await User.findOne({email});
        if(!user){
            return res.status(404).json({message:"User not found"})
        }

        //verify the password
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"})
        }

        //generate jwt token
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,
            {
                expiresIn:"1hr",
            }
        )
        res.status(200).json({message:"Login succesfull",token})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

app.get("/",(req,res)=>{
    res.send("welcome my nigga welcome")
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
})