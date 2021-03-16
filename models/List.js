const mongoose = require('mongoose')
const ListSchema = mongoose.Schema({

    name: {
        type: String,
        required:true
    },
    movie: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
    }],
    created_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    created_at:{
        type:Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('List', ListSchema)