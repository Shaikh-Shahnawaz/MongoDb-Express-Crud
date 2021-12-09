const mongoose = require("mongoose")

const studentSchema = mongoose.Schema({

first_name:{
    type:String,
    required:true,
},
last_name:{
    type:String,
    required:true,
},
field_of_study:{
    type:String,
    required:true,
},
age:Number,


})

const student_master = mongoose.model("student_master",studentSchema)
module.exports = student_master