const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,

});

userSchema.methods.generateJWT = function(){
    return jwt.sign({
        _id:this._id,
        name:this.name,

    },
    process.env.SECRET_KEY_JWT
    );
};

const user = mongoose.model("user", userSchema);
module.exports = user;