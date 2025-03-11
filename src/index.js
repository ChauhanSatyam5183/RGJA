const express=require('express');
// const bodyparser=require('body-parser');

const ServerConfig=require('./config/serverconfig');
const connectdb=require("./config/dbConfig");

const app=express();

const Productrouter=require("./Routes/ProductRoute");


// app.use(bodyparser.json());   //json body acceptable
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/Product",Productrouter);


app.listen(ServerConfig.PORT,async ()=>{
     
      await connectdb();
      console.log(`server started at PORT ${ServerConfig.PORT}..`);
      // console.log(ServerConfig.PORT);
})