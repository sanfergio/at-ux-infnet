const express = require("express");
const router = express.Router();

router.get("/wearable-status", (req, res) => {
  res.json({
    vinculado: false,
    ultimaSincronizacao: null
  });
});

module.exports = router;
