import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import React from "react";
import "./../css/Sidebar.css";

// import "./../css/AddEmployee.css";
import Button from "react-bootstrap/Button";

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdLogout } from "react-icons/md";
import Table from 'react-bootstrap/Table';
import { RiProfileFill } from "react-icons/ri";
import { TbReport } from "react-icons/tb";
import { TbReportAnalytics } from "react-icons/tb";
import { TbReportMoney } from "react-icons/tb";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsPersonAdd } from "react-icons/bs";
import { TbFileReport } from "react-icons/tb";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";
const AdminProfile = () => {
    const token= localStorage.getItem('token');
    const auth= localStorage.getItem('payload');

    const [show, setShow] = useState(false);
    const [user, setUser] = useState();
    const[UserId,idchange]=useState("");
    const[FullName,namechange]=useState("");
    const[EmailId,emailchange]=useState("");
    const [password, setPassword] = useState("");
    const[MobileNo,phonechange]=useState("");
    const[Address,addresschange]=useState("");
    const[DateOfJoining,joiningchange]=useState("");
    const[Gender,genderchange]=useState("");
    const[DateOfBirth,birthchange]=useState("");
    const[Department,deptchange]=useState("");
    const[Nationality,nationalitychange]=useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    let date= new Date().toLocaleDateString();
    let time= new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime]=useState(time);
    const UpdateTime =()=>{
        time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    };
    setInterval(UpdateTime,1000);
     const [timeData, setTimeData] = useState();
     const [dateData, setDateData] = useState();
    // const ref = useRef(null);


  useEffect(()=>{
    getUserDetails();
  },[])
  const getUserDetails= async()=>{

    let result = await fetch("http://localhost:5000/login", {
        method: "GET",
        body: JSON.stringify({ FullName, password }),
        headers: {
            "Content-Type": 'application/json'
        }
    });
    result = await result.json()
    console.warn(result);
   if(result.FullName){
    localStorage.setItem("user",JSON.stringify(result))
    navigate('/dashboard')
   }else{
    alert("Please Enter correct details");
   }
}
  const handleLogout = () => {
    localStorage.clear("");
    navigate("/login");
  };
  

//   const handlesubmit= async()=>{
//    console.warn(UserId,FullName,EmailId,MobileNo,Address,DateOfJoining,Gender,DateOfBirth,Department,Nationality);
//    let result =  fetch(`http://localhost:5000/adminprofile/${id}`,{
//        method:'PUT',
//        body: JSON.stringify({UserId,FullName,EmailId,MobileNo,Address,DateOfJoining,Gender,DateOfBirth,Department,Nationality}),
//        headers:{
//         'Content-Type':'Application/json'
//        }
     
// });
// result = await result.json();
// if(result){
//     navigate('/dashboard');
// }

