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

exports.updateStudentById = async (req, res) => {
  try {
    const updateAllField = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      field_of_study: req.body.field_of_study,
      age: req.body.age,
    };
    const data = await student_master.updateOne(
      { _id: req.body._id },
      { $set: updateAllField }
    );
    res.json({ message: "Student Data Updated", data: data });
} catch (error) {
    throw new Error(error);
}
};
// exports.updateAllStudent = async(req,res)=>{
    //     try{
        //         const data = await student_master.updateMany({_id:req.body._id},{$set:{first_name:req.body.first_name}})
//         res.json({ message: "Student Updated", data: data });
//     }
//     catch (error) {
    //         throw new Error(error);
    //       }
    // }
    

// =========================================[ deleteOne ]=========================================

exports.deleteStudentById = async (req, res) => {
  try {
    const data = await student_master.deleteOne({_id:req.body._id})
    res.json({ message: "Student Data Deleted", data: data });
  } catch (error) {
    throw new Error(error);
  }
};
