require("dotenv").config();
const Parse = require("@parse/node-apn")
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const Admin = require("./models/admin.model");
const Emp = require("./models/employee_details.model");
const Sal = require("./models/employee_salary.model");
const Lev = require("./models/employee_leave.model");
const Atd = require("./models/attendance_details.model");
const saltRounds = 10;
const session = require("express-session");
const { default: mongoose } = require("mongoose");
const app = express();
require("./config/database");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());

require("./config/passport");

// home route
app.get("/", (req, res) => {
  res.send("<h1> Welcome to the server </h1>");
});
// ADD New Employee Route

app.post("/addemployee", async (req, res) => {
  try {
    const user = await Emp.findOne({ FullName: req.body.FullName });
    if (user) return res.status(400).send("User already exists");
    bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
      const newUser = new Emp({
              UserId: req.body.UserId,
              FullName: req.body.FullName,
              password: hash,
              MobileNo: req.body.MobileNo,
              EmailId: req.body.EmailId,
              Address: req.body.Address,
              DateOfJoining: req.body.DateOfJoining,
              Gender: req.body.Gender,
              DateOfBirth: req.body.DateOfBirth,
              Department: req.body.Department,
              Nationality: req.body.Nationality,
              BankAccountNumber: req.body.BankAccountNumber,
              BankName: req.body.BankName,
              IfscCode: req.body.IfscCode,
              WorkingBranchName: req.body.WorkingBranchName,
              Month: req.body.Month,
              BasicSalary: req.body.BasicSalary,
              HRA: req.body.HRA,
              TravelAllowance: req.body.TravelAllowance,
              MedicalAllowance: req.body.MedicalAllowance,
              DearnessAllowance: req.body.DearnessAllowance,
              SpecialAllowance: req.body.SpecialAllowance,
              ConveyanceAllowance: req.body.ConveyanceAllowance,
              ProvidentFund: req.body.ProvidentFund,
              ProfessionalTax: req.body.ProfessionalTax,
              TaxDeductedAtSource: req.body.TaxDeductedAtSource,
              TotalPaid: req.body.TotalPaid,
              TotalTax: req.body.TotalTax,
        
      

      });
      await newUser
        .save()
        .then((user) => {
          res.send({
            success: true,
            message: "User is created Successfully",
            user: {
              id: user._id,
              UserId: user.UserId,
              FullName: user.FullName,
              MobileNo: user.MobileNo,
              EmailId: user.EmailId,
              Address: user.Address,
              DateOfJoining: user.DateOfJoining,
              Gender: user.Gender,
              DateOfBirth: user.DateOfBirth,
              Department: user.Department,
              Nationality: user.Nationality,
              BankAccountNumber: user.BankAccountNumber,
              BankName: user.BankName,
              IfscCode: user.IfscCode,
              WorkingBranchName: user.WorkingBranchName,
              Month: user.Nationality,
              BasicSalary: user.BasicSalary,
              TravelAllowance: user.TravelAllowance,
              TotalTax:user.TotalTax,
              HRA: user.HRA,
              MedicalAllowance: user.TravelAllowance,
              DearnessAllowance: user.DearnessAllowance,
              SpecialAllowance: user.SpecialAllowance,
              ConveyanceAllowance: user.ConveyanceAllowance,
              ProvidentFund: user.ProvidentFund,
              ProfessionalTax: user.ProfessionalTax,
              TaxDeductedAtSource: user.TaxDeductedAtSource,
              TotalPaid: user.TotalPaid,
        
            
            },
          });
        })
        .catch((error) => {
          res.send({
            success: false,
            message: "User is not created",
            error: error,
          });
        });
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Admin Register Routes(It is Register By Super Admin[Here Super admin is a Thunder Client])
app.post("/register", async (req, res) => {
  try {
    const user = await Admin.findOne({ FullName: req.body.FullName });
    if (user) return res.status(400).send("User already exists");
    bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
      const newUser = new Admin({
        FullName: req.body.FullName,
        password: hash,
        MobileNo: req.body.MobileNo,
        EmailId: req.body.EmailId,
        Address: req.body.Address,
        Gender: req.body.Gender,
        DateOfBirth: req.body.DateOfBirth,
        Department: req.body.Department,
        Nationality: req.body.Nationality,
      

      });
      await newUser
        .save()
        .then((user) => {
          res.send({
            success: true,
            message: "User is created Successfully",
            user: {
              id: user._id,
              FullName: user.FullName,
              MobileNo: user.MobileNo,
              EmailId: user.EmailId,
              Address: user.Address,
              Gender: user.Gender,
              DateOfBirth: user.DateOfBirth,
              Department: user.Department,
              Nationality: user.Nationality,
            
            },
          });
        })
        .catch((error) => {
          res.send({
            success: false,
            message: "User is not created",
            error: error,
          });
        });
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Admin  Login Route
app.post("/login", async (req, res) => {
  const user = await Admin.findOne({ FullName: req.body.FullName});
  if (!user) {
    return res.status(401).send({
      success: false,
      message: "User is not found",
    });
  }

  if (!bcrypt.compareSync(req.body.password, user.password)) {
    return res.status(401).send({
      success: false,
      message: "Incorrect password",
    });
  }

  const payload = {
    id: user._id,
    FullName: user.FullName,
  };

  const token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: "2d",
  });

  return res.status(200).send({
    success: true,
    message: "User is logged in successfully",
    user: user,
    token: "Bearer " + token,

  });
});




// ADD Employee Leave Route
// app.post("/addleave", async (req, res) => {
//   try {
//     req.params.id = find(req.params.id)
//     const userId = user._id;
//     const user = await Lev.findOne(userId);
//     if (user) return res.status(400).send("Leave already exists");
//     const newUser = new Lev({

//       EmpId: req.body.EmpId,
//       // LeaveStatus: req.body.LeaveStatus,
//       Reason: req.body.Reason,
//       FromDate: req.body.FromDate,
//       ToDate: req.body.ToDate,
//       EmpName: req.body.EmpName,

//     });
//     await newUser
//       .save()
//       .then((user) => {
//         res.send({
//           success: true,
//           message: "Employee leave is created Successfully",
//           user: {
//             EmpId: user.body.EmpId,
//             // LeaveStatus: user.body.LeaveStatus,
//             Reason: user.body.Reason,
//             FromDate: user.body.FromDate,
//             ToDate: user.body.ToDate,
//             EmpName: user.body.EmpName,
//           },
//         });
//       })
//       .catch((error) => {
//         res.send({
//           success: false,
//           message: "Employee Leave is not created",
//           error: error,
//         });
//       });

//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });




//Add Employee Attendence Route
app.post("/addattendance", async (req, res) => {
  try {
    const user = await Atd.findOne({ FullName: req.body.FullName });
    if (user) return res.status(400).send("Employee Attendance Already Exist");
    const newUser = new Atd({
      UserId: req.body.UserId,
      // FullName: req.body.FullName,
      date: req.body.date,
      currentTime: req.body.currentTime,

    });
    await newUser
      .save()
      .then((user) => {
        res.send({
          success: true,
          message: "Employee Attendance is created Successfully",
          user: {
            UserId: user.body.UserId,
            // FullName: user.body.FullName,
            date: user.body.date,
            currentTime: user.body.currentTime,

          },
        });
      })
      .catch((error) => {
        res.send({
          success: false,
          message: "Employee attendance is not created",
          error: error,
        });
      });

  } catch (error) {
    res.status(500).send(error.message);
  }
});

// app.get("/salary", (req, res) => {

//   if (req.body.UserId && req.body.password) {
//     Sal.find()
//       .populate("user_id")
//       .then(p => res.send(p))
//       .catch(error => console.log(error));

//   } else {
//     res.send("fail")
//   }
// })









//Employee Login Route

//Employee :ogin Route

app.post("/userlogin", async (req, res) => {
  const employee = await Emp.findOne({ UserId: req.body.UserId});
  if (!employee) {
    return res.status(401).send({
      success: false,
      message: "User is not found",
    });
  }

  if (!bcrypt.compareSync(req.body.password, employee.password)) {
    return res.status(401).send({
      success: false,
      message: "Incorrect password",
    });
  }

  const payload = {
    id: employee._id,
    FullName: employee.FullName,
  };

  const usertoken = jwt.sign(payload, process.env.SECRET_KEY_USER, {
    expiresIn: "2d",
  });

  return res.status(200).send({
    success: true,
    message: "User is logged in successfully",
    employee: employee,
    usertoken: "Bearer " + usertoken,

  });
});


// Employee profile route
app.get("/userlogin", (req, res) => {
  Emp.findOne(function (err, employee) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(employee);
    }
  });
});


// Dashboard route
app.get(
  "/dashboard",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    return res.status(200).send({
      success: true,
      user: {
        id: req.user._id,
        name: req.user.name,
      },
    });
  }
);

// Admin profile route
app.get("/login", (req, res) => {
  Admin.findOne(function (err, admin) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(admin);
    }
  });
});


