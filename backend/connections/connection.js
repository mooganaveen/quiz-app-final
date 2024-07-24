
const mongoose = require("mongoose")
const connection = ()=>{
const mongodb_string = 'mongodb://localhost:27017/quizdb'
mongoose.connect(mongodb_string).then(()=>{console.log("Database connection successful")})
.catch(()=>{console.log("Unsuccessful")})
}


module.exports = connection