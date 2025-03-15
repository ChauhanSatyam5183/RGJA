const express = require("express");
const Cartrouter = express.Router();
const cartController = require("../controller/CartController");

Cartrouter.post("/add", cartController.addToCart);
Cartrouter.get("/:userId", cartController.getCart);
Cartrouter.delete("/remove", cartController.removeItem);

module.exports = Cartrouter;
 