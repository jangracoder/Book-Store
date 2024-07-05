const express=require("express");
const app =express();
require("dotenv").config();
require("./connect/config")

app.get("/",(req,res)=>{
    res.send("hi");
})



app.listen(1000,()=>{
    console.log(`Server started at port ${process.env.PORT}`);
})

