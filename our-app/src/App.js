import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import EmployeeReport from './components/EmployeeReport';
import AddEmployee from './components/AddEmployee';
import SalaryReport from './components/SalaryReport';
import LeaveReport from './components/LeaveReport';
import AddLeave from './components/AddLeave';
import EditEmployee from './components/EditEmployee';
import EditSalary from './components/EditSalary';
import EditLeave from './components/EditLeave';
import Signup from './components/Signup';
import Team from './components/Team';
import Attendance from './components/Attendance';
import EmpDashboard from './components/EmpDashboard';
import EmpSalaryReport from './components/EmpSalaryReport';
import UserLogin from './components/UserLogin';
import AdminProfile from './components/AdminProfile';
import UserProfile from './components/UserProfile';
import AttendanceSheetReport from './components/AttendanceSheetReport';
import EmpLeaveReport from './components/EmpLeaveReport';
function App() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:8000/message")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // }, []);

  return (
    <div className="App">
    
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route exact path='/About' element={<About></About>}></Route>
        <Route exact path='/Contact' element={<Contact></Contact>}></Route>
        <Route exact path='/Login' element={<Login></Login>}></Route>
        <Route exact path='/Dashboard' element={<Dashboard/>}></Route>
        <Route exact path='/EmployeeReport' element={<EmployeeReport/>}></Route>
        <Route exact path='/AddEmployee' element={<AddEmployee/>}></Route>
        <Route exact path='/SalaryReport' element={<SalaryReport/>}></Route>

        <Route exact path='/LeaveReport' element={<LeaveReport/>}></Route>
        <Route exact path='/AddLeave' element={<AddLeave/>}></Route>
        <Route exact path='/Signup' element={<Signup/>}></Route>
     
        <Route exact path='/Team' element={<Team></Team>}></Route>
        <Route exact path='/EmpSalaryReport' element={<EmpSalaryReport></EmpSalaryReport>}></Route>
        <Route exact path='/EditEmployee/:id' element={<EditEmployee></EditEmployee>}></Route>
        <Route exact path='/EditSalary/:id' element={<EditSalary></EditSalary>}></Route>
        <Route exact path='/EditLeave/:id' element={<EditLeave></EditLeave>}></Route>
        <Route exact path='/Attendance' element={<Attendance/>}></Route>
 
        <Route exact path='/EmpDashboard' element={<EmpDashboard/>}></Route>
      <Route exact path='/UserLogin' element={<UserLogin/>}></Route>
      
      <Route exact path ='/AdminProfile' element={<AdminProfile/>}></Route>
      <Route exact path ='/UserProfile' element={<UserProfile/>}></Route>

      <Route exact path ='/AttendanceSheetReport' element={<AttendanceSheetReport/>}></Route>
      <Route exact path='/EmpLeaveReport' element={<EmpLeaveReport></EmpLeaveReport>}></Route>



      </Routes>

     
    </BrowserRouter> 
  {/** <Footer></Footer>*/} 
  
    
    </div>
  );
}

export default App;