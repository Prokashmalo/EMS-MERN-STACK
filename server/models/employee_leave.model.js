const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  // employee: {
  //   id: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "employee_details"
  //   },
  //   FullName: String,
  // },
  emp_id: {type: mongoose.Schema.Types.ObjectId, ref: 'employee_details'},

  EmpId: {
    type: String,
    require: true,
  },
  LeaveStatus: {
    type: String,
    enum: ["pending", "approved", "denied"],
    default: "pending"
  },
  Reason:{
    type: String,
    require: true,
  },
  FromDate: {
    type: String,
    require: true, 
  },
  ToDate:{
    type: String,
    require: true,
  },
  EmpName:{
    type: String,
    require: true,
  },
EmailId:{
  type:String,
  require:true,
}
  // createdOn: {
  //   type: Date,
  //   default: Date.now,
  // },
});

const User = mongoose.model("employee_leaves", userSchema);
module.exports = User;
