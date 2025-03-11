const { getProduct, createProduct } = require("../Repository/ProductRepository");

async function productget({ page = 1, search, brand, subcategory, category }) {
    const query = {};

    // Handle search functionality for multiple fields
    if (search) {
        const decodedSearch = decodeURIComponent(search);
        query.$or = [
            { name: new RegExp(decodedSearch, "i") }, 
            { brand: new RegExp(decodedSearch, "i") },
            { subcategory: new RegExp(decodedSearch, "i") },
            { category: new RegExp(decodedSearch, "i") }
        ];
    }

    // Apply direct filters if provided
    if (brand) query.brand = decodeURIComponent(brand);
    if (category) query.category = decodeURIComponent(category);
    if (subcategory) query.subcategory = decodeURIComponent(subcategory);

    return await getProduct({ page, query });
}

async function Productcreate(productDetail) {
    return await createProduct(productDetail);
}

module.exports = {
    productget,
    Productcreate
};
