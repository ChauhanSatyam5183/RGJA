const{Find}=require("../Repository/UserRepository");

async function loggging(loggingdetail) {
    
    const email=loggingdetail.email;

    const password=loggingdetail.password;
    console.log("logginginfo",email,password);
    const user=await Find(email);
    
    // console.log("user",user._id);
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