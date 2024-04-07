const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const {PORT, MONGODB_URI} = require("./utils/config")
const blogRouter = require("./controllers/blogs")



mongoose.connect(MONGODB_URI)

app.use(cors())
app.use(express.json())

app.use("/", blogRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})