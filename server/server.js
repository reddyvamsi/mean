const express=require("express")
const bodyParser = require("body-parser");
const port =3000;
//importing the api file
const api=require('./routs/api');

const app=express()
app.use(bodyParser.json())
//chek the weather router working fine or not
app.use('/api', api)

//checking the srver working or not
app.get('/',(req,res)=>{
   res.send("the server working fine");
});


// listening the request
app.listen(port, ()=>{
    console.log("the server runing the" +`${port}`);
    })





