const express = require("express")
const {insertOneStudent,insertManyStudent,getStudentsData,updateStudentById,deleteStudentById } = require("../controllers/student_controller")

const router = express.Router()


router.get("/getAllData",getStudentsData)
// router.get("/getDataByUsername/:usernaame",getStudentsDataByUsername)

router.post("/insertOne",insertOneStudent) // insert one
router.post("/insertMany",insertManyStudent) // insert many

router.put("/updateById",updateStudentById) 
router.delete("/deleteById",deleteStudentById) 


module.exports = router