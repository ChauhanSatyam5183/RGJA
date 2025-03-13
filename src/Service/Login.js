const{Find}=require("../Repository/UserRepository");

async function loggging(loggingdetail) {
    
    const email=loggingdetail.email;

    const password=loggingdetail.password;
    console.log("logginfin",email,password);
    const user=await Find(email);
    
    console.log("user",user._id);
    if(user){
        if(password===user.password){
            return user._id;
        }
        else{
            return "Password is incorrect";
        }
    }
   
    return "No user Found with this credeatiils";
    
};

module.exports={
    loggging
}