const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 5500;

mongoose.connect(process.env.MONGO,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err) console.log("Connected to Mongodb");
        else console.log("Connected Error: " + err)
    }
)


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use('/movie', require('./routes/movie.js'))
app.use('/user', require('./routes/user.js'))
app.get('/',(req,res) =>{
    res.send("Doux jesus ca marche")
}


app.listen(port, () => console.log("server started"+port))