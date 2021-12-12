const student_master = require("../models/studentsModel");

// =========================================[ find ]=========================================

exports.getStudentsData = async (req, res) => {
  try {
    const data = await student_master.find();
    res.json({ mesage: "Data Fetched", data: data });
  } catch (error) {
    throw new Error(error);
  }
};

// exports.getStudentsDataByUsername = async(req,res)=>{
//     try{
//         const data = student_master.findOne({first_name:req.params.first_name})
//         res.json({message:"Data find",data:data})
//     }
//     catch (error) {
//         throw new Error(error);
//       }
// }

// =========================================[ create, insertMany ]=========================================

exports.insertOneStudent = async (req, res) => {
  // console.log(req.body)
  try {
    const data = await student_master.create(req.body);

    res.json({ message: "Student Data Added", data: data });
  } catch (error) {
    throw new Error(error);
  }
};

exports.insertManyStudent = async (req, res) => {
  try {
    const data = await student_master.insertMany(req.body);
    res.json({ message: "Student Data Added", data: data });
  } catch (error) {
    throw new Error(error);
  }
};

// =========================================[ updateOne ]=========================================
// update
// updateOne

exports.updateStudentByParamsId = async (req, res) => {

  try {
  
    // createing dynamic query for update student

    const query = {};
    for (i in req.body) {
      // console.log('for in loop',req.body[i],i)
      if (req.body[i]) {
        query[i] = req.body[i];
      }
    }

    const data = await student_master.updateOne(
      { _id: req.params.id },
      { $set: query }
    );
    res.json({ message: "Student Data Updated", data: data });
  } catch (error) {
    throw new Error(error);
  }
};

// =========================================[ deleteOne ]=========================================

// getting the id in body
exports.deleteStudentById = async (req, res) => {
  console.log(req.body.id, req.method);
  try {
    const data = await student_master.deleteOne({ _id: req.body.id });
    res.json({ message: "Student Data Deleted", data: data });
  } catch (error) {
    throw new Error(error);
  }
};

/// getting the id in params
exports.deleteStudentByParamsId = async (req, res) => {
  try {
    const data = await student_master.deleteOne({ _id: req.params.id });
    res.json({ message: "Student Data Deleted", data: data });
  } catch (error) {
    throw new Error(error);
  }
};