//Emp Dashboard route
app.get(
  "/empdashboard",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    return res.status(200).send({
      success: true,
      user: {
        id: req.user._id,
        name: req.user.name,
      },
    });
  }
);

//Employee Report Route
app.get("/list", (req, res) => {
  Emp.find(function (err, employee) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(employee);
    }
  });
});

//Employee Attendance Report Route
app.get("/attendancesheetreport", (req, res) => {
  Atd.find(function (err, employee) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(employee);
    }
  });
});

// Employee Leave Report Route 
app.get("/leaveReport", (req, res) => {
  Lev.find(function (err, employee) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(employee);
    }
  });
});

// update user data

app.get("/update/:id", async (req, res) => {
  let result = await Emp.findOne({ _id: req.params.id });
  if (result) {
    res.send(result)
  } else {
    res.send("Error");
  }

})

app.put("/update/:id", async (req, res) => {

  let result = await Emp.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  )
  res.send(result);

})


// Delete Employee
app.delete('/delete/:id', async (req, res) => {
  let result = await Emp.deleteOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send("Not Deleted");
  }
})

//Delete Employee  Attendance 
app.delete('/deleteAttendance/:id', async (req, res) => {
  let result = await Atd.deleteOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send("Not Deleted");
  }
})

//Salary Report Route

