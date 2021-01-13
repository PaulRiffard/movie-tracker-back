const mongoose = require('mongoose')
const MovieSchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    real: {
        type: String,

    },
    date: {
        type: Date,
    }
});

module.exports = mongoose.model('Movie', MovieSchema)