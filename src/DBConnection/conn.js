
const mongoose = require("mongoose")
const DB = "mongodb+srv://yashb:yb1234@cluster0.umt1ndj.mongodb.net/employee"
mongoose.connect(DB).then(() => {
    console.log("connection is successfully setup..")
}).catch((e)=>{
    console.log(e);
    console.log("connection is not build...");
});