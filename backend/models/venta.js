const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const moment = require("moment"); 

const ventaSchema = new mongoose.Schema({
    idProducto: {type: mongoose.Schema.ObjectId, ref: "product"},
    idUsuario: {type: mongoose.Schema.ObjectId, ref:"user"},
    date: {type: Date,default:Date.now},
    price:Number,
});

ventaSchema.methods.generateJWT = function(){
    return jwt.sign({
        _id: this._id,
        name: this.name,
        iat: moment().unix(),
    },
    process.env.SECRET_KEY_JWT
    );
};

const venta = mongoose.model("venta",ventaSchema);
module.exports = venta;
