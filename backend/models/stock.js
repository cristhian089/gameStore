const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
    bodega: String,
    cantidad: Number,
});

const stock = mongoose.model("stock",stockSchema);
module.exports = stock;