// }


    return ( 
        <main>
        <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
         
        </div>
        {user && 
        user.map((data,index)=> (
        <h5 className='sig'>{data.name}</h5>
        ))}

        <Link to='/' className='nav-link'>
          <MdLogout style={{color:"#4c3cc8", fontSize:"18px",marginTop:"22px"}}></MdLogout>
          <span className='nav-link-name' style={{color:"#4c3cc8", fontSize:"18px",marginTop:"20px"}} onClick={handleLogout}>Logout(Admin)</span>
            {/* <span className='nav-link-name' style={{color:"#4c3cc8", fontSize:"18px",marginTop:"20px"}} onClick={handleLogout}>Logout({JSON.parse(auth).FullName})</span> */}
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
    <div>
 
<div style={{paddingTop:"4%"}}>
<div className="row justify-content-center align-items-center">
<div className="col-12 col-lg-10 col-xl-9">

 <Container>
 
     <Row xs={10} sm={12}>

        <Col>
        <Card className="card shadow px-5" style={{ width: '30rem', height:"100%",  border: " 3px solid #8B008B", borderRadius: "15px" }}>
      <Card.Body >
      <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#9d789b" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                className="rounded-circle img-fluid"
              />
              </div>
              </MDBCard>
  <center><Card.Title style={{color: "#8B008B", fontSize: "28px" }}>My Profile</Card.Title></center><br></br>
  <center>
        <Table>
        <tbody>
        {/* <tr style={{backgroundColor: "White", borderBlockEnd: "1px solid #8B008B", fontSize: "15px", color: "black"}}>
          <td style={{width: "50%"}}>User Id</td>
          <td style={{width: "50%"}}>:</td>
          <td style={{width: "50%"}}>{JSON.parse(auth).UserId}</td>
        </tr> */}
        <tr style={{backgroundColor: "White", borderBlockEnd: "1px solid #8B008B", fontSize: "15px", color: "black"}}>
          <td style={{width: "50%"}}>Name</td>
          <td style={{width: "50%"}}>:</td>
          <td style={{width: "50%"}}>{JSON.parse(auth).FullName}</td>
        </tr>
        <tr style={{backgroundColor: "White", borderBlockEnd: "1px solid #8B008B", fontSize: "15px", color: "black"}}>
          <td style={{width: "50%"}}>MobileNo</td>
          <td style={{width: "50%"}}>:</td>
          <td style={{width: "50%"}}>{JSON.parse(auth).MobileNo}</td>
        </tr>
        <tr style={{backgroundColor: "White", borderBlockEnd: "1px solid #8B008B", fontSize: "15px", color: "black"}}>
          <td style={{width: "50%"}}>Email-id</td>
          <td style={{width: "50%"}}>:</td>
          <td style={{width: "50%"}}>{JSON.parse(auth).EmailId}</td>
        </tr>
        <tr style={{backgroundColor: "White", borderBlockEnd: "1px solid #8B008B", fontSize: "15px", color: "black"}}>
          <td style={{width: "50%"}}>Address</td>
          <td style={{width: "50%"}}>:</td>
          <td style={{width: "50%"}}>{JSON.parse(auth).Address}</td>
        </tr>
        </tbody>
        </Table>
        </center>
        <center><Button  style={{backgroundColor: "#4c3cc8", border: "none"}}>Add New Employee</Button></center>
      </Card.Body>
    </Card>
        </Col>

        <Col>
          <Container>
          <Row xs={10} sm={12}>
        <Col>
        <Card className="card shadow px-5" style={{ width: '30rem', height:"100%",  border: " 3px solid #8B008B", borderRadius: "15px"}}>
      <Card.Body>
      <center><Card.Title style={{color: "#8B008B", fontSize: "28px" }}>Personal Details</Card.Title></center><br></br>
      <center>
        <Table>
        <tbody>
        <tr style={{backgroundColor: "White", borderBlockEnd: "1px solid #8B008B", fontSize: "15px", color: "black"}}>
          <td style={{width: "50%"}}>Gender</td>
          <td style={{width: "50%"}}>:</td>
          <td style={{width: "50%"}}>{JSON.parse(auth).Gender}</td>
        </tr>
        <tr style={{backgroundColor: "White", borderBlockEnd: "1px solid #8B008B", fontSize: "15px", color: "black"}}>
          <td style={{width: "50%"}}>DateOfBirth</td>
          <td style={{width: "50%"}}>:</td>
          <td style={{width: "50%"}}>{JSON.parse(auth).DateOfBirth}</td>
        </tr>
        <tr style={{backgroundColor: "White", borderBlockEnd: "1px solid #8B008B", fontSize: "15px", color: "black"}}>
          <td style={{width: "50%"}}>Department</td>
          <td style={{width: "50%"}}>:</td>
          <td style={{width: "50%"}}>{JSON.parse(auth).Department}</td>
        </tr>
        <tr style={{backgroundColor: "White", borderBlockEnd: "1px solid #8B008B", fontSize: "15px", color: "black"}}>
          <td style={{width: "50%"}}>Nationality</td>
          <td style={{width: "50%"}}>:</td>
          <td style={{width: "50%"}}>{JSON.parse(auth).Nationality}</td>
        </tr>
        </tbody>
        </Table>
        </center><br></br>
        <center><Button  style={{backgroundColor: "#4c3cc8", border: "none"}}>Check My Dashboard</Button></center>
        </Card.Body>
        </Card>
        </Col>
       
      </Row>

      <br></br>

      <Row>
        <Col>
        <Card className="card shadow px-5" style={{ width: '30rem', height:"100%",  border: " 3px solid #8B008B", borderRadius: "15px" }}>
      <Card.Body >
      <center><Card.Title  style={{color: "#8B008B", fontSize: "28px" }}>Today's Date and Time</Card.Title></center><br></br>
        <center>
        <Card.Subtitle className="mb-2 text-muted">
          Current Date : {date}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          Current Time :  {currentTime} 
        </Card.Subtitle>

        {/* <Table>
        <tbody style={{padding : "20px"}}>
        <tr style={{backgroundColor: "White", borderBlockEnd: "1px solid white", fontSize: "15px", color: "black"}}>
          <td >Current Date</td>
          <td >:</td>
          <td >{date}</td>
        </tr>
        <tr style={{backgroundColor: "White", borderBlockEnd: "1px solid white", fontSize: "15px", color: "black"}}>
          <td >Current Time</td>
          <td >:</td>
          <td >{currentTime}</td>
        </tr>
        </tbody>
        </Table> */}
        </center>
        </Card.Body>
        </Card>
        </Col>
      </Row>
          </Container>
        </Col>
      </Row>
     </Container>
                   
 
 </div>
 </div>
 </div>
           

    
        
    </div>
    </main>
     );
}
 
