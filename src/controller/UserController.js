const{createuser}=require("../Service/UserService");
const{loggging}=require("../Service/Login");

async function usercreate(req,res) {
    const Userdetail=req.body;
    console.log("usercontroller");
    console.log("userdetail",Userdetail);
    try {
        const user=await createuser(Userdetail);
        return res.status(201).json({ 
            success: user.sucess, 
            data: user.data,
            message:user.message 
        });

    } catch (error) {
        console.error("Error in creating User ", error);

        return res.status(error.statusCode || 500).json({ 
            success: false, 
            message: error.message || "Internal Server Error" 
        });
    }
};


// -----------------------------------login function-------------------------------------------------------------------
async function login(req,res) {
    console.log("login controller");
    const userdetail=req.body;
    try {
        const user=await loggging(userdetail);
        
        console.log("userlogin",user);
        return res.status(201).json({
            success:user.sucess,
            message:user.messsge,
            data:user.data
        })
    } catch (error) {
        return res.status(error.statusCode || 500).json({ 
            success: false, 
            message: error.message || "Internal Server Error" 
        });
    }
}

module.exports={
    usercreate,
    login
}