const {create,Find,userFindById}=require("../Repository/UserRepository");

async function createuser(Userdetail) {
    
    const email=Userdetail.email;
    const phone=Userdetail.phone;
 
    console.log("userservice ",email," ",phone);
    const existingUser = await Find({email:email,phone:phone});
      
     console.log("existinguser",existingUser);
     
     if (existingUser) {
        return { message: "User already exists with these credentials",data:{},sucess:false};
                }

          // Use `await` with `create` since it returns a promise
     
      var newUser = await create(Userdetail);
      return { message: "User created",data:newUser,sucess:true};
 
       
};
async function FindBYID(Id) {
  
   return userFindById(ID);
}

module.exports={createuser,FindBYID}; 