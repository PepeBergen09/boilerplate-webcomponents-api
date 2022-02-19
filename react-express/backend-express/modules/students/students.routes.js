let mongoose = require('mongoose'),
express = require('express'),
router = express.Router();

let studentSchema = require('./students.model'); 

router.route('/create').post((req,res,next) => {
   studentSchema.create(req.body, (err, data)=>{
       if (error) {
           return next(error)
       } else {
           console.log(data)
           res.json(data)
       }
   }) 
});

router.route('/studentslist').get((req,res)=>{
    studentSchema.find((err,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data);
        }
    })
})

module.exports = router;