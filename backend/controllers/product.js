const Product = require("../models/product");
const Stock = require("../models/stock");
const registerProduct = async (req, res) =>{
    if(!req.body.name || !req.body.price || !req.body.code || !req.body.description)
    return res.status(401).send("Process failed Incompleted data");

    const existingProduct = await Product.findOne({name:req.body.name});
    if(existingProduct) return res.status(401).send("Process failed: product already exist");

    let stock = await Stock.findOne({ bodega: "calle 3 #22-3" });
    
    if (!stock)
    return res.status(400).send("Process failed: No Stok was assigned");
    

    const product = new Product({
        name:req.body.name,
        price:req.body.price,
        code:req.body.code,
        description:req.body.description,
        idStock: stock._id,
       
    });

    const result = await product.save();
    if(!result) return res.status(401).send("Failed to register product");
    return res.status(200).send({ product });
};

const listProduct = async (req, res) =>{
    const product = await Product.find()
    if(!product || product.length === 0) return res.status(401).send("No Product");
    return res.status(200).send({product});
};

module.exports = {registerProduct,listProduct};