const express = require('express')
const cors = require("cors")
const morgan = require("morgan")
const app = express()
const port = 3001
const authRouter = require("./routes/auth")
const nutritionRouter = require("./routes/nutritionR")
const sleepRouter = require("./routes/sleepR")
const exerciseRouter = require("./routes/exerciseR")
const security = require("./middleware/security")
const {NotFoundError} = require("./utils/errors")


app.use(cors())
app.use(morgan("tiny"))
app.use(express.json())
app.use(security.extractUserFromJwt)

app.use("/auth" , authRouter)
app.use("/nutrition" , nutritionRouter)
app.use("/sleep", sleepRouter)
app.use("/exercise", exerciseRouter)

app.use((req, res, next) => {
  return next(new NotFoundError())
})

app.use((err, req, res, next) => {
  const status = err.status || 500
  const message = err.message
  console.log(err.stack)
  return res.status(status).json({
    error: { message, status },
  })
})

app.get('/', (req, res) => {
  res.send("Hello World!")
})

app.get("/login", (req,res) =>{
  
})

app.post("/" , (req,res) => {
    console.log(req.body)
    res.send("Good Post")
})


app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})