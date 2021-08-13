const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");
const Product =require("./routes/product");
const Stock = require("./routes/stock");
const User = require("./routes/user");
const Venta = require("./routes/venta");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/product",Product);
app.use("/api/stock",Stock);
app.use("/api/user",User);
app.use("/api/venta",Venta);

app.listen(process.env.PORT,()=>console.log("Backend server running on port: ", process.env.PORT));

dbConnection();