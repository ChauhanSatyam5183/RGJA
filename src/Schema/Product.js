const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    brand: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    subcategory: {
        type: String,
        required: true,
        enum: [
            // Grocery & Kitchen
            'Fruits & Vegetables',
            'Dairy, Bread & Eggs',
            'Atta, Rice, Oil & Dals',
            'Meat, Fish & Eggs',
            'Masala & Dry Fruits',
            'Breakfast & Sauces',
            'Packaged Food',
            
            // Snacks & Drinks
            'Zepto Cafe',
            'Tea, Coffee & More',
            'Ice Creams & More',
            'Frozen Food',
            'Sweet Cravings',
            'Cold Drinks & Juices',
            'Munchies',
            'Biscuits & Cookies',

            // Beauty & Personal Care
            'Makeup & Beauty',
            'Skincare',
            'Baby Care',
            'Bath & Body',
            'Hair Care',
            'Fragrances & Grooming',
            'Pharmacy & Wellness',
            'Feminine Hygiene',
            'Sexual Wellness',

            // Household Essentials
            'Home Needs',
            'Kitchen & Dining',
            'Cleaning Essentials',
            'Electronics & Appliances',
            'Pet Care',
            'Toys & Sports',
            'Stationery & Books',
            'Paan Corner',

            // Lifestyle
            'Jewellery & Accessories',
            'Apparel & Lifestyle'
        ]
    },
    category: {
        type: String,
        required: true,
        enum: [
            'Grocery & Kitchen',
            'Snacks & Drinks',
            'Beauty & Personal Care',
            'Household Essentials',
            'Lifestyle'
        ]
    },
    images: [{
        type: String, // URLs or image paths
        required: true
    }],
    stock: {
        type: Number,
        required: true,
        default: 0
    },
    ratings: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
