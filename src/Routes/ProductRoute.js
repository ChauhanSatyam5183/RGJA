const express = require("express");
const Productrouter = express.Router();


const{ getProduct,create}=require("../controller/ProductController");


Productrouter.get("/",getProduct);

Productrouter.post("/",create);


module.exports = Productrouter;
