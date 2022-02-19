var express = require('express');
const User = require('./users.models');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next)=> {
    User.find((err, users) => {
      if(err){
        res.status(400).json({error: err})
      } else
        res.json(users);
    })
});

router.post('/', (req,res,next)=>{
  const user = new User(req.body)
  user.save(); 
  res.json({"message":"done"})
})

module.exports = router;
