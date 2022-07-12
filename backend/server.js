const express = require('express')
const cors = require("cors")
const morgan = require("morgan")
const app = express()
const port = 3001
const authRouter = require("./routes/auth")

app.use(cors())
app.use(morgan("tiny"))
app.use(express.json())
app.use("/auth" , authRouter)

app.get('/', (req, res) => {
  res.send("Hello World!")
})

app.get("/login", (req,res) =>{
  
})

app.post("/" , (req,res) => {
    console.log(req.body)
    res.send("Good Post")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})