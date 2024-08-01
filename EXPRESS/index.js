const express = require('express')

const app = express()

app.get("/node",(req,res)=>{
    res.send("Welcome to First node lecture..")
})

//call back function 
app.listen(8090 , ()=> {
    console.log("listening on http://localhost:8090");
})