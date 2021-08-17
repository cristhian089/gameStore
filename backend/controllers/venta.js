const Venta = require("../models/venta");
const User = require("../models/user");
const product = require("../models/product");


const registerVenta = async (req, res) => {
    if(!req.body.price || !req.body.idProducto || !req.body.idUsuario )
    return res.status(400).send("Process failed: Incomplete data");

    let venta = new Venta({
        idProducto: req.body.idProducto,
        idUsuario: req.body.idUsuario,    
        price: req.body.price,
        
    });

    let result = await venta.save();
    if(!result) return res.status(400).send("Failed to register venta");
    return res.status(200).send({ result });
};


module.exports = { registerVenta };