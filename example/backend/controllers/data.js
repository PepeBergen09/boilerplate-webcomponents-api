const Data = require('../models/data') 

exports.getData = (req, res) => {
    const data = Data.find()
        .select("_id name")
        .then(data => {
            res.json({ data });
        })
        .catch(err => console.log(err))
};

exports.createData = (req, res, next) => {
        let data = new Data();


        data.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
            res.json(result);
        });
    };

