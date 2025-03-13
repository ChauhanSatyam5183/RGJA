const  User  = require("../Schema/User");

async function create(userdetail) {
    

    try {

        // Use `await` with `create` since it returns a promise
        console.log("userrepository");
        const newUser = await User.create(userdetail);
        return newUser;
    } catch (error) {
        console.error("Error creating user:", error);
        return { error: error.message || "Something went wrong" };
    }
};

async function Find(email,phone) {

    try{
        const existingUser = await User.findOne({email:email});
           
        return existingUser;
    }
    catch(error){
        console.error("Error finding user:", error);
        return { error: error.message || "Something went wrong" };
    }
    
}

module.exports = {
    create,
    Find
};