export default AdminProfile;





// <div class="card p-4" style={{width: "400px",backgroundColor: "#efefef",border: "none",cursor: "pointer",transition: "all 0.5s"}}>
// <div class=" image d-flex flex-column justify-content-center align-items-center">
// <div className="card-title">
//                       <h2 className='fw-bold p-4' style={{color:"#f10086", fontSize:"20px"}}>Profile Of {JSON.parse(auth).FullName}</h2>
//                   </div>
//       <center><div className="row">

//                              <div className="col-lg-6">
//                               <div className="form-group">
//                                   <Card.Title> {JSON.parse(auth).UserId}</Card.Title>
//                               </div>
                              
//                           </div>
//                           <div className="col-lg-6">
//                               <div className="form-group">
//                                   <label> {JSON.parse(auth).FullName}</label>
//                               </div>
//                           </div>

//                           <div className="col-lg-6">
//                               <div className="form-group">
//                                   <label> {JSON.parse(auth).EmailId}</label>
//                               </div>
//                           </div>

//                           <div className="col-lg-6">
//                               <div className="form-group">
//                                   <label> {JSON.parse(auth).MobileNo}</label>
//                               </div>
//                           </div>

                          
//                           <div className="col-lg-6">
//                               <div className="form-group">
//                                   <label> {JSON.parse(auth).Address}</label>
//                               </div>
//                           </div>
//                           <div className="col-lg-6">
//                               <div className="form-group">
//                                   <label> {JSON.parse(auth).DateOfJoining}</label>
//                               </div>
//                           </div>

//                           <div className="col-lg-6">
//                               <div className="form-group">
//                                   <label> {JSON.parse(auth).Gender}</label>
//                               </div>
//                           </div>

//                           <div className="col-lg-6">
//                               <div className="form-group">
//                                   <label> {JSON.parse(auth).DateOfBirth}</label>
//                               </div>
//                           </div>
                          
//                           <div className="col-lg-6">
//                               <div className="form-group">
//                                   <label> {JSON.parse(auth).Department}</label>
//                               </div>
//                           </div>

//                           <div className="col-lg-6">
//                               <div className="form-group">
//                                   <label> {JSON.parse(auth).Nationality}</label>
//                               </div>
//                           </div>
//                           </div></center>
//                           <div class=" d-flex mt-2">
//              <button class="btn1 btn-dark" style={{height: "40px" ,width: "150px" ,border: "none" ,backgroundColor: "#f10086" ,color: "whitesmoke" ,fontSize: "15px"}}>Edit Profile</button>
//               </div>
              
//                   <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
//                    <span><i class="fa fa-twitter"></i></span>
//                     <span><i class="fa fa-facebook-f"></i></span>
//                    <span><i class="fa fa-instagram"></i></span>
//                     <span><i class="fa fa-linkedin"></i></span>
//                    </div>
//                     </div>
//                        </div>