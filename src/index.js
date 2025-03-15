const express = require("express");
const ServerConfig = require("./config/serverconfig");
const connectdb = require("./config/dbConfig");
const cors = require("cors");

const app = express();

const Productrouter = require("./Routes/ProductRoute");
const Userrouter = require("./Routes/UserRoute");
const Cartrouter=require("./Routes/CartRoutes");

app.use(cors({
  origin: ["https://rgja-frontend-93qp.vercel.app", "http://localhost:5500"],// Frontend URL
    methods: "GET,POST,PUT,DELETE",
    credentials: true // Allow cookies if needed
  }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1/Product", Productrouter);
app.use("/v1/User", Userrouter);
app.use("/v1/cart",Cartrouter);

app.listen(ServerConfig.PORT, async () => {
    await connectdb();
    console.log(`✅ Server started at PORT ${ServerConfig.PORT}`);
});
