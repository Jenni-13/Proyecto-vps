const express = require("express");
const router = express.Router();

router.get("/saludo", (req, res) => {
    res.json({
        mensaje: "Hola desde api a gatos "
    });
});

module.exports = router;
