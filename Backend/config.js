const mongoose = require("mongoose");
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;

db.on("error" , (err)=>{
    console.log("there was an error while connecting to db" + err);
});

db.on("open",() => {
    console.log("connected to db");
});

module.exports = db;
