const Cart = require("../Schema/Cart");

/** 🔹 Find Cart by User */
async function findCartByUser(userId) {
    return await Cart.findOne({ user: userId }).populate("items.product", "name price images"); // Removed .lean()
}

/** 🔹 Save Cart */
async function saveCart(cart) {
    return await cart.save(); // cart will now have the save() method
}

module.exports = { findCartByUser, saveCart };
