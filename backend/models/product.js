const mongoose = require("mongoose");
const moment = require("moment");

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    code: Number,
    description: String,
    date:{type:Date, defatult:Date.now},
    idStock: {type: mongoose.Schema.ObjectId, ref:"stock"},
});

const product = mongoose.model("product",productSchema);
module.exports = product;