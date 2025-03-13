const {create}=require("../Repository/UserRepository");

const User=require("../Schema/User");

async function createuser(Userdetail) {
    
    const email=Userdetail.email;
    const phone=Userdetail.phone;
 
    console.log("userservice");
      const existingUser = await User.findOne({email:email,phone:phone});
      
     console.log("existinguser",existingUser);
     if (existingUser) {
        throw { message: "User already exists", error: "Please login with different credentials" };
                }

          // Use `await` with `create` since it returns a promise
      const newUser = await create(Userdetail);
         return newUser;
 
       
};

module.exports={createuser}; 