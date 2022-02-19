const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema(
    {
        data: {
            type:String
        }
    }
)

module.exports = mongoose.model("Data", dataSchema )