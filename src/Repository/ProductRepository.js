const Product = require("../Schema/Product");

async function createProduct(params) {
    try {
        const response = await Product.create(params);
        return response;
    } catch (error) {
        throw { message: "Cannot create product", error: error };
    }
}

async function getProduct({ page = 1, limit = 15, query={} }) {
    try {
        const skip = (page - 1) * limit;
       

        // Fetch products with pagination and sorting
        const products = await Product.find(query)
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 });

        return products;
    } catch (error) {
        throw { message: "Cannot get products", error: error };
    }
}

module.exports = {
    getProduct,
    createProduct
};
