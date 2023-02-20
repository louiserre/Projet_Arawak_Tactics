const mongoose = require("mongoose")
require('dotenv').config()


mongoose.set('strictQuery', false)
mongoose.connect(process.env.DB_CONFIG,
    {
        useNewUrlParser:true,
    },() => console.log("MangoDb connected")
);

