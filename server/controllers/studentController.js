const StudentModel = require("../models/student");

const studentDisplay = async (req, res) => {
  try {
    const student = await StudentModel.find();
    res.json(student);
  } catch (error) {
    console.log(error);
  }
};

const studentCreate = async (req, res) => {
  try {
    // console.log(req.body) //object
    const { name, city } = req.body;
    await StudentModel.create({
      name,
      city,
    });
    res.json("student create");
  } catch (error) {
    console.log(error);
  }
};

const studentView = async (req, res) => {
  try {
    // console.log(req.params.id)
    const student = await StudentModel.findById(req.params.id);
    res.json(student);
  } catch (error) {
    console.log(error);
  }
};

const studentUpdate = async (req, res) => {
  try {
    console.log(req.body)
    console.log(req.params.id)
    const{name,city} =req.body
    await StudentModel.findByIdAndUpdate(req.params.id,{
      name,
      city
    })
    res.json("student update")
    
 
  } catch (error) {
    console.log(error);
  }
};

const studentDelete = async (req, res) => {
  try {
    // console.log(req.params.id)
    await StudentModel.findByIdAndDelete(req.params.id);
    res.json("student delete");
  } catch (error) {
    console.log(error);
  }
};




module.exports = {
  studentDisplay,
  studentCreate,
  studentView,
  studentUpdate,
  studentDelete
};
