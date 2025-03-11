const mongoose=require('mongoose')
const serverconfig=require("./serverconfig")



// The below fuction helps  
// us to connect db

async function connectdb(params) {

   try {
        await mongoose.connect(serverconfig.DB_URL, {
            serverSelectionTimeoutMS: 30000, // Increase timeout
            socketTimeoutMS: 45000, // Increase socket timeout
        });
        console.log("✅ Successfully connected to MongoDB");
    } catch (error) {
        console.log("❌ NOT connected to MongoDB");
        console.log(error);
    }
    
}

module.exports=connectdb;
