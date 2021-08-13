const express = require("express");
const router = express.Router();
const VentaController = require("../controllers/venta");

router.post("/registerVenta",VentaController.registerVenta);

module.exports = router;