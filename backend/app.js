const express=require("express");
const app =express();
require("dotenv").config();
require("./connect/config")

const user=require("./routes/user");

app.use(express.json());
app.use("/ap1/v1",user);



app.listen(process.env.PORT,()=>{
    console.log(`Server started at port ${process.env.PORT}`);
})
