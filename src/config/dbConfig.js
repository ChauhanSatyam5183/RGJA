const mongoose = require("mongoose");
const serverconfig = require("./serverconfig");

// Function to connect to MongoDB
async function connectdb() {
    try {
        await mongoose.connect(serverconfig.DB_URL);
        console.log("✅ Successfully connected to MongoDB");
    } catch (error) {
        console.log("❌ NOT connected to MongoDB");
        console.error(error);
    }
}

module.exports = connectdb;
