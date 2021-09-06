const express=require('express');
const app =express();
const cookieParser=require('cookie-parser');
const mongoose=require('mongoose');
app.use(cookieParser());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/mernauth",{useNewUrlParser:true,
useUnifiedTopology:true},()=>{
    console.log("successfuly connected");
});
 
const userRouter=require("./routes/User");
app.use("/user",userRouter);


app.listen(8000,()=>{
    console.log("app started at 8000");

})