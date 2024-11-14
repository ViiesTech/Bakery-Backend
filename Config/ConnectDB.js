const mongoose = require('mongoose')

const connectDB = ()=>{
    const connect =  mongoose.connect("mongodb+srv://nuzzleapps:15nqMPzBUV7uXbsa@cluster0.zrhsy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    const db = mongoose.connection

    db.on("error", err=>console.log(err))
    db.once("open",()=>console.log("DB Connected"))
}

module.exports = connectDB