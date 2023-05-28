const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  emp_id: {type: mongoose.Schema.Types.ObjectId, ref: 'employee_details'},

  EmpId: {
    type: String,
    require: true,
  },
  Month:{
    type: String,
    require: true,
  },
  
  BasicSalary: {
    type: Number,
    require: true,
    
  },
  HRA:{
    type: Number,
    require: true,
   
  },
  TravelAllowance: {
    type: Number,
    require: true,
   
  },
  DearnessAllowance:{
    type: Number,
    require: true,
  },
  ConveyanceAllowanceer:{
    type: Number,
    require : true, 
  },
  ProvidentFund:{
    type: Number,
    require:true,
  },
  TotalTax:{
    type: Number,
    require:true,
  },
 
  TotalPaid:{
    type: Number,
    require:true,
  },
  EmpName:{
    type: String,
    require: true,
  },
EmailId:{
  type:String,
  require:true,
},

  createdOn: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("employee_salary", userSchema);
module.exports = User;
