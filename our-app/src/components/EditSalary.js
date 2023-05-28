import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import React from "react";


const EditSalary = () => {
    const[UserId,idchange]=useState("");
    const[FullName,namechange]=useState("");
    const[MobileNo,phonechange]=useState("");
    const[BasicSalary,basicsalchange]=useState("");
    const[HRA,hrachange]=useState("");
    const[TravelAllowance,travelchange]=useState("");
    const[DearnessAllowance,dearnesschange]=useState("");
    const[ProvidentFund,providentchange]=useState("");
    const[TotalTax,taxchange]=useState("");
    const[Month,monthchange]=useState("");
    const[TotalPaid,totalpaidchange]=useState("");
  
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("token")) {
       navigate("/login");
        }
      });


  useEffect(()=>{
    getSalaryDetails();
  },[])
  const getSalaryDetails= async()=>{

let result= await fetch(`http://localhost:5000/update/${id}`)
   result = await result.json()
   console.warn(result)
   idchange(result.UserId);
   namechange(result.FullName);
   phonechange(result.MobileNo);
   basicsalchange(result.BasicSalary);
   hrachange(result.HRA);
   travelchange(result.TravelAllowance);
   dearnesschange(result.DearnessAllowance);
   providentchange(result.ProvidentFund);
   taxchange(result.TotalTax);
   monthchange(result.Month);
   totalpaidchange(result.TotalPaid);
 
  }

  const handlesubmit= async()=>{
   console.warn(UserId,FullName,MobileNo,Month,BasicSalary,HRA,TravelAllowance,DearnessAllowance,ProvidentFund,TotalTax,TotalPaid);
   let result =  fetch(`http://localhost:5000/update/${id}`,{
       method:'PUT',
       body: JSON.stringify({UserId,FullName,MobileNo,Month,BasicSalary,HRA,TravelAllowance,DearnessAllowance,ProvidentFund,TotalTax,TotalPaid}),
       headers:{
        'Content-Type':'Application/json'
       }
     
});
result = await result.json();
if(result){
    navigate('/SalaryReport');
}

}


    return ( 
        <div>

        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container">

                    <div className="card shadow-2-strong card-registration shadow px-4" style={{"textAlign":"left"}}>
                        <div className="card-title">
                            <h2>Employee salary Edit</h2>
                        </div>
                        <div className="card-body p-4 p-md-5">

                            <div className="row">

                            <div className="col-lg-6">
                                <fieldset disabled>
                                    <div className="form-group">
                                        <label>User Id</label>
                                        <input required value={UserId}  onChange={e=>idchange(e.target.value)} className="form-control"></input>
                                    </div>
                                    </fieldset>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input required value={FullName}  onChange={e=>namechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Mobile No</label>
                                        <input value={MobileNo} onChange={e=>phonechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>


                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>BasicSalary</label>
                                        <input required value={BasicSalary}  onChange={e=>basicsalchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>HRA</label>
                                        <input required value={HRA}  onChange={e=>hrachange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Travel Allowance</label>
                                        <input value={TravelAllowance} onChange={e=>travelchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Dearness Allowance</label>
                                        <input value={DearnessAllowance} onChange={e=>dearnesschange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                            
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>  Provident Fund</label>
                                        <input value={ProvidentFund} onChange={e=>providentchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>  Total Tax</label>
                                        <input value={TotalTax} onChange={e=>taxchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>  Month</label>
                                        <input value={Month} onChange={e=>monthchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label> Total Paid</label>
                                        <input value={TotalPaid} onChange={e=>totalpaidchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                             
                                <div className="col-lg-12">
                                    <div className="form-group">
                                       <button className="btn btn-success" type="submit" onClick={handlesubmit}>Save</button>
                                       <Link to="/SalaryReport" className="btn btn-danger">Back</Link>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </form>

            </div>
        </div>
    </div>
     );
}
 
export default EditSalary;