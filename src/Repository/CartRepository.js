const Cart = require("../Schema/Cart");

/** 🔹 Find Cart by User */
async function findCartByUser(userId) {
    return await Cart.findOne({ user: userId }).populate("items.product", "name price images").lean();
}

/** 🔹 Save Cart */
async function saveCart(cart) {
    return await cart.save();
}

module.exports = { findCartByUser, saveCart };
