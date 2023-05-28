import React, { useRef, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./../css/Sidebar.css";
import "./../css/AddLeave.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MdLogout } from "react-icons/md";
import { RiProfileFill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { TbFileTime } from "react-icons/tb";
import { MdCoPresent } from "react-icons/md";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdTimeToLeave } from "react-icons/md";



const schema = yup.object().shape({
  EmpId: yup.string().required(),
  LeaveStatus: yup.string().required(),
  Reason: yup.string().required(),
  FromDate: yup.string().required(),
  ToDate: yup.string().required(),
  EmpName: yup.string().required(),
});



const AddLeave = () => {
  const [show, setShow] = useState(false);
  const [userDetails, setUser] = useState([]);
  const [leaveDetails,setLeaveDetails] = useState({
    EmpId:"",
     EmpName:"",
    EmailId:"",
    ToDate:"",
    FromDate:"",
    Reason:"",
   
  })
  const [date, setDate] = useState('');
  const dateInputRef = useRef(null);
  const navigate = useNavigate();

  const { id } = useParams();

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  function authHeader() {
    const token = localStorage.getItem("usertoken");
    return token;

  }
  const employee= localStorage.getItem('employee');
  const submitData = async () => {
    try {
      await axios
        .post("http://localhost:5000/employee/leave/apply", leaveDetails, {
          headers: {
            Authorization: `Bearer ${authHeader()} `,
          },
        })
        .then((response) => {
          alert("Employee leave added successfully.");
          console.log(response);
          // navigate("/leaveReport");
        });

      // eslint-disable-next-line no-undef
      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const {name,value}=e.target;
    let payload = {};
    let emp = localStorage.getItem("employee") && JSON.parse(localStorage.getItem("employee"))
    console.log("emp",emp)
    if(emp.hasOwnProperty("_id")){
      payload.id = emp._id
    }
    payload = {...payload, ...leaveDetails,[name]:value}
    console.log("onsubmit",payload)
    try {
      let response = await axios.post("http://localhost:5000/employee/leave/apply", payload, {
        headers: {
          Authorization: `Bearer ${authHeader()} `,
        },
      })
      let data = await response.data
      console.log("response",data)
      navigate("/empleavereport")
    } catch (error) {
      console.log("error",error)
    }
  }
  const handleInputChange = async (e)=>{
    const {name,value}=e.target;
    setLeaveDetails({...leaveDetails,[name]:value})
  }
  
  useEffect(() => {
    if (!localStorage.getItem("usertoken")) {
      navigate("/userlogin");
    }
  });

  const handleLogout = () => {
    localStorage.clear("");
    navigate("/userlogin");
  };

  return (
    <main className={show ? 'space-toggle' : null}>
     <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
        </div>
             
        <Link to='/' className='nav-link'>
          <MdLogout style={{color:"#4c3cc8", fontSize:"18px",marginTop:"22px"}}></MdLogout>
          <span className='nav-link-name' style={{color:"#4c3cc8", fontSize:"18px",marginTop:"20px"}} onClick={handleLogout}>Logout(Employee)</span>
            {/* <span className='nav-link-name' style={{color:"#4c3cc8", fontSize:"18px",marginTop:"20px"}} onClick={handleLogout}>Logout({JSON.parse(employee).FullName})</span> */}
          </Link>


      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav' style={{backgroundColor: "#4c3cc8"}}>
        
          <div>
          <Link to='/' className='nav-logo'>
              {/* <i className={`fas fa-home-alt nav-logo-icon`}></i>
              <span className='nav-logo-name'>Logo</span> */}
              <img class="logo" src="/logo.png" alt="" style={{height:"70px"}}/>
            </Link>

            <div className='nav-list'>
              <Link to='/EmpDashboard' className='nav-link active'>
              <MdOutlineSpaceDashboard style={{fontSize: "1.3rem"}}></MdOutlineSpaceDashboard>
                <span className='nav-link-name'>My Dashboard</span>
              </Link>
              <Link to='/EmpSalaryReport' className='nav-link'>
                <GiReceiveMoney style={{fontSize: "1.3rem"}}></GiReceiveMoney>
                <span className='nav-link-name'>My Salary</span>
              </Link>
              <Link to='/AddLeave' className='nav-link'>
                <TbFileTime style={{fontSize: "1.3rem"}}></TbFileTime>
                <span className='nav-link-name'>Apply Leave</span>
              </Link>
              <Link to='/EmpLeaveReport' className='nav-link'>
                <MdTimeToLeave style={{fontSize: "1.3rem"}}></MdTimeToLeave>
                <span className='nav-link-name'>My Leave</span>
              </Link>
              <Link to='/UserProfile' className='nav-link'>
              <RiProfileFill style={{fontSize: "1.3rem"}}></RiProfileFill>
              <span className='nav-link-name'>My Profile</span>
            </Link>
            <Link to='/Attendance' className='nav-link'>
            <MdCoPresent style={{fontSize: "1.3rem"}}></MdCoPresent>
            <span className='nav-link-name'>Attendance</span>
          </Link>
            </div>
          </div>

        </nav>
      </aside>
      <div>
        {/* <Formik
          validationSchema={schema}
          // onSubmit={console.log}
          onSubmit={(e)=>submitData(e)}
          initialValues={{
            EmpId: "",
            // LeaveStatus: "Pending",
            Reason: "",
            FromDate: "",
            ToDate: "",
            // EmpName: "",
          }}
        > }
          {({
            handleSubmit,
            handleChange,
            leaveDetails,
            errors,
          }) => (
            */
            <Form noValidate method="POST" onSubmit={(e)=>handleSubmit(e)}>
              <div className=" gradient-custom" style={{ paddingTop: "10%" }}>
                <div className="row justify-content-center align-items-center h-100 w-100">
                  <div className="col-12 col-lg-9 col-xl-8">
                    <div className="card shadow-2-strong card-registration shadow px-4" >
                      <div className="card-body p-4 p-md-5">
                        <Row>
                          <Col xs={12} md={12}>
                            <center><h2 className='fw-bold p-4' style={{ color: "#f10086", fontSize: "30px" }}>Add Leave</h2></center>
                          </Col>
                        </Row>

                        <Row className="mb-1">
                          {/* <Form.Group as={Col} md="4" controlId="validationFormik01">
                            <Form.Label>Emp ID</Form.Label>
                            <Form.Control className='label'
                              type="text"
                              placeholder="Emp Id"
                              name="EmpId"
                              value={leaveDetails.EmpId}
                              onChange={handleInputChange}
                              // isInvalid={!!errors.EmpId}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.EmpId}
                            </Form.Control.Feedback>
                          </Form.Group> */}

                          {/* <Form.Group as={Col} md="4" controlId="validationFormik03">
          <Form.Label>Leave Status</Form.Label>
            <Form.Control className='label'
              type="text"
              placeholder="Leave Status"
              name="LeaveStatus"
              value={values.LeaveStatus}
              onChange={Input}
              isInvalid={!!errors.LeaveStatus}
              disabled
            />
            <Form.Control.Feedback type="invalid">
              {errors.LeaveStatus}
            </Form.Control.Feedback>
          </Form.Group>
         */}
                          <Form.Group as={Col} md="4" controlId="validationFormik05">
                            <center><Form.Label>Reason</Form.Label></center>
                            <Form.Control className='label'
                              type="text"
                              placeholder="Reason"
                              name="Reason"
                              value={leaveDetails.Reason}
                              onChange={handleInputChange}
                              // isInvalid={!!errors.Reason}
                            />
                            <Form.Control.Feedback type="invalid">
                              {/* {errors.Reason} */}
                            </Form.Control.Feedback>
                          </Form.Group>

                          {/* <Form.Group as={Col} md="4" controlId="validationFormik03">
                            <Form.Label>Email Id</Form.Label>
                            <Form.Control className='label'
                              type="text"
                              placeholder="Email Id"
                              name="EmailId"
                              value={leaveDetails.EmailId}
                              onChange={handleInputChange}
                             
                              ref={dateInputRef}
                            />
                            <Form.Control.Feedback type="invalid">
                              
                            </Form.Control.Feedback>
                          </Form.Group> */}
                        
                          <Form.Group as={Col} md="4" controlId="validationFormik05">
                            <center><Form.Label>From Date</Form.Label></center>
                            <Form.Control className='label'
                              type="date"
                              placeholder="From Date"
                              name="FromDate"
                              value={leaveDetails.FromDate}
                              onChange={handleInputChange}
                              // isInvalid={!!errors.FromDate}
                              ref={dateInputRef}
                            />
                            <Form.Control.Feedback type="invalid">
                              {/* {errors.FromDate} */}
                            </Form.Control.Feedback>
                          </Form.Group>

                          <Form.Group as={Col} md="4" controlId="validationFormik03">
                            <center><Form.Label>To Date</Form.Label></center>
                            <Form.Control className='label'
                              type="date"
                              placeholder="To Date"
                              name="ToDate"
                              value={leaveDetails.ToDate}
                              onChange={handleInputChange}
                              // isInvalid={!!errors.ToDate}
                              ref={dateInputRef}
                            />
                            <Form.Control.Feedback type="invalid">
                              {/* {errors.ToDate} */}
                            </Form.Control.Feedback>
                          </Form.Group>

                          {/* <Form.Group as={Col} md="4" controlId="validationFormik03">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control className='label'
                              type="text"
                              placeholder="Full Name"
                              name="EmpName"
                              value={leaveDetails.EmpName}
                              onChange={handleInputChange}
                             
                              ref={dateInputRef}
                            />
                            <Form.Control.Feedback type="invalid">
                             
                            </Form.Control.Feedback>
                          </Form.Group> */}
                          
                        </Row>
                      <br></br>
                        <Row className="mb-1">
                          <Col xs={12} md={12}>
                            <center><Button className='shadow px-4 p-2' type="submit" style={{ backgroundColor: "#4c3cc8" }} >Submit</Button></center>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          /*{ )}
        </Formik> */}
      </div>


    </main>
  );
};



export default AddLeave;