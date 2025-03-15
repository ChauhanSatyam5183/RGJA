const cartRepository = require("../Repository/CartRepository");
const Product = require("../Schema/Product");
const Cart = require("../Schema/Cart"); // Ensure Cart schema is imported

/** ✅ Add or Update Cart */
async function addToCart(userId, productId, quantity) {
    let cart = await cartRepository.findCartByUser(userId);
    const product = await Product.findById(productId);

    if (!product) return { success: false, message: "Product not found" };
    if (product.stock < quantity) return { success: false, message: "Insufficient stock" };

    if (!cart) {
        cart = new Cart({ user: userId, items: [], totalPrice: 0, totalItems: 0 });
    }

    let item = cart.items.find(item => item.product.toString() === productId);

    if (item) {
        if (item.quantity + quantity > product.stock) {
            return { success: false, message: "Exceeds available stock" };
        }
        item.quantity += quantity;
        item.price = item.quantity * product.price;
    } else {
        cart.items.push({ product: productId, quantity, price: product.price * quantity });
    }

    // Decrease stock of product
    product.stock -= quantity;
    await product.save();

    // Update cart totals
    cart.totalPrice = cart.items.reduce((sum, item) => sum + item.price, 0);
    cart.totalItems = cart.items.length;

    await cartRepository.saveCart(cart);
    return { success: true, message: "Product added to cart", cart };
}

/** ✅ Get Cart by User */
async function getCart(userId) {
    const cart = await cartRepository.findCartByUser(userId);
    if (!cart) return { success: false, message: "Cart not found" };
    return { success: true, cart };
}

/** ✅ Remove Item from Cart & Restore Stock */
async function removeItem(userId, productId) {
    let cart = await cartRepository.findCartByUser(userId);
    if (!cart) return { success: false, message: "Cart not found" };

    const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
    if (itemIndex === -1) return { success: false, message: "Item not found in cart" };

    const removedItem = cart.items[itemIndex];

    // Restore stock of the removed product
    const product = await Product.findById(productId);
    if (product) {
        product.stock += removedItem.quantity;
        await product.save();
    }

    // Remove item from cart
    cart.items.splice(itemIndex, 1);
    cart.totalItems = cart.items.length;
    cart.totalPrice = cart.items.reduce((sum, item) => sum + item.price, 0);

    await cartRepository.saveCart(cart);
    return { success: true, message: "Item removed from cart", cart };
}

module.exports = { addToCart, getCart, removeItem };
