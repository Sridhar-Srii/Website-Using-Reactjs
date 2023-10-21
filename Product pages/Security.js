
import "./Security.css"
import domecam from "../Images/domecam.jpg"
import bulletcam from "../Images/bulletcam.jpg"
import ipcam from "../Images/ipcam.jpg"
import dvr from "../Images/dvr.jpg"
import nvr from "../Images/nvr.jpg"
import doorphone from "../Images/doorphone.jpg"
import logo from "../Images/logo.png"
import { Link } from "react-router-dom"

function Security () {

    return (
        <div>



{/* // Navbar Starts */}

<nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand ms-4 " href="#"><img src={logo} alt="..." id="logo"></img></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-2 mb-lg-0" id="nav">
            <li class="nav-item">
            <a><Link to="/" className="nav-link active">Home</Link></a>
            </li>
            <li class="nav-item">
            <a><Link to="/about" className="nav-link active">About Us</Link></a>
            </li>
            <li class="nav-item dropdown">
            <a><Link to="/software" className="nav-link active">Software</Link></a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown" >
               
                <li><a><Link to="/pay" class="dropdown-item">@Pay</Link></a></li>
                <li><a><Link to="/skool" class="dropdown-item">e-Skool</Link></a></li>
                <li><a><Link to="/optic" class="dropdown-item">e-Optic</Link></a></li>
                <li><a><Link to="/petro" class="dropdown-item">e-Petro</Link></a></li>
                <li><a><Link to="/hotel" class="dropdown-item">e-Hotel</Link></a></li>
                <li><a><Link to="/reckon" class="dropdown-item">e-Reckon</Link></a></li>
                <li><a><Link to="/weigh" class="dropdown-item">e-Weigh</Link></a></li>
                <li><a><Link to="/mines" class="dropdown-item">e-Mines</Link></a></li>
            </ul>
            </li>
            <li class="nav-item dropdown">
            {/* <a class="nav-link active dropdown-toggle" href="http://localhost:3000/product" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
            </a> */}
            <a><Link to="/product" activeClassName="link" class="nav-link active">Products</Link></a>
            {/* <a><NavLink to="/product" activeClassName="link" class="nav-link active">Products</NavLink></a> */}
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a><Link to="/time" class="dropdown-item">Time & Attendance System</Link></a></li>
                <li><a><Link to="/access" class="dropdown-item">Access Control System</Link></a></li>
                <li><a><Link to="/security" class="dropdown-item">Security Surveilance Systems</Link></a></li>
                <li><a><Link to="/smart" class="dropdown-item">Smart Card</Link></a></li>
                <li><a><Link to="/rfid" class="dropdown-item">RFID Projects</Link></a></li>
                <li><a><Link to="/tripod" class="dropdown-item">Tripod Turnstiles</Link></a></li>
                <li><a><Link to="/others" class="dropdown-item">Other Accessories & Components</Link></a></li>
            </ul>
            </li>
            <li class="nav-item dropdown">
            <a><Link to="/services" className="nav-link active">Services</Link></a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a><Link to="/fire" class="dropdown-item">Fire & Safety Measures</Link></a></li>
                <li><a><Link to="/gas" class="dropdown-item">Gas Filling & Services</Link></a></li>            </ul>
            </li>
            <li class="nav-item">
            <a><Link to="/contact" class="nav-link active" >Contact Us</Link></a>
            </li>
        </ul>

        <li className="nav-item" id="social">
            <a class="nav-link active" href="https://www.facebook.com/dhoni.sri.75?mibextid=ZbWKwL" target="blank"><i class="fa fa-facebook"></i></a>
            <a class="nav-link active" href="#"><i class="fa fa-instagram"></i></a>
            <a class="nav-link active" href="#"><i class="fa fa-twitter"></i></a>  
            {/* <a class="nav-link active" href="#"><i class="fa fa-whatsapp"></i></a>   */}
        </li>

        
        </div>
    </div>
</nav> <br></br> <br></br>  <br></br>

{/* Navbar Ends */}



<div className="main"> <br></br>
<h1 className="text-center m-auto">Security Surveilance System</h1>
<br></br>
</div>





       {/*  */}
<div className="card"> <br></br>

<h1 className="text-center">Security Surveillance Systems</h1>

<div id="cards">
<div class="row row-cols-1 row-cols-md-3 g-4 container">
        <div class="col">
            <div class="card h-100">
            <img src={domecam} class="card-img-top" alt="..."></img>
            <div class="card-body">
            <h4 class="card-title text-center">Dome Camera</h4>
                <p class="card-text">Dome cameras are either ceiling mounted or suspended from a wall mounted bracket depending on the application and the field of view required. The camera unit is mounted inside a transparent dome which can be tinted to obscure the camera position.</p>
            </div>

            </div>
        </div>

        <div class="col">
            <div class="card h-100">
            <img src={bulletcam} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h4 class="card-title text-center">Bullet Camera</h4>
                <p class="card-text">A type of video camera often used in surveillance systems. Bullet cameras are small and are limited to a fixed focal length lens. The images may have slightly cut-off corners because the camera shape can interfere with the actions of the of the camera lens.</p>
            </div>
            
            </div>
        </div>

        <div class="col">
            <div class="card h-100">
            <img src={ipcam} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h4 class="card-title text-center">Ip Camera</h4>
                <p class="card-text">An Internet protocol camera, or IP camera, is a type of digital video camera commonly employed for surveillance, and which, unlike analog closed circuit television (CCTV) cameras, can send and receive data via a computer network and the Internet.</p>
            </div>
            
            </div>
        </div>
</div>
{/* <br></br> */}
</div>




{/*  */}


       {/*  */}
       {/* <div className="card">  */}


<div id="cards">
<div class="row row-cols-1 row-cols-md-3 g-4 container">
        <div class="col">
            <div class="card h-100">
            <img src={dvr} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h4 class="card-title text-center">DVR</h4>
                <p class="card-text">A digital video recorder (DVR), sometimes referred to by the merchandising term personal video recorder (PVR), is a consumer electronics device that records video in a digital format to a disk drive, USB flash drive, SD memory card, SSD or other local or networked mass storage device.</p>
            </div>

            </div>
        </div>

        <div class="col">
            <div class="card h-100">
            <img src={nvr} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h4 class="card-title text-center">NVR</h4>
                <p class="card-text">Network Video Recorder is a network camera that enables simultaneous recording and remote access to both live views and recorded images. The NVR is used in conjunction with network cameras that capture images and then transmit compressed video over the network.</p>
            </div>
            
            </div>
        </div>

        <div class="col">
            <div class="card h-100">
            <img src={doorphone} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h4 class="card-title text-center">Video Doorphone</h4>
                <p class="card-text">Video doorphone is a stand-alone intercom system used to manage calls made at the entrance to a building (residential complex, detached family home, workplace, etc.) with access controlled by audiovisual communication between the inside and outside.</p>
            </div>
            
            </div>
        </div>
</div>
<br></br>
</div>


{/* </div> */}
    {/*  */}







    </div>





{/* footer starts */}
             


<footer>
        <div class="footer-top">
            <div class="container" data-aos="fade-up" data-aos-duration="1500">
                <div class="footer-day-time">
                    <div class="row">
                        <div class="col-md-8">
                            <ul>
                                <li>Opening Hours : Mon - Sat : 9.00 AM - 6.00 PM</li>
                                {/* <li>Sunday: 8:00 AM - 12:00 PM</li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        
                        <h4>About us</h4>
                        <p>We are pleased to inform you that our company “Gomath Technologies” with the experience of last 20 years in electronic & Software Development Field.</p>
                       
                        
                    </div>

                    <div class="col-lg-6">
                        <h4>Information</h4>
                        <ul class="address1">
                            <li><i class="fa fa-map-marker"></i>#C3, Venkata Villa, Venkatesha Nagar,Kishkinta Road, West Tambaram,Chennai - 600 045.</li>
                            <li><i class="fa fa-map-marker"></i>14/9, Balasubramania Nagar, Perundurai, Road, Erode - 638011</li>
                            <li><i class="fa fa-mobile" aria-hidden="true"></i> <a href="tel:12 34 56 78 90"> 9677784833 / 9443739833.</a></li> 
                            {/* <li><i class="fa fa-envelope" aria-hidden="true"></i><a href="mailto:#">gomathtechnologies@gmail.com</a></li> */}
                            {/* <li><i class="fa fa-map-marker"></i>14/9, Balasubramania Nagar, Perundurai, Road, Erode - 638011</li> */}

                        </ul>
                    </div>

                    <div class="col-lg-2">
                        <h4>Follow us</h4>
                        <ul class="social-icon">
                            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                            {/* <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li> */}

                        </ul>
                    </div>

                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-sm-5 col-lg-5 col-md-5">
                        <p class="copyright text-uppercase">Copyright © Gomath Technologies 2023
                        </p>
                    </div>
                    {/* <div class="col-sm-7">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our services</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </div>
    </footer>


{/* footer ends */}

    












        </div>
    )
    
}

export default Security;