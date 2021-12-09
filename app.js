const express = require("express")
require('dotenv').config()
const cors = require('cors')
const studentRoute = require("./routes/student_routes")
const { checkForProperData } = require("./middlewares")
const app = express()




//app level middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//chekc for proper data
app.use(checkForProperData)

// routes middleware
app.use("/api/students",studentRoute)


module.exports = app

// show
// http://localhost:8080/api/students/getAllData

//  add
// http://localhost:8080/api/students/insertOne

// update
// http://localhost:8080/api/students/updateById

// delete
// http://localhost:8080/api/students/deleteById
