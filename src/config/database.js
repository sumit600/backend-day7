const mongoose = require("mongoose")
function connetTODb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connted to DB")
    })
}

module.exports = connetTODb