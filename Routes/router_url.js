const express = require("express");
const { handelGenerateNewShortURL } = require("../Controllers/control_url");
const router = express.Router();

router.post("/", handelGenerateNewShortURL);
// router.get("/" , (req , res)=>{res.json({message : "hello"})});

module.exports = router;
