const cartService = require("../Service/CartService");

async function addToCart(req, res) {
    const { userId, productId, quantity } = req.body;
    const response = await cartService.addToCart(userId, productId, quantity);
    res.json(response);
}

async function getCart(req, res) {
    const { userId } = req.params;

    if (userId.length === 24) {
        const response = await cartService.getCart(userId);
        return res.json(response);  // ✅ Ensures only one response is sent
    }

    res.json({ success: false, message: "Signup again something went wrong" });
}


async function removeItem(req, res) {
    console.log("cart controller remove");
    const { userId, productId } = req.body;
    const response = await cartService.removeItem(userId, productId);
    res.json(response);
}
  
module.exports = { addToCart, getCart, removeItem };
 