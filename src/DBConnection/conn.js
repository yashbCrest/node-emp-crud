
const mongoose = require("mongoose")
require('dotenv').config()
const DB = process.env.url
mongoose.connect(DB).then(() => {
    console.log("connection is successfully setup..")
}).catch((e)=>{
    console.log(e);
    console.log("connection is not build...");
});