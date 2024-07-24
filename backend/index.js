const express = require('express')
const connect =  require("./connections/connection")

connect();

const app = express()


const middleware = (req,res,next)=>{
    console.log("Middleware")
    req.new_property = "new"
    next()
}

const midd2 = (req,res,next)=>{
    console.log("Middleware2")
    req.new_property2= "new1"
    res.send('response')
}

app.get('/',middleware,(req,res,next)=>{
    console.log(req.new_property)
    next()
},midd2)
app.listen(8080,()=>console.log('server started'))