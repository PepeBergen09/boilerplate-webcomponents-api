const Data = require('../models/data') 

exports.getData = (req, res) => {
    const data = Data.find()
        .select("_id title body")
        .then(posts => {
            res.json({ posts });
        })
        .catch(err => console.log(err))
};

exports.getAdress = (req, res) => {
    res.json({address: "Data"})
};

exports.postData = (res, req)=>{
    // Create an instance of model SomeModel
    var awesome_instance = new Data({ data: 'awesome' });

    // Save the new model instance, passing a callback
    awesome_instance.save(function (err) {
        if (err) return console.log(err);
        // saved!
    });
}