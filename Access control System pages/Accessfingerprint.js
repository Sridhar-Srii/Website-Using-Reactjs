
import x990 from "../Images/x990.jpg"
import iclock990 from "../Images/iclock990.jpg"
import tf1700 from "../Images/tf1700.jpg"
import sf200 from "../Images/sf200.jpg"
import sf300 from "../Images/sf300.jpg"
import f6 from "../Images/f6.jpg"
import f10 from "../Images/f10.jpg"
import f11 from "../Images/f11.jpg"
import f16 from "../Images/f16.jpg"
import f18 from "../Images/f18.jpg"
import ma300 from "../Images/ma300.jpg"
import sf101 from "../Images/sf101.jpg"
import logo from "../Images/logo.png"
import { Link } from "react-router-dom"

function Accessfingerprint () {

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


       {/*  */}
       <div className="card"> <br></br>

<h1 className="text-center">A Fingerprint System (Biometric)</h1>


<div id="cards">
<div class="row row-cols-1 row-cols-md-3 g-4 container">
 <div class="col">
     <div class="card h-100">
     <img src={x990} class="card-img-top" alt="..."></img>
     <div class="card-body">
         <h4 class="card-title text-center">X990</h4>
         <p class="card-text">X990- a time attendance and access control terminal featuring new fingerprint algorithm which provide very fast and accurate fingerprint identification. It can verify fingerprints within 0.5 second (I: N identification).</p>
     </div>

     </div>
 </div>

 <div class="col">
     <div class="card h-100">
     <img src={iclock990} class="card-img-top" alt="..."></img>
     <div class="card-body">
         <h4 class="card-title text-center">iClock990</h4>
         <p class="card-text">iClock990 time attendance and access control terminal features 10.0 fingerprint algorithm for fast and accurate fingerprint identification. It can manage 10,000 templates within 1 second (I: N identification).</p>
     </div>
     
     </div>
 </div>

 <div class="col">
     <div class="card h-100">
     <img src={tf1700} class="card-img-top" alt="..."></img>
     <div class="card-body">
         <h4 class="card-title text-center">TF1700</h4>
         <p class="card-text">TF1700, one of the world’s smallest IP-based fingerprint terminals used for access control and time attendance features. With its IP65 rated rugged waterproof and weatherproof structure, TF1700 offers extra durability in all weather conditions.</p>
     </div>
     
     </div>
 </div>
</div>
</div>





<div id="cards">
<div class="row row-cols-1 row-cols-md-3 g-4 container">
 <div class="col">
     <div class="card h-100">
     <img src={sf200} class="card-img-top" alt="..."></img>
     <div class="card-body">
         <h4 class="card-title text-center">SF200</h4>
         <p class="card-text">The SF200 is an IP based fingerprint terminal work both in standalone and network mode. The 4×4 keypad and LCD display make SF200 easy to operate for standalone use, and wiegand output enable SF200.</p>
     </div>

     </div>
 </div>

 <div class="col">
     <div class="card h-100">
     <img src={sf300} class="card-img-top" alt="..."></img>
     <div class="card-body">
         <h4 class="card-title text-center">SF300</h4>
         <p class="card-text">The SF300 is an IP based fingerprint terminal works both in network and standalone modes. Wiegand output makes SF300 flexible to connect with eSSL or any third party controllers as a slave reader.</p>
     </div>
     
     </div>
 </div>

 <div class="col">
     <div class="card h-100">
     <img src={f6} class="card-img-top" alt="..."></img>
     <div class="card-body">
         <h4 class="card-title text-center">F6</h4>
         <p class="card-text">Reliable, durable and highly accurate Fingerprint sensor with version 10 algorithm provides less than 1 second user recognition. Works without computer. Complete setup and programming can be done via keypads and embedded firmware.</p>
     </div>
     
     </div>
 </div>
</div>
</div>







<div id="cards">
<div class="row row-cols-1 row-cols-md-3 g-4 container">
 <div class="col">
     <div class="card h-100">
     <img src={f10} class="card-img-top" alt="..."></img>
     <div class="card-body">
         <h4 class="card-title text-center">F10</h4>
         <p class="card-text">F10 is an innovative biometric fingerprint reader for access control applications, offering unparalleled performance using an advanced algorithm for reliability, precision and excellent matching speed. The device offers the flexibility to be installed standalone.</p>
     </div>

     </div>
 </div>

 <div class="col">
     <div class="card h-100">
     <img src={f11} class="card-img-top" alt="..."></img>
     <div class="card-body">
         <h4 class="card-title text-center">F11</h4>
         <p class="card-text">F11 is an innovative biometric fingerprint reader for access control applications, offering unparalleled performance using an advanced algorithm for reliability, precision and excellent matching speed. F11 features the fastest commercial-based fingerprint algorithm.</p>
     </div>
     
     </div>
 </div>

 <div class="col">
     <div class="card h-100">
     <img src={f16} class="card-img-top" alt="..."></img>
     <div class="card-body">
         <h4 class="card-title text-center">F16</h4>
         <p class="card-text">F16 is a fingerprint access control terminal with an integrated proximity reader. IP65 rated waterproof enclosure permits this reader to be used for outdoor applications. It could install easily on your network having both Ethernet and RS485 serial ports.</p>
     </div>
     
     </div>
 </div>
</div>
</div>






<div id="cards">
<div class="row row-cols-1 row-cols-md-3 g-4 container">
 <div class="col">
     <div class="card h-100">
     <img src={f18} class="card-img-top" alt="..."></img>
     <div class="card-body">
         <h4 class="card-title text-center">F18</h4>
         <p class="card-text">F18 is an innovative biometric fingerprint reader for access control applications, offering unparalleled performance using an advanced algorithm for reliability, precision and excellent matching speed. F18 features the commercial-based fingerprint matching algorithm.</p>
     </div>

     </div>
 </div>

 <div class="col">
     <div class="card h-100">
     <img src={ma300} class="card-img-top" alt="..."></img>
     <div class="card-body">
         <h4 class="card-title text-center">MA300</h4>
         <p class="card-text">MA300 is an innovative biometric for access control applications, offering unparalleled performance using an advanced algorithm for reliability, precision and excellent matching speed. MA300 features the fastest commercial-based fingerprint matching algorithm</p>
     </div>
     
     </div>
 </div>

 <div class="col">
     <div class="card h-100">
     <img src={sf101} class="card-img-top" alt="..."></img>
     <div class="card-body">
         <h4 class="card-title text-center">SF101</h4>
         <p class="card-text">SF101 is an access control device which is made with Zinc Alloy with elegant design and professional surface treatment. The device can work as a standalone access control or wiegand reader. The device have lock, alarm, exit button, door sensor and wiegand out.</p>
     </div>
     
     </div>
 </div>
</div>
<br></br>
</div>














</div>
{/*  */}







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

export default Accessfingerprint;