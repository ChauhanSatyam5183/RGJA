const dotenv = require("dotenv");

// Load environment variables first!
dotenv.config();

module.exports = {
    PORT: process.env.PORT || 5000, // Default to 5000 if not set
    DB_URL: process.env.DB_URL, // MongoDB URL
   
};
