const router= require("express").Router();
const User=require("../models/user");
const bcrypt=require("bcrypt");


router.post("/sign-up",async(req,res)=>{
    try{
        const {username,email,password,address}=req.body;
        if(username.length<4){
            return res.status(400).json({message:"Username length should be greater than 3 "})
        }

        const existingUsername =await User.findOne({username:username});
        if(existingUsername){
            return res.status(400).json({message:"Username already exists"})
        }

        const existingEmail =await User.findOne({email:email});
        if(existingEmail){
            return res.status(400).json({message:"Email already exists"})
        }
        if(password.length<6){
            return res.status(400).json({message:"Password length should be greater than 6"})
        }
        const hashpass=await bcrypt.hash(password,10);
        const newUser=new User({
            username:username,
            email:email,
            password:hashpass,
            address:address
        });

        await newUser.save();
        return res.status(200).json({message:"SignUp Successfully"})
    }
    catch(error){
            res.status(500).json({message:"Internal server error"});
    }


});

module.exports=router;