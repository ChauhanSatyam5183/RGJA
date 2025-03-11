const { productget, Productcreate } = require("../Service/ProductService");

async function getProduct(req, res) {
    try {
        let { page = 1, search, brand, subcategory, category } = req.query;

        // Convert page to a number
        page = parseInt(page, 10);

        // Call service function
        const products = await productget({ page, search, brand, subcategory, category });

        // Send success response
        return res.status(200).json({ 
            success: true, 
            data: products, 
            pageNo: page, 
            totalProducts: products.length 
        });

    } catch (error) {
        console.error("Error fetching products:", error);

        return res.status(error.statusCode || 500).json({ 
            success: false, 
            message: error.message || "Internal Server Error" 
        });
    }
}

async function create(req, res) {
    try {
        const productDetail = req.body;

        // Create a new product
        const product = await Productcreate(productDetail);

        // Send success response
        return res.status(201).json({ 
            success: true, 
            message: "Product created successfully", 
            data: product 
        });

    } catch (error) {
        console.error("Error creating product:", error);

        return res.status(error.statusCode || 500).json({ 
            success: false, 
            message: error.message || "Internal Server Error" 
        });
    }
}

module.exports = {
    getProduct,
    create
};
