const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
   username:{
       type:String,
       required: true
   },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    seen:[
        {
            movie:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
            },
            date:{
                type:Date 
            }
    }
]
});

// export model user with UserSchema
module.exports = mongoose.model("User", UserSchema);
