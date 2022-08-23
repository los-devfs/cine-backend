import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  lastName:{
    type: String,
    required: true,
  },
  role:{
    type: String,
    enum : ['Administrator','Employee','Customer'],
    default: 'Employee',
    required: true,
    
  },
  email:{
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
  },
  birthDate: Date,
});

export default mongoose.model("User", schema);