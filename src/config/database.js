const mongoose = require("mongoose")
function connetTODb(){
    mongoose.connect("mongodb+srv://Sumit:BWzoksx8qHliRFEE@cluster0.pxklaos.mongodb.net/day7")
    .then(()=>{
        console.log("connted to DB")
    })
}

module.exports = connetTODb