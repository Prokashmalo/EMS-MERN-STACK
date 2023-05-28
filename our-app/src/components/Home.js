import React from 'react'
import '../css/style.css';
import Dropdown from 'react-bootstrap/Dropdown';
export default function Home() {
  return (
    <div>
       {/* <!-- Navbar Start --> */}
       <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0"  style={{height:"90px"}}>
        <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
        <img class="logo" src="/logo.png" alt="" style={{height:"70px", marginBottom:"20px"}}/>

        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon" ></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse"  style={{backgroundColor:"#fff", marginBottom:"33px"}}>
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <a href="/" class="nav-item nav-link " style={{fontSize:"20px", color:"#B20DEE", marginTop:"20px", fontWeight:"bold"}}>Home</a>
                <a href="/about" class="nav-item nav-link" style={{fontSize:"20px", color:"#B20DEE" , marginTop:"20px", fontWeight:"bold"}}>About</a>
                <a href="/team" class="nav-item nav-link" style={{fontSize:"20px", color:"#B20DEE" ,  marginTop:"20px", fontWeight:"bold"}}>Our Team</a>
                <a href="/contact" class="nav-item nav-link" style={{fontSize:"20px", color:"#B20DEE" , marginTop:"20px", fontWeight:"bold"}}>Contact</a>
            </div>
            <div class="nav-item dropdown">
<a  class="btn  py-4 px-lg-5 d-none d-lg-block" style={{backgroundColor:"#B20DEE", color:"#fff",fontSize:"18px", marginTop:"25px"}} >Login Now<i class="fa fa-arrow-right ms-3"></i></a>
                    <div class="dropdown-menu fade-down m-0" style={{backgroundColor:"#fff"}}>
                        <a href="/userlogin" class="dropdown-item" style={{color:"#B20DEE",fontSize:"18px"}}>Employee Login</a>
                        <a href="/login" class="dropdown-item" style={{color:"#B20DEE",fontSize:"18px"}}>Admin Login</a>
                    </div>
                </div> 
        </div>
    </nav>
    {/* <!-- Navbar End --> */}


    {/* <!-- Carousel Start --> */}
    <div class="container-fluid p-0 mb-5">
        <div class="owl-carousel header-carousel position-relative">
            <div class="owl-carousel-item position-relative">
                <img class="img-fluid" src="/5.jpg" alt=""/>
                <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: "rgba(38, 41, 63, 0.8)"}}>
                    <div class="container">
                        <div class="row justify-content-start">
                            <div class="col-sm-10 col-lg-8">
                                <h1 class="text  mb-2 animated slideInDown" style={{color:"#FFE4E1"}}>Welcome To SPR Coders </h1>
                                <h1 class="display-3  animated slideInDown" style={{color:"#DB7093",fontWeight:"bold",fontFamily:"sans-serif"}}>We Believe and Working and Progressing together</h1>
                                <p class="mb-4 pb-2" style={{color:"#FFF" , fontWeight:"bold",fontSize:"20px"}}>Employees is the backbone of our company.</p>
                                {/* <a href="" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a> */}
                                {/* <a href="" class="btn btn-primary 5 animated slideInRight">Join Now</a> */}
                                <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic"  style={{padding:"15px 70px",backgroundColor:"#B20DEE"}}>
        Join Now
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/userlogin" style={{color:"#B20DEE",fontSize:"18px"}}>Employee Login</Dropdown.Item>
        <Dropdown.Item href="/login" style={{color:"#B20DEE",fontSize:"18px"}}>Admin Login</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    {/* <!-- Carousel End --> */}



    <section id="hero" class="d-flex align-items-center justify-content-center">
    <div class="container" data-aos="fade-up">

      <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
        <div class="col-xl-6 col-lg-8">
          <h1 style={{color: "#545054"}}>Powerful Digital Solutions With Gp<span style={{color: "#B20DEE"}}>.</span></h1>
          <h2 style={{color: "#B20DEE"}}>We are team of talented digital marketers</h2>
        </div>
      </div>

      <div class="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
        <div class="col-xl-2 col-md-4">
          <div class="icon-box">
            
            <img src="/clients/client-1.png" class="img-fluid" alt=""/>
            
          </div>
        </div>
        <div class="col-xl-2 col-md-4">
          <div class="icon-box">
            
            <img src="/clients/client-2.png" class="img-fluid" alt=""/>
            
          </div>
        </div>
        <div class="col-xl-2 col-md-4">
          <div class="icon-box">
            
            <img src="/clients/client-3.png" class="img-fluid" alt=""/>
           
          </div>
        </div>
        <div class="col-xl-2 col-md-4">
          <div class="icon-box">
            
            <img src="/clients/client-4.png" class="img-fluid" alt=""/>
            
          </div>
        </div>
        <div class="col-xl-2 col-md-4">
          <div class="icon-box">
            
            <img src="/clients/client-5.png" class="img-fluid" alt=""/>
          </div>
        </div>
        <div class="col-xl-2 col-md-4">
          <div class="icon-box">
            
            <img src="/clients/client-6.png" class="img-fluid" alt=""/>
            
          </div>
        </div>
      </div>

    </div>
  </section>
  
 




  
 {/* <!-- Footer Start --> */}
 <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
     <div class="container py-5">
         <div class="row g-5">
             <div class="col-lg-2 col-md-6">
                 <h4 class="text-white mb-3">Quick Link</h4>
                 <a class="btn " href="/" style={{color:"#fff"}}><i class="fas fa-long-arrow-alt-right"></i>  Home</a>
                 <a class="btn" href="/about" style={{color:"#fff"}}><i class="fas fa-long-arrow-alt-right"></i>  About Us</a>
                 <a class="btn " href="/contact" style={{color:"#fff"}}><i class="fas fa-long-arrow-alt-right"></i>  Contact Us</a>
                 <a class="btn " href="/team" style={{color:"#fff"}}><i class="fas fa-long-arrow-alt-right"></i>  Our Team</a>
             </div>
             <div class="col-lg-3 col-md-6">
                 <h4 class="text-white mb-3">Contact</h4>
                 <p class="mb-2"><i class="fas fa-map-marker-alt"></i> 123 Street, Kolkata, India</p>
                 <p class="mb-2"><i class="fas fa-phone-alt"></i> +1234567891</p>
                 <p class="mb-2"><i class="fa fa-envelope me-3"></i>spr@gmail.com</p>
                 <div class="d-flex pt-2">
                     <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                     <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                     <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                     <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                 </div>
             </div>
             <div class="col-lg-3 col-md-6">
                 <h4 class="text-white mb-3">Gallery</h4>
                 <div class="row g-2 pt-2">
                     <div class="col-4">
                         <img class="img-fluid bg-light p-1" src="/course-1.jpg" alt=""/>
                     </div>
                     <div class="col-4">
                         <img class="img-fluid bg-light p-1" src="/course-2.jpg" alt=""/>
                     </div>
                     <div class="col-4">
                         <img class="img-fluid bg-light p-1" src="/course-3.jpg" alt=""/>
                     </div>
                     <div class="col-4">
                         <img class="img-fluid bg-light p-1" src="/course-2.jpg" alt=""/>
                     </div>
                     <div class="col-4">
                         <img class="img-fluid bg-light p-1" src="/course-3.jpg" alt=""/>
                     </div>
                     <div class="col-4">
                         <img class="img-fluid bg-light p-1" src="/course-1.jpg" alt=""/>
                     </div>
                 </div>
             </div>
             <div class="col-lg-1 col-md-6">
             </div>
             <div class="col-lg-3 col-md-6">
                 <h4 class="text-white mb-3">Newsletter</h4>
                 <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                 <div class="position-relative mx-auto" style={{maxWidth: "400px"}}>
                     <input class="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                     <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                 </div>
             </div>
         </div>
     </div>
   
 </div>
</div>
    
  )
}
