const express = require("express")
const dbConnect = require("./db")
const User = require("./user.schema")

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


app.listen(8090, () => {
    console.log("listening on port 8090");

    dbConnect()
})