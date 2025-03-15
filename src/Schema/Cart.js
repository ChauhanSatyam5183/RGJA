const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to the User model
        required: true
    },
    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product", // Reference to the Product model
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: [1, "Quantity must be at least 1"],
                default: 1
            },
            price: {
                type: Number,
                required: true
            }
        }
    ],
    totalPrice: {
        type: Number,
        required: true,
        default: 0
    },
    totalItems: {
        type: Number,
        required: true,
        default: 0
    }
}, { timestamps: true });

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
