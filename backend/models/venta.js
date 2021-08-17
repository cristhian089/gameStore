const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const moment = require("moment"); 

const ventaSchema = new mongoose.Schema({
    idProducto: {type: mongoose.Schema.ObjectId, ref: "product"},
    idUsuario: {type: mongoose.Schema.ObjectId, ref:"user"}, 
    date: {type: Date,default:Date.now},
    price:Number,
   
});


const venta = mongoose.model("venta",ventaSchema);
module.exports = venta;
