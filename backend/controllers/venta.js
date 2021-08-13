const Venta = require("../models/venta");


const registerVenta = async (req, res) => {
    if(!req.body.idProducto || !req.body.idUsuario || !req.body.price)
    return res.status(400).send("Process failed: Incomplete data");

    let existingVenta = await Venta.findOne({ email: req.body.email });
    if(existingVenta)
    return res.status(400).send("Process faied: the venta  is already registered");

    let venta = new Venta({
        idProducto: req.body.idProducto,
        idUsuario: req.body.idUsuario,
        price: req.body.price,
    })

    let result = await venta.save();
    if(!result) return res.status(400).send("Failed to register venta");

};

module.exports = { registerVenta };