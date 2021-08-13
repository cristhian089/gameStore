const Stock = require("../models/stock");

const registerStock = async (req, res) =>{
    if(!req.body.bodega || !req.body.cantidad)
    return res.status(401).send("Process failed Incompleted data");

    const existingStock = await Stock.findOne({bodega:req.body.bodega});
    if(existingStock) return res.status(401).send("Process failed: stock already exist");

    const stock = new Stock({
        bodega:req.body.bodega,
        cantidad:req.body.cantidad,
    });

    const result = await stock.save();
    if(!result) return res.status(401).send("Failed to register stock");
    return res.status(200).send({ stock });
};

const listStock = async (req, res) =>{
    const stock = await Stock.find()
    if(!stock || stock.length === 0) return res.status(401).send("No Stock")
    return res.status(200).send({stock})
};

module.exports = {registerStock, listStock};