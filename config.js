const mongoose = require('mongoose');
const dbconnect = ()=>{
    mongoose.set("strictQuery", true);
    mongoose.connect("mongodb://localhost:27017/users_tp1", {})
    .then(()=>{
        console.log("Conexión correcta.");
    })
    .catch(()=>{
        console.log(err);
    })
}

module.exports = dbconnect;