import React from 'react'

export default function Contact() {
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
 {/* <!-- Header Start --> */}
    <div class="container-fluid  py-5 mb-5 page-header" style={{
        // backgroundImage: `url('/4.jpg')`,
        background: "linear-gradient(rgba(24, 29, 56, .7), rgba(24, 29, 56, .7)), url(/6.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "50vh",
        // width: "98vw",
      }}>
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-lg-10 text-center">
                    <h1 class="display-3 text-white animated slideInDown" style={{fontWeight:"bold"}}>Contact Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center">
                            <li class="breadcrumb-item"><a class="text-white" href="/">Home</a></li>
                            <li class="breadcrumb-item"><a class="text-white" href="/team">Team</a></li>
                            <li class="breadcrumb-item"><a class="text-white" href="/contact">Contact</a></li>
                        </ol>
                    </nav>
                    
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Header End --> */}



    {/* <!-- Contact Start --> */}
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 class="section-title bg-white text-center text-primary px-3">Contact Us</h6>
                <h1 class="mb-5">Contact For Any Query</h1>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <h5>Get In Touch</h5>
                    <p class="mb-4">wqwrrerresss tytyty fyuft ffxgxgf hgygvjgh tyyrd dxteste tyhcry tytyty fd4t5s sttste rdtrd grxtrdstr.</p>
                    <div class="d-flex align-items-center mb-3">
                        <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{width:"50px",height: "50px;"}}>
                        <i class="fas fa-map-marker-alt text-white"></i>
                        </div>
                        <div class="ms-3">
                            <h5 class="text-primary">Office</h5>
                            <p class="mb-0">123 Street, Kolkata, India</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center mb-3">
                        <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{width:"50px",height: "50px;"}}>
                            <i class="fa fa-phone-alt text-white"></i>
                        </div>
                        <div class="ms-3">
                            <h5 class="text-primary">Mobile</h5>
                            <p class="mb-0">+1234567891</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{width:"50px",height: "50px;"}}>
                            <i class="fa fa-envelope-open text-white"></i>
                        </div>
                        <div class="ms-3">
                            <h5 class="text-primary">Email</h5>
                            <p class="mb-0">spr@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <iframe class="position-relative rounded w-100 h-100"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                        frameborder="0" style={{minHeight: "300px", border:"0"}} allowfullscreen="" aria-hidden="false"
                        tabindex="0"></iframe>
                </div>
                <div class="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                    <form>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="name" placeholder="Your Name"/>
                                    <label for="name">Your Name</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="email" class="form-control" id="email" placeholder="Your Email"/>
                                    <label for="email">Your Email</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="subject" placeholder="Subject"/>
                                    <label for="subject">Subject</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <textarea class="form-control" placeholder="Leave a message here" id="message" style={{height: "150px"}}></textarea>
                                    <label for="message">Message</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Contact End --> */}





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
