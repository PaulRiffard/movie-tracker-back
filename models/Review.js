const mongoose = require('mongoose')
const ReviewSchema = mongoose.Schema({

    note: {
        type:String,
    },
    commentary:{
        type:String
    }

});

module.exports = mongoose.model('Review', ReviewSchema)