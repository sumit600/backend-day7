


const mongoose = require("mongoose")
app = require("./src/app")

const connetTODb = require("./src/config/database")


connetTODb()


app.listen(3000,()=>{
    console.log("server is running on port 3000")
})

