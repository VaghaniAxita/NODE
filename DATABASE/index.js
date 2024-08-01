const express = require("express")
const dbConnect = require("./db")
const User = require("./user.schema")
const isValid = require("./validate")

const app = express()

app.use(express.json())

//get data
app.get("/", async (req, res) => {
    let data = await User.find()
    res.send(data)
})

//post for creating
app.post("/", async (req, res) => {
    let data = await User.create(req.body)
    res.send(data)
})

//delete
app.delete("/:id",async(req,res)=>{
    // console.log(req.params);
    let{id}=req.params;
    // console.log(id);
    let data = await User.findByIdAndDelete(id)
    res.send("delete")
})

//update
app.path("/:id",isValid, async(req,res)=>{
    let{id}=req.params;
    let data=await User.findByIdAndUpdate(id,req.body)
    res.send(data)
})


app.listen(8090, () => {
    console.log("listening on port 8090");

    dbConnect()
})