
import "./Product.css"
import eskool from "../Images/eskool.jpg"
import pay from "../Images/@Pay.jpg"
import eoptics from "../Images/eOptics.jpg"
import epetro from "../Images/ePetro.jpg"
import ehotel from "../Images/eHotel.jpg"
import ereckon from "../Images/eReckon.jpg"
import eweigh from "../Images/eWeigh.jpg"
import emines from "../Images/eMines.jpg"
import attendance from "../Images/attendance.jpg"
import attendance2 from "../Images/attendance2.jpg"
import security from "../Images/security.jpg"
import security2 from "../Images/security2.jpg"
import smartcard from "../Images/smartcard.jpg"
import smartcard2 from "../Images/smartcard2.jpg"
import access from "../Images/access.jpg"
import access2 from "../Images/access2.jpg"
import tripod from "../Images/tripod.jpg"
import tripod2 from "../Images/tripod2.jpg"
import rfid from "../Images/rfid.jpg"
import rfid2 from "../Images/rfid2.jpg"
import others from "../Images/others.jpg"
import others2 from "../Images/others2.jpg"
import { Link, NavLink } from "react-router-dom"
import logo from "../Images/logo.png"





function Product () {


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
<h1 className="text-center m-auto">Products</h1>
<br></br>
</div>









 <div class="card" >

        {/* Time & Attendence starts */}

    <div > <br></br>
        <div class="row g-0 container m-auto">
            <h1 className="text-center">Time & Attendance Systems</h1> <br></br>
            <div class="col-md-6 col-lg-6 col-sm-6" >
            <div class="card-body">
                <p class="card-text" id="time">Time and attendance is the process of tracking work hours. In the past, this was always a manual system. Employees may have manually completed a time card and that information was used for payroll and benefits. Another option for tracking time was a punch clock. As technology continued to advance, there were newer options for tracking time and attendance. One such advance utilizes scanning to track time. Employees are issued smart cards, which resemble ATM cards. The Smart Card is then flash through a smart card reader to capture the time the employee is punching in and out. Nowadays, there are various systems available to measure time & attendance, from manual to complete automation. A Biometric-based Time Attendance system provides the desired automation while ensuring authenticity and eliminating impersonation.</p>
                <button id="btn1"><Link to="/time" id="link">Read more</Link></button>
                <br></br>
            </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4" id="timeimg">
            {/* <img src={pay} class="img-fluid rounded-start" alt="..."></img> */}
            <div id="carouselExampleFade1" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active"> 
                    <img src={attendance} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={attendance2} class="d-block w-100" alt="..."></img>
                </div>
                
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade1" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade1" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            </div>
            
            <br></br>
        </div> 
       
        </div>

        {/* Time & Attendence ends */}



        

        {/* Access control system starts */}

               
        {/* <div class="card">  */}
        <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center" >Access Control Systems</h1> <br></br>
            <div class="col-md-4 col-lg-4 col-sm-4" id="accessimg">
            {/* <img src={eskool} class="img-fluid rounded-start" alt="..."></img> */}
        <div id="carouselExampleFade2" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={access} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={access2} class="d-block w-100" alt="..."></img>
                </div>
                
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade2" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade2" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
                </div>
                    <div class="col-md-7 col-lg-7 col-sm-7 " >
                            <div class="card-body">
                                <p class="card-text" id="access">The term access control refers to the practice of restricting entrance to a property, a building, or a room to unauthorized persons. Physical access control can be achieved by an authorized person, through mechanical means such as locks and keys, or through electronic access control means such as proximity cards, biometric scans, or keypad. Access may provide safety and security to a private area. Access control systems become useful in commercial & institutional applications when key management is required. A person may be granted access to a certain door at a particular time of day, an employee may be denied access to various departments by implementing an access control system. Basically, an access control system determines who is allowed access, when they are allowed accessing and where or what door they are allowed to access.</p>
                                <button id="btn2"><Link to="/access" id="link">Read more</Link></button>
                                <br></br>
                            </div>
                            </div>
                            {/* <br></br> */}
                        </div>    
                    {/* </div> */}
               
         {/*Access control system ends  */}
               
               
               
        {/* Security system starts */}



        {/* <div class="card">  */}
        <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">Security Surveillance Systems</h1> <br></br>
            <div class="col-md-6 col-lg-6 col-sm-6" >
            <div class="card-body">
                <p class="card-text" id="security">CCTV is a TV system in which signals are not publicly distributed but are monitored, primarily for surveillance and security purposes. CCTV monitoring has many benefits including crime prevention, reducing losses, etc., cutting downtime, minimizing insurance claims, and management overheads. CCTV relies on strategic placement of cameras, and observation of the camera’s input on monitors somewhere. Because the cameras communicate with monitors and/or video recorders across private coaxial cable runs or wireless communication links, they gain the designation “closed-circuit” to indicate that access to their content is limited by design only to those able to see it. CCTV displays can be color, high-resolution displays and can include the ability to zoom in on an image or track something (or someone) among their features.</p>
                <button id="btn1"><Link to="/security" id="link">Read more</Link></button>
                <br></br>
            </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4" id="securityimg">
            {/* <img src={pay} class="img-fluid rounded-start" alt="..."></img> */}
            <div id="carouselExampleFade3" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={security} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={security2} class="d-block w-100" alt="..."></img>
                </div>
                
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade3" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade3" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            </div>
            
            {/* <br></br> */}
        </div> 
       
        {/* </div> */}



        {/* Security system ends */}



        

        {/* Smart card starts */}



 {/* <div class="card">  */}
 <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center" >Smart Card</h1> <br></br>
            <div class="col-md-4 col-lg-4 col-sm-4" id="smartimg">
            {/* <img src={eskool} class="img-fluid rounded-start" alt="..."></img> */}
        <div id="carouselExampleFade4" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={smartcard} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={smartcard2} class="d-block w-100" alt="..."></img>
                </div>
                
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade4" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade4" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
        </div>
                    <div class="col-md-7 col-lg-7 col-sm-7 " >
                            <div class="card-body">
                                <p class="card-text" id="smart">A smart card is a plastic card that contains an embedded computer chip–either a memory or microprocessor that stores and transacts data. This data is usually associated with either value, information, or both and is stored and processed within the card’s chip. The card data is transacted via a reader that is part of a computing system. Systems that are enhanced with smart cards are in use today throughout several key applications. All applications can benefit from the added features & security that smart cards provide. ISO/IEC 14443 is the international standard for 13.56 MHz contactless smart cards that operate at a distance of fewer than 10 cms. ISO/IEC 7816 is the international standard for contact smart cards. It includes physical characteristics, radio frequency power and signal interface, initialization and anticollision, transmission protocol.</p>
                                <button id="btn2"><Link to="/smart" id="link">Read more</Link></button>
                                <br></br>
                            </div>
                    </div>
                            <br></br>
        </div> 

                        
    {/* </div> */}



        {/* Smart card ends */}





        {/* RFID Projects starts */}


        {/* <div class="card" >  */}
        <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">RFID Projects</h1> <br></br>
            <div class="col-md-6 col-lg-6 col-sm-6" >
            <div class="card-body">
                <p class="card-text" id="rfid">RFID or Radio Frequency Identification is an automatic identification method, relying on storing and remotely retrieving data using devices called RFID tags or transponders. An RFID tag is a product that can be applied to or incorporated into an object, animal, or person for identification using radiofrequency waves. Some tags can be read from several meters away and beyond the line of sight of the reader. Most RFID tags contain at least two parts. One is an integrated circuit for storing and processing information, modulating and demodulating an (RF) signal, and other specialized functions. The second is an antenna for receiving and transmitting the signal. Consequently, RFID technology is being deployed at a mind-boggling pace across the world in industrial, consumer, and Security applications.</p>
                <button id="btn1"><Link to="/rfid" id="link">Read more</Link></button>
                <br></br>
            </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4" id="rfidimg">
            {/* <img src={pay} class="img-fluid rounded-start" alt="..."></img> */}
            <div id="carouselExampleFade5" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={rfid} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={rfid2} class="d-block w-100" alt="..."></img>
                </div>
                
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade5" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade5" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            </div>
            
            <br></br>
        </div> 
       
        {/* </div> */}

        {/* RFID Projects ends */}


        
        {/* Tripod Turnstile starts */}



                
        {/* <div class="card">  */}
        <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center" >Tripod Turnstile</h1> <br></br>
            <div class="col-md-4 col-lg-4 col-sm-4" id="tripodimg">
            {/* <img src={eskool} class="img-fluid rounded-start" alt="..."></img> */}
        <div id="carouselExampleFade6" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={tripod} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={tripod2} class="d-block w-100" alt="..."></img>
                </div>
                
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade6" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade6" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
                </div>
                    <div class="col-md-7 col-lg-7 col-sm-7 " >
                            <div class="card-body">
                                <p class="card-text" id="tripod">The Tripod Turnstile is a Cutting Edge solution that provides a combination of reliable mechanical as well as an electronic restriction for unauthorized Entrants. The advantages of using a Turnstile compared to a conventional Gate include the better utilization of manpower, increased reliability, and improved security. This mechanism allows a single employee to enter the premises only after verification through the Access Control Module that is integrated onto the Turnstile. Various kinds of Access Control Systems can be integrated as per the customer’s requirements. To serve the dual purpose of access control and attendance recording, the Time and Attendance Systems can also be integrated.</p>
                                <button id="btn2"><Link to="/tripod" id="link">Read more</Link></button>
                                <br></br>
                            </div>
                            </div>
                            <br></br>
                        </div> 

                        
                    {/* </div> */}



{/* Tripod Turnstile ends */}



        {/* Other Accessories & Components starts */}


        {/* <div class="card" >  */}
        <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">Other Accessories & Components</h1> <br></br>
            <div class="col-md-6 col-lg-6 col-sm-6" >
            <div class="card-body">
                <p class="card-text" id="others">We offer an extensive range of access control accessories, designed to support your door access control needs. We carry everything from easy-to-install Magnetic Lock, Door Sensor, Exit Switch, Door Closer, etc. Some additional accessories for Security Surveillance Systems, Time and Attendance System, Smart Card Systems also available. Such as like CCTV Camera Clamp, Powersupply for CCTV, Different types of cables, various voltage DC adaptor, External Busor or Light indicator for Time and Attendance Systems, Standard Size acrylic box for Attendance device, Card Holder, Lanyard, etc.,</p>
                <button id="btn1"><Link to="/others" id="link">Read more</Link></button>
                <br></br>
            </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4" id="othersimg">
            {/* <img src={pay} class="img-fluid rounded-start" alt="..."></img> */}
            <div id="carouselExampleFade7" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={others} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={others2} class="d-block w-100" alt="..."></img>
                </div>
                
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade7" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade7" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            </div>
            
            <br></br>
        </div> 
       
        {/* </div> */}


        {/* Other Accessories & Components ends */}




               
         </div>
         {/* overall 2nd div */}


        


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
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-sm-5">
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


export default Product;