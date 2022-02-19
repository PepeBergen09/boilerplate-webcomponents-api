const express = require('express');
const router = express.Router();

let posts = [
    {
        title: "My first Post",
        body: "This is the body text"
    },
    {
        title: "My second title",
        body: "This is the bodyfor the second post"
    }
]


router.get('/',(req,res)=>{
    res.json(posts)
})




module.exports = router;