const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

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


app.listen(5500, () => console.log("server started : 5500"))