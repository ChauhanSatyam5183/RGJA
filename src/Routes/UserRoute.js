const express = require("express");
const Userrouter = express.Router();


const{usercreate,login }=require("../controller/UserController");


Userrouter.post("/",usercreate);
Userrouter.post("/login",login);

module.exports = Userrouter;
