const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  UserId: {
    type: String,
    require: true,
    unique: true,
  },
  FullName: {
    type: String,
    require: true,
   
  },
  
 password: {
    type: String,
    require: true,
   
  },
  EmailId:{
    type: String,
    require: true,
    unique: true,
  },
  MobileNo: {
    type: String,
    require: true,
    unique: true,
  },
  Address:{
    type: String,
    require: true,
  },
  DateOfJoining:{
    type: String,
    require: true,
  },
  Gender:{
    type: String,
    require : true, 
  },
  DateOfBirth:{
    type: String,
    require:true,
  },
  Department:{
    type: String,
    require:true,
  },
  Nationality:{
    type: String,
    require: true,
  },
  BankAccountNumber:{
    type: String,
    require: true,
  },
  BankName:{
    type: String,
    require: true,
  },
  IfscCode:{
    type: String,
    require: true,
  },
  WorkingBranchName:{
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

  DearnessAllowance:{
    type: Number,
    require: true,
  },
  ConveyanceAllowance:{
    type: Number,
    require : true, 
  },
  TravelAllowance:{
    type: Number,
    require : true, 
  },
  TotalTax:{
    type: Number,
    require : true, 
  },
  MedicalAllowance:{
    type: Number,
    require : true, 
  },
  SpecialAllowance:{
    type: Number,
    require : true, 
  },
  ProvidentFund:{
    type: Number,
    require:true,
  },
  ProfessionalTax:{
    type: Number,
    require:true,
  },
  TaxDeductedAtSource:{
    type: Number,
    require:true,
  },
 
  TotalPaid:{
    type: Number,
    require:true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("employee_details", userSchema);
module.exports = User;
