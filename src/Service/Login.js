const{Find}=require("../Repository/UserRepository");
const User=require("../Schema/User");

async function loggging(loggingdetail) {
    
    const email=loggingdetail.email;

    const password=loggingdetail.password;  
    console.log("logginginfo",email,password);
    const user=await User.findOne({email:email});
    
    console.log("user",user);
    if(user){
        if(password===user.password){
            return{messsge:"Loggined succesfully",sucess:true,data:user._id};
        }
        else{
            return{messsge:"Password is incorrect",sucess:false,data:{}};  
        }
    }
    return{messsge:"No user Found with this credeatiils",sucess:false,data:{}};
    
};

module.exports={
    loggging
}