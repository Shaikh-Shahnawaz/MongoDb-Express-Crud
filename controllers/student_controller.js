const student_master = require("../models/studentsModel");

// =========================================[ find ]=========================================

exports.getStudentsData = async (req, res) => {
  try {
    // skip and limit for pagination
    /*const data = await student_master.find()
    .skip(req.body.page * req.body.limit)
    .limit(req.body.limit)*/
    
    // taking count of all data
    /* const count = await student_master.find().count()*/

    // to handle multiple await simultaneously we use PROMISE ALL
    const data = await Promise.all([
      student_master.find().skip(req.body.page * req.body.limit).limit(req.body.limit),
      student_master.find().count()
    ])

    res.json({ mesage: "Data Fetched", data: data[0],totalCount:data[1] });
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

exports.updateStudentById = async (req, res) => {

  // console.log(req.body)
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
      { _id: req.body.id },
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
// exports.deleteStudentByParamsId = async (req, res) => {
//   try {
//     const data = await student_master.deleteOne({ _id: req.params.id });
//     res.json({ message: "Student Data Deleted", data: data });
//   } catch (error) {
//     throw new Error(error);
//   }
// };