app.get("/SalaryReport", (req, res) => {
  Sal.find(function (err, employee) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(employee);
    }
  });
});


// update Salary 

app.get("/updatesal/:id", async (req, res) => {
  let result = await Sal.findOne({ _id: req.params.id });
  if (result) {
    res.send(result)
  } else {
    res.send("Error");
  }

})


app.put("/updatesal/:id", async (req, res) => {
  let result = await Sal.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  )
  res.send(result);

})


// Delete Employee salary
app.delete('/deletesal/:id', async (req, res) => {
  let result = await Sal.deleteOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send("Not Deleted");
  }
})


// update Leave 

app.get("/updateleave/:id", async (req, res) => {
  let result = await Lev.findOne({ _id: req.params.id });
  if (result) {
    res.send(result)
  } else {
    res.send("Error");
  }

})


app.put("/updateleave/:id", async (req, res) => {

  let result = await Lev.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  )
  res.send(result);

})

// Delete Employee salary
app.delete('/deleteleave/:id', async (req, res) => {
  let result = await Lev.deleteOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send("Not Deleted");
  }
})




///////////////////////////////////////////////////////////////////////////////////////

app.post("/employee/leave/apply", async (req, res) => {
  try {
    const { id, FromDate, ToDate, Reason } = req.body;
    let employee = await Emp.findOne({ _id: id })
    if (!employee) {
      let error = new Error();
      error.message = "Invalid User"
      error.name = "Bad Request"
    }
    let new_leave = new Lev({
      emp_id: employee._id,
      EmpId: employee.UserId,
      EmpName: employee.FullName,
      EmailId: employee.EmailId,
      Reason: Reason,
      FromDate: new Date(FromDate),
      ToDate: new Date(ToDate),
    })
    await new_leave.save()
    return res.status(201).json({ error: false, msg: "leaves application successful", status: 201 })
  } catch (error) {
    return res.status(500).json({ error: true, name: error.name, msg: error.message })
  }


});



// app.get("/employee/leave/report", async(req, res) => {

//     let employee = await Lev.find({emp_id:req.emp_id.id});
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.json(employee);
//     }


// });

// app.get("/empleaveReport/:id", (req, res) => {
//   Emp.findById({_id:req.params.emp_id},function (err, employee) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.json(employee);
//     }
//   });
// });

app.get("/myleave/:id", async (req, res) => {

  try {
    const employee = await Lev.find({ emp_id: req.params.id }).populate(
      "emp_id",
    );
    res.send(employee);
    return res.status(200).json({ employee: employee.reverse() });
  } catch (err) {
    console.log(err);
  }
});
///////////////////////////////////////////////////////////////////////////////////
//resource not found
app.use((req, res, next) => {
  res.status(404).json({
    message: "route not found",
  });
});

//server error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});


module.exports = app;
