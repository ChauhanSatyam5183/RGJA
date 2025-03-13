const express = require("express");
const ServerConfig = require("./config/serverconfig");
const connectdb = require("./config/dbConfig");

const app = express();

const Productrouter = require("./Routes/ProductRoute");
const Userrouter = require("./Routes/UserRoute");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1/Product", Productrouter);
app.use("/v1/User", Userrouter);


app.listen(ServerConfig.PORT, async () => {
    await connectdb();
    console.log(`✅ Server started at PORT ${ServerConfig.PORT}`);
});
