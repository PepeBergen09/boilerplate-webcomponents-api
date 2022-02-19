const express = require("express");
const { getPosts } = require("../controllers/post");

const router = express.Router();

router.get("/", getPosts);
router.get("/data", (req, res)=>{
    res.json({'message':'message'})
});

module.exports = router;
