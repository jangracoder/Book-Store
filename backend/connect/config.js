const mongoose =require("mongoose")



const conn = async () =>{
    try{
        await mongoose.connect(`${process.env.MONGODBURL}`);
        console.log("connected to server");
    }
    catch(err){
        console.log(err)
    }
}

conn();