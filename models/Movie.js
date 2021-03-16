const mongoose = require('mongoose')


const MovieSchema = mongoose.Schema({

    title:{
        type:String
    },
    director:{
        type: Array
    },
    cast:{
        type: Array
    },
    overview:{
        type:String
    },
    genres:{
        type:Array
    },
    runtime:{
        type:Number
    },
    release_date:{
        type:Date
    },
    poster_path:{
        type:String
    },
    mdb:{
        type:String
    },

});
module.exports = mongoose.model('Movie', MovieSchema)