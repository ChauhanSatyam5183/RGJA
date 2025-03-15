const  User  = require("../Schema/User");

async function create(userdetail) {
    

    try {

        // Use `await` with `create` since it returns a promise
        console.log("userrepository");
        const newUser = await User.create(userdetail);
        console.log("newuser",newUser);
        return newUser;
    } catch (error) {
        console.error("Error creating user:", error);
        return { message: error.message || "Something went wrong" ,success:false,data:{}};
    }
};

async function Find(params) {
  const{email,phone}=params;
    try{
        const existingUser = await User.findOne({email:email,phone:phone});

        return existingUser;
    }
    catch(error){
        console.error("Error finding user:", error);
        return { message: error.message || "Something went wrong",success:false,data:{} };
    }
    
};

async function userFindById(Id) {
    try {
        // Check if Id is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(Id)) {
            return { message: "Invalid user ID", success: false, data: {} };
        }

        const existingUser = await User.findById(Id);

        if (!existingUser) {
            return { message: "User not found", success: false, data: {} };
        }

        return { success: true, data: existingUser };
    } catch (error) {
        console.error("Error finding user:", error);
        return {
            message: error.message || "Something went wrong",
            success: false,
            data: {},
        };
    }
}
module.exports = {
    create,
    Find,
    userFindById
};
