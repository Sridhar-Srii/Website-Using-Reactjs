
import "./Gas.css"
import gas from "../Images/gas.jpg"
import gas2 from "../Images/gas2.jpg"
import safetyglove from "../Images/safetyglove.jpg"
import safetyhelmet from "../Images/safetyhelmet.jpg"
import safetyboots from "../Images/safetyboots.jpg"
import safetyvest from "../Images/safetyvest.jpg"
import safetygoogle from "../Images/safetygoogle.jpg"
import safetyprotector from "../Images/safetyprotector.jpg"
import safetycoverall from "../Images/safetycoverall.jpg"
import safetymask from "../Images/safetymask.jpg"
import safetyharness from "../Images/safetyharness.jpg"
import logo from "../Images/logo.png"
import { Link } from "react-router-dom"


function Gas () {

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
<h1 className="text-center m-auto">Gas Filling & Service</h1>
<br></br>
</div>





     {/* Gas1 Start */}
       
     <div class="card" id="card"> <br></br>
        <div class="row g-0 container m-auto">
            <h1 className="text-center">Gas Filling & Service</h1> <br></br>
            <div class="col-md-6 col-lg-6 col-sm-6" >
            <div class="card-body">
                <p class="card-text" id="pay">Fire Extinguisher RefillA fire extinguisher refill recharge is part of a regular maintenance procedure. Property codes are the ones establishing these intervals. Fire extinguishers need to be refilled every year. But they also need to be refilled after they are used, even if there is remaining extinguishing agent in them. Extinguishers are refilled with a mix of pressurized air and the chosen extinguishing agent. The fastest way of refilling fire extinguishers is by scheduling the process with a licensed professional. Records are kept with all refill dates.</p>
                <br></br>
            </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4" id="payimg">
            <div id="carouselExampleFade1" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={gas} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={gas2} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={gas} class="d-block w-100" alt="..."></img>
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
       <div className="container" id="pay">
        <p>The right type of fire extinguisher refill recharge chemical needs to be selected carefully to ensure optimum performance of your fire extinguisher and longevity as well. There are many types of fire extinguisher recharge substances available in the market.Choose the right one by seeking further advice, research and analysis. Choosing a fire extinguisher recharge product from a well known brand is the wisest option as it will be backed by stringent quality guarantees and you can rely on it to deliver potentially lifesaving performance during a fire emergency. Fire extinguisher refill – when is it needed? Majestic Fire ProtectionBusiness owners need to refill their fire extinguishers. Home owners also need to refill their fire extinguishers if they use refillable products. However, other less obvious instances also need attention. An accidental extinguisher discharge should also be followed by a complete fire extinguisher recharge to ensure its optimal performance during an actual fire. For this purpose, it is essential to choose a solution which works in terms of urgency. Scheduling a refill as soon as possible is recommended. The period in which a fire extinguisher cannot be used or in which it can be used with a reduced capacity is a period of vulnerability. The best way to minimize this vulnerability is to actually schedule a refill as soon as possible. After using the extinguisher to deal with a fire, a scheduled refill is also recommended. For this purpose, a professional needs to refill the fire extinguisher recharge and check the extinguisher is in good working order. Even when using the extinguisher for a short period of time the refill is necessary. In case of another emergency, the extinguisher may not be up to standard and this is why the refill is required. Some of the benefits of a fire extinguisher recharge are given below:Ensures optimum performance of fire extinguisher Makes sure fire extinguisher works properly during an emergency Increases the efficiency of the fire extinguisher Helps one to detect if there are any flaws in the fire extinguisher Another instance which requires a refill comes with the low pressure of an extinguisher. Some extinguishers come with a pressure gauge. The red area of the gauge indicates low pressure while the green area of the gauge indicates proper pressure levels. When the gauge indicates anything below the green line, a refill is recommended. An extinguisher which is fully charged always indicates the green are of the gauge for pressure. But why would the extinguisher lose pressure if not used to tackle a fire? There are multiple causes to this issue. The pressure gauge might be defective. A leak can also lead to loss of pressure. Whichever the cause, the fire extinguisher needs to be refilled and its elements checked for the root of the problem. Of course, a fire extinguisher can also be discharged during testing or a maintenance check. Some types of extinguishers can come with specific needs. They can even be required to be emptied of their extinguishing agent every few years. On the other hand, each accidental discharge needs to be followed by a refill. How to book a fire extinguisher refill Licensed individuals and companies are mandated for the fire extinguisher recharge. In this case, it is highly recommended to find the right path of action, especially when it comes to future maintenance work. It is why working with the same fire extinguisher expert is recommended in the long term. A scheduled refill for all fire extinguishers can be booked on a routine check. In case of an accidental extinguisher discharge, a fire extinguisher expert can also be called to take action and refill the product. A fire extinguisher general inspection should minimize the need to book these refills in case of accidents. Of course, this also means that accidental discharge is still possible, even when the extinguisher is stored properly. A routine fire extinguisher recharge is not just a recommendation. It is a code requirement both by local and federal laws. The liability in case of a malfunction lies on the building’s owner and it is why all extinguishers need to be refilled at fixed intervals and in predetermined scenarios as seen above. </p>
       </div>

       
        

{/* gas1 end  */}




    {/* <div className="card"> */}

            <h1 className=" text-center">Materials</h1>

<div className="container">
    <br></br>

        <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                    <img src={safetyglove} class="card-img-top" alt="..."></img>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                    <img src={safetyhelmet} class="card-img-top" alt="..."></img>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                    <img src={safetyboots} class="card-img-top" alt="..."></img>
                    </div>

                </div>
        </div>

        <br></br>


        <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                    <img src={safetyvest} class="card-img-top" alt="..."></img>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                    <img src={safetygoogle} class="card-img-top" alt="..."></img>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                    <img src={safetyprotector} class="card-img-top" alt="..."></img>
                    </div>

                </div>
        </div>

        <br></br>


        <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                    <img src={safetycoverall} class="card-img-top" alt="..."></img>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                    <img src={safetymask} class="card-img-top" alt="..."></img>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                    <img src={safetyharness} class="card-img-top" alt="..."></img>
                    </div>

                </div>
        </div>

        <br></br>

{/* 
        <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                    <img src={safetyglove} class="card-img-top" alt="..."></img>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                    <img src={safetyhelmet} class="card-img-top" alt="..."></img>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                    <img src={safetyboots} class="card-img-top" alt="..."></img>
                    </div>

                </div>
        </div> */}




</div>

        {/* </div> */}

{/* Gas1 ends */}




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

export default Gas;