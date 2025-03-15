const cartService = require("../Service/CartService");

async function addToCart(req, res) {
    const { userId, productId, quantity } = req.body;
    const response = await cartService.addToCart(userId, productId, quantity);
    res.json(response);
}

async function getCart(req, res) {
    const { userId } = req.params;
    const response = await cartService.getCart(userId);
    res.json(response);
} 

async function removeItem(req, res) {
    console.log("cart controller remove");
    const { userId, productId } = req.body;
    const response = await cartService.removeItem(userId, productId);
    res.json(response);
}
  
module.exports = { addToCart, getCart, removeItem };
 