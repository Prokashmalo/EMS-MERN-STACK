const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  emp_id: {type: mongoose.Schema.Types.ObjectId, ref: 'employee_details'},
  UserId: {
    type: String,
    require: true,
    unique: true,
  },
  AttendenceStatus: {
    type: String,
    enum: ["Present", "Absent",],
    default: "Present"
  },
  // FullName:{
  //   type: String,
  //   require: true,
  // },
  date:{
    type: String,
    require: true,
  },
  currentTime:{
    type: String,
    require: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("attendance_details", userSchema);
module.exports = User;
