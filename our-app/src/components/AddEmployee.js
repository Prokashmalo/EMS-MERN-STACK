import React, { useRef, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./../css/Sidebar.css";
import "./../css/AddEmployee.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import * as yup from "yup";
import { Formik } from "formik";
import { useNavigate} from "react-router-dom";
import { ToastContainer,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { MdLogout } from "react-icons/md";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import { RiProfileFill } from "react-icons/ri";
import { TbReport } from "react-icons/tb";
import { TbReportAnalytics } from "react-icons/tb";
import { TbReportMoney } from "react-icons/tb";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsPersonAdd } from "react-icons/bs";
import { TbFileReport } from "react-icons/tb";


const mobileRegExp = /^[0]?[6789]\d{9}$/;
const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegExp= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
const schema = yup.object().shape({
    UserId: yup.string().required(),
    FullName: yup.string().required(),
    BasicSalary: yup.string().required(),
    HRA: yup.string().required(),
    TravelAllowance: yup.string().required(),
    DearnessAllowance: yup.string().required(),
    ConveyanceAllowance: yup.string().required(),
    ProvidentFund: yup.string().required(),
    TotalTax: yup.string().required(),
    Month: yup.string().required(),
    TotalPaid: yup.string().required(),
  Address: yup.string().required(),
  DateOfJoining: yup.string().required(),
  Gender: yup.string().required(),
  DateOfBirth: yup.string().required(),
  Department: yup.string().required(),
  Nationality: yup.string().required(),
  password: yup
  .string()
  .required()
  .matches(passwordRegExp, "Password is not valid. Please give Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"),
  confirmpassword: yup.string().label('confirm password').required().oneOf([yup.ref('password'), null], 'Passwords must match'),
  MobileNo: yup
    .string()
    .required()
    .matches(mobileRegExp, "Mobile number is not valid"),
  EmailId: yup
    .string()
    .required()
    .matches(emailRegExp, "Email Id is not valid"),
    // terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
});



const AddEmployee = () => {
    const [show, setShow] = useState(false);
    const [userDetails, setUser] = useState([]);
    const [date, setDate] = useState('');
    const dateInputRef = useRef(null);
const navigate = useNavigate();
const user= localStorage.getItem('payload');
const handleChange = (e) => {
      setDate(e.target.value);
    };
  
//     const submitForm =async ()=>{
   
//       let result = await fetch('',{
//           method: 'post',
//           body:JSON.stringify(),
//           headers:{
//               'Content-Type':'application/json',
//               Authorization: `Bearer ${authHeader()} `,
//           },
//       })
//       result = await result.json()
//       console.log(result);
//  }
function authHeader() {
  const token = localStorage.getItem("token");
  return token;
}

const submitData = async (values) => {
  //const  bankdata={bankName, accountNumber, ifscCode, branch,shortCode,swiftCode,address,remarks,};
  try {
    await axios
      .post("http://localhost:5000/addemployee", values, {
        headers: {
          Authorization: `Bearer ${authHeader()} `,
        },
      })
      .then((response) => {
        alert("Employee added successfully.");
        // toast("Employee added successfully.",{   position:"top-right"})
        console.log(response);
        navigate("/employeeReport");
      });

    // if (!response.ok) {
    //   throw new Error(`Error! status: ${response.status}`);
    // }

    // eslint-disable-next-line no-undef
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
 
  }
};

useEffect(() => {
  if (!localStorage.getItem("token")) {
 navigate("/login");
  }
});


// const collectData =async ()=>{
//   console.log(FullName,EmailId,MobileNo,Address,Gender,DateOfBirth,Department,Nationality);
//   let result = await fetch('http://localhost:5000/addemployee',{
//       method: 'post',
//       body:JSON.stringify({FullName,EmailId,MobileNo,Address,Gender,DateOfBirth,Department,Nationality}),
//       headers:{
//           'Content-Type':'application/json'
          
//       },
//   })
//   result = await result.json()
//   console.log(result);
//   localStorage.setItem("user",JSON.stringify(result));
//   Navigate('/EmployeeReport')
// }


const handleLogout = () => {
  localStorage.clear();
  navigate("/login");
};


    return (
      <main className={show ? 'space-toggle' : null}>
        <header className={`header ${show ? 'space-toggle' : null}`}>
          <div className='header-toggle' onClick={() => setShow(!show)}>
            <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
          </div>
                       
<Link to='/' className='nav-link'>
          <MdLogout style={{color:"#4c3cc8", fontSize:"18px",marginTop:"22px"}}></MdLogout>
          <span className='nav-link-name' style={{color:"#4c3cc8", fontSize:"18px",marginTop:"20px"}} onClick={handleLogout}>Logout(Admin)</span>
            {/* <span className='nav-link-name' style={{color:"#4c3cc8", fontSize:"18px",marginTop:"20px"}} onClick={handleLogout}>Logout({JSON.parse(user).FullName})</span> */}
          </Link>

        </header>
  
        <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav' style={{backgroundColor: "#4c3cc8"}}>
        
          <div>
            <Link to='/' className='nav-logo'>
              {/* <i className={`fas fa-home-alt nav-logo-icon`}></i> */}
              <img class="logo" src="/logo.png" alt="" style={{height:"70px"}}/>
            </Link>

            <div className='nav-list'>
            <Link to='/dashboard' className='nav-link active'>
                {/* <i className='fas fa-tachometer-alt nav-link-icon'></i> */}
                <MdOutlineSpaceDashboard style={{fontSize: "1.3rem"}}></MdOutlineSpaceDashboard>
                <span className='nav-link-name'>Dashboard</span>
              </Link>

              <Link to='/EmployeeReport' className='nav-link'>
                {/* <i className='fas fa-hotel nav-link-icon'></i> */}
                <TbFileReport style={{fontSize: "1.3rem"}}></TbFileReport>
                <span className='nav-link-name'>Employee Report</span>
              </Link>
         
              <Link to='/AddEmployee' className='nav-link'>
                {/* <i className='fas fa-image nav-link-icon'></i> */}
                <BsPersonAdd style={{fontSize: "1.3rem"}}></BsPersonAdd>
                <span className='nav-link-name'>Add Employee</span>
              </Link>
              <Link to='/SalaryReport' className='nav-link'>
                {/* <i className='fas fa-dollar-sign nav-link-icon'></i> */}
                <TbReportMoney style={{fontSize: "1.3rem"}}></TbReportMoney>
                <span className='nav-link-name'>Salary Report</span>
              </Link>
            <Link to='/LeaveReport' className='nav-link'>
            {/* <i className='fas fa-dollar-sign nav-link-icon'></i> */}
            <TbReportAnalytics style={{fontSize: "1.3rem"}}></TbReportAnalytics>
            <span className='nav-link-name'>Leave Report</span>
          </Link>
          {/* <Link to='/AddLeave' className='nav-link'>
          <i className='fas fa-dollar-sign nav-link-icon'></i>
          <span className='nav-link-name'>Add Leave</span>
        </Link> */}
        <Link to='/AttendanceSheetReport' className='nav-link'>
          {/* <i className='fas fa-dollar-sign nav-link-icon'></i> */}
          <TbReport style={{fontSize: "1.3rem"}}></TbReport>
          <span className='nav-link-name'>Attendance Report</span>
        </Link>
        <Link to='/AdminProfile' className='nav-link'>
          {/* <i className='fas fa-dollar-sign nav-link-icon'></i> */}
          <RiProfileFill style={{fontSize: "1.3rem"}}></RiProfileFill>
          <span className='nav-link-name'>My Profile</span>
        </Link>
          
          {/* <Link to='/' className='nav-link'>
            <i className='fas fa-sign-out nav-link-icon'></i>
            <span className='nav-link-name' onClick={handleLogout}>Logout({JSON.parse(auth).name})</span>
          </Link> */}
            </div>
          </div>
        </nav>
      </aside>
      <br></br>
  
      <div>
   
      <Formik
      validationSchema={schema}
      // onSubmit={console.log}
      onSubmit={submitData}
      initialValues={{
        UserId: "",
        FullName: "",
        password:"",
        MobileNo: "",
        BasicSalary: "",
        HRA: "",
        TravelAllowance: "",
        DearnessAllowance: "",
        ConveyanceAllowance: "",
        ProvidentFund: "",
        TotalTax: "",
        Month: "",
        TotalPaid: "",
        EmailId: "",
        Address: "",
        DateOfJoining: "",
        Gender: "",
        DateOfBirth: "",
        Department: "",
        Nationality: "",
        // terms: false,
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
        <Container>
        <Row>
          <Col xs={12} md={6}>
          <Card className="card shadow px-5" style={{   border: " 3px solid #8B008B", borderRadius: "15px" }}>
      <Card.Body>
    
        <Row>
        <Col xs={12} md={12}>
        <center><h2 className='fw-bold p-4' style={{color:"#f10086", fontSize:"30px"}}>Add Employee</h2></center>
        </Col>
        </Row>
          <Row className="mb-1">
          <Form.Group as={Col} md="6" controlId="validationFormik01">
              <Form.Label>User Id</Form.Label>
              <Form.Control
                type="text"
                placeholder="UserId"
                name="UserId"
                value={values.UserId}
                onChange={handleChange}
                isInvalid={!!errors.UserId}
              />

              <Form.Control.Feedback type="invalid">
                {errors.UserId}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationFormik01">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="FullName"
                name="FullName"
                value={values.FullName}
                onChange={handleChange}
                isInvalid={!!errors.FullName}
              />

              <Form.Control.Feedback type="invalid">
                {errors.FullName}
              </Form.Control.Feedback>
            </Form.Group>
            </Row>


            <Row className="mb-1">
          <Form.Group as={Col} md="6" controlId="validationFormik01">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>


            <Form.Group as={Col} md="6" controlId="validationFormik01">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Comfirm Password"
                name="confirmpassword"
                value={values.confirmpassword}
                onChange={handleChange}
                isInvalid={!!errors.confirmpassword}
              />
              <Form.Control.Feedback type="invalid">
                {errors.confirmpassword}
              </Form.Control.Feedback>
            </Form.Group>
            </Row>


             <Row className="mb-1">
            <Form.Group as={Col} md="6" controlId="validationFormik01">
              <Form.Label>Mobile No</Form.Label>
              <Form.Control
                type="number"
                placeholder="MobileNo"
                name="MobileNo"
                value={values.MobileNo}
                onChange={handleChange}
                isInvalid={!!errors.MobileNo}
              />

              <Form.Control.Feedback type="invalid">
                {errors.MobileNo}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>Email Id</Form.Label>
              <Form.Control
                type="email"
                placeholder="EmailId"
                name="EmailId"
                value={values.EmailId}
                onChange={handleChange}
                isInvalid={!!errors.EmailId}
              />

              <Form.Control.Feedback type="invalid">
                {errors.EmailId}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          
          <Row className="mb-1">
            
            <Form.Group as={Col} md="6" controlId="validationFormik04">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                name="Address"
                value={values.Address}
                onChange={handleChange}
                isInvalid={!!errors.Address}
              />
              <Form.Control.Feedback type="invalid">
                {errors.Address}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik06">
              <Form.Label>Date-Of-Joining</Form.Label>
              <Form.Control
                type="date"
                placeholder="DateOfJoining"
                name="DateOfJoining"
                value={values.DateOfJoining}
                onChange={handleChange}
                isInvalid={!!errors.DateOfJoining}
              />

              <Form.Control.Feedback type="invalid">
                {errors.DateOfJoining}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-1">
{/*           
            <Form.Group as={Col} md="6" controlId="validationFormik05">
              <Form.Label>Gender</Form.Label>
              <Form.Select aria-label="Default select example" className='label' >
            <Form.Control className='label'
              type="text"
              placeholder="Gender"
              name="Gender"
              value={values.Gender}
              onChange={handleChange}
              isInvalid={!!errors.Gender}
            />
            
            <option value="1" >Male</option>
            <option value="2">Female</option>
            <option value="3">Others</option> 

            </Form.Select>            
             <Form.Control.Feedback type="invalid">
                {errors.Gender}
              </Form.Control.Feedback>
            </Form.Group>
 */}


            <Form.Group as={Col} md="6" controlId="validationFormik05">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                type="text"
                placeholder="Gender"
                name="Gender"
                value={values.Gender}
                onChange={handleChange}
                isInvalid={!!errors.Gender}
              />

              <Form.Control.Feedback type="invalid">
                {errors.Gender}
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group as={Col} md="6" controlId="validationFormik06">
              <Form.Label>Date-Of-Birth</Form.Label>
              <Form.Control
                type="date"
                placeholder="DateOfBirth"
                name="DateOfBirth"
                value={values.DateOfBirth}
                onChange={handleChange}
                isInvalid={!!errors.DateOfBirth}
              />

              <Form.Control.Feedback type="invalid">
                {errors.DateOfBirth}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik07">
              <Form.Label>Department</Form.Label>
              <Form.Control
                type="text"
                placeholder="Department"
                name="Department"
                value={values.Department}
                onChange={handleChange}
                isInvalid={!!errors.Department}
              />

              <Form.Control.Feedback type="invalid">
                {errors.Department}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik08">
              <Form.Label>Nationality</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nationality"
                name="Nationality"
                value={values.Nationality}
                onChange={handleChange}
                isInvalid={!!errors.Nationality}
              />

              <Form.Control.Feedback type="invalid">
                {errors.Nationality}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          
      </Card.Body>
    </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card className="card shadow px-5" style={{   border: " 3px solid #8B008B", borderRadius: "15px" }}>
              <Card.Body>
          
        <Row>
        <Col xs={12} md={12}>
        <center><h2 className='fw-bold p-4' style={{color:"#f10086", fontSize:"30px"}}>Add Salary</h2></center>
        </Col>
        </Row>
          <Row className="mb-1">
            <Form.Group as={Col} md="6" controlId="validationFormik01">
              <Form.Label>BasicSalary</Form.Label>
              <Form.Control
                type="number"
                placeholder="BasicSalary"
                name="BasicSalary"
                value={values.BasicSalary}
                onChange={handleChange}
                isInvalid={!!errors.BasicSalary}
              />

              <Form.Control.Feedback type="invalid">
                {errors.BasicSalary}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik01">
              <Form.Label>HRA</Form.Label>
              <Form.Control
                type="number"
                placeholder="HRA"
                name="HRA"
                value={values.HRA}
                onChange={handleChange}
                isInvalid={!!errors.HRA}
              />

              <Form.Control.Feedback type="invalid">
                {errors.HRA}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-1">
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>Travel Allowance</Form.Label>
              <Form.Control
                type="number"
                placeholder="TravelAllowance"
                name="TravelAllowance"
                value={values.TravelAllowance}
                onChange={handleChange}
                isInvalid={!!errors.TravelAllowance}
              />

              <Form.Control.Feedback type="invalid">
                {errors.TravelAllowance}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik04">
              <Form.Label>Dearness Allowance</Form.Label>
              <Form.Control
                type="number"
                placeholder="DearnessAllowance"
                name="DearnessAllowance"
                value={values.DearnessAllowance}
                onChange={handleChange}
                isInvalid={!!errors.DearnessAllowance}
              />
              <Form.Control.Feedback type="invalid">
                {errors.DearnessAllowance}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-1">
            <Form.Group as={Col} md="6" controlId="validationFormik05">
              <Form.Label>Conveyance Allowance</Form.Label>
              <Form.Control
                type="number"
                placeholder="ConveyanceAllowance"
                name="ConveyanceAllowance"
                value={values.ConveyanceAllowance}
                onChange={handleChange}
                isInvalid={!!errors.ConveyanceAllowance}
              />

              <Form.Control.Feedback type="invalid">
                {errors.ConveyanceAllowance}
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group as={Col} md="6" controlId="validationFormik06">
              <Form.Label>Provident Fund</Form.Label>
              <Form.Control
                type="number"
                placeholder="ProvidentFund"
                name="ProvidentFund"
                value={values.ProvidentFund}
                onChange={handleChange}
                isInvalid={!!errors.ProvidentFund}
              />

              <Form.Control.Feedback type="invalid">
                {errors.ProvidentFund}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik07">
              <Form.Label>Total Tax</Form.Label>
              <Form.Control
                type="number"
                placeholder="TotalTax"
                name="TotalTax"
                value={values.TotalTax}
                onChange={handleChange}
                isInvalid={!!errors.TotalTax}
              />

              <Form.Control.Feedback type="invalid">
                {errors.TotalTax}
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group as={Col} md="6" controlId="validationFormik09">
              <Form.Label>Total Paid</Form.Label>
              <Form.Control
                type="number"
                placeholder="TotalPaid"
                name="TotalPaid"
                value={values.TotalPaid}
                onChange={handleChange}
                isInvalid={!!errors.TotalPaid}
              />

              <Form.Control.Feedback type="invalid">
                {errors.TotalPaid}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik08">
              <Form.Label>Month</Form.Label>
              <Form.Control
                type="text"
                placeholder="Month"
                name="Month"
                value={values.Month}
                onChange={handleChange}
                isInvalid={!!errors.Month}
              />

              <Form.Control.Feedback type="invalid">
                {errors.Month}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          {/* <Form.Group className="mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group> */}
       
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Container>
   <br></br>
  <Container>
  <Row className="mb-1">
        <Col xs={12} md={12}>
        <center><Button className='shadow px-4 p-2' type="submit" style={{ backgroundColor: "#4c3cc8"}}>Submit</Button></center>
        </Col>
        </Row>
  </Container>
          
        </Form>
        
        
      )}
    </Formik>
    </div>
    

      <ToastContainer 
     

      />
    </main>
    );
};
      


export default AddEmployee;