
import "./Fire.css"
import fire from "../Images/fire.jpg"
import fire2 from "../Images/fire2.jpg"
import fireextinguisher from "../Images/fireextinguisher.jpg"
import fireblanket from "../Images/fireblanket.jpg"
import firehose from "../Images/firehose.jpg"
import firesignage from "../Images/firesignage.jpg"
import firesprinkler from "../Images/firesprinkler.jpg"
import firefirstaid from "../Images/firefirstaid.jpg"
import fireexit from "../Images/fireexit.jpg"
import smokealarm from "../Images/smokealarm.jpg"
import logo from "../Images/logo.png"
import { Link } from "react-router-dom"

function Fire () {

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
<h1 className="text-center m-auto">Fire & Safety Measures</h1>
<br></br>
</div>







     {/* Fire1 Start */}
       
     <div class="card" id="card"> <br></br>
        <div class="row g-0 container m-auto">
            <h1 className="text-center">Fire & Safety Measures</h1> <br></br>
            <div class="col-md-6 col-lg-6 col-sm-6" >
            <div class="card-body">
                <p class="card-text" id="fire1">There are many different types of fire safety equipment. Each device is designed specifically to deal with the different classes of fire in a range of environments. If you’re struggling to figure out which fire safety devices you need in your building, take a look at the following range of equipment. Once you have an idea of the fire safety measures in your building, be sure to take a look at our fire equipment service options. We test and inspect a wide range of equipment – contact us today to request our services.</p>
                <br></br>
            </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4" id="fire1img">
            {/* <img src={pay} class="img-fluid rounded-start" alt="..."></img> */}
            <div id="carouselExampleFade1" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={fire} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={fire2} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={fire} class="d-block w-100" alt="..."></img>
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
       

       

{/* Fire1 ends */}




 {/* Extin Start */}
       
             {/* <div class="card"> */}
                 <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center" >1. Fire Extinguishers</h1> <br></br>
            <div class="col-md-4 col-lg-4 col-sm-4" id="extinimg">
            <img src={fireextinguisher} class="d-block w-100" alt="..."></img>
                </div>
                    <div class="col-md-7 col-lg-7 col-sm-7 " >
                            <div class="card-body">
                                <p class="card-text" id="extin">Most buildings contain a variety of hand-held firefighting equipment. This range of equipment is designed to help contain small fires before they spread and become too large to control. Portable fire extinguishers are available with a number of different extinguishing agents to help you combat a flame.
                                <h5>A portable extinguisher may contain the following substance :</h5>
                                <ul>
                                    <li>water</li>
                                    <li>foam</li>
                                    <li>dry powder</li>
                                    <li>CO2</li>
                                    <li>wet chemical</li>
                                </ul>
                                <p>If you would like to know which fire extinguisher is designed for which type of fire, check out our other blog post.</p>
                                </p>
                                <br></br>
                            </div>
                            </div>
                            <br></br>
                        </div> 

                        
                    {/* </div> */}

        {/* Extin ends */}





     {/* Blanket Starts */}
       
     {/* <div class="card">  */}
     <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">2. Fire Blankets</h1> <br></br>
            <div class="col-md-6 col-lg-6 col-sm-6" >
            <div class="card-body">
                <p class="card-text" id="blanket">Fire blankets are designed to smother class F fires. That means flame that is fuelled by cooking oils and fats. Naturally, fire blankets are installed in kitchen environments, where the chance of a class F fire is the highest.</p>
                <br></br>
            </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4" id="blanketimg">
            {/* <img src={pay} class="img-fluid rounded-start" alt="..."></img> */}
            <img src={fireblanket} class="d-block w-100" alt="..."></img>
            </div>
            
            <br></br>
        </div> 
       
        {/* </div> */}
        

{/* Blanket ends */}





 {/* Hose Starts */}
       
 {/* <div class="card">  */}
 <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center" >3. Fire Hose Reels</h1> <br></br>
            <div class="col-md-4 col-lg-4 col-sm-4" id="hoseimg">
            <img src={firehose} class="d-block w-100" alt="..."></img>
                </div>
                    <div class="col-md-7 col-lg-7 col-sm-7 " >
                            <div class="card-body">
                                <p class="card-text" id="hose">Fire hose reels are ideal for extinguishing class A fires. That is fires that are fuelled by paper, rubber, wood, and other non-conductive materials. As fire hose reels discharge water, they cannot be used to combat electrical fires. There are other types of fire safety equipment designed to deal with electrical fires – namely C02 fire extinguishers.</p>
                                <br></br>
                            </div>
                            </div>
                            <br></br>
                        </div> 

                        
                    {/* </div> */}

        {/* Hose ends */}




     {/* Signage Starts */}
       
     {/* <div class="card">  */}
     <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">4. Signage</h1> <br></br>
            <div class="col-md-6 col-lg-6 col-sm-6" >
            <div class="card-body">
                <p class="card-text" id="signage">All fire equipment should be accompanied by standard signage. This helps users identify the location and type of equipment they can access in an emergency. There is a range of different regulations when it comes to fire safety signage. Each piece of equipment is accompanied by an Indian standard for maintenance and installation. The corresponding guide will contain more information about signage and where it should be located.</p>
                <br></br>
            </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4" id="signageimg">
            <img src={firesignage} class="d-block w-100" alt="..."></img>
            </div>
            
            <br></br>
        </div> 
       
        {/* </div> */}
        

{/* Signage ends */}





 {/* Sprinklers Starts */}
       
 {/* <div class="card">  */}
 <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center" >5. Sprinklers</h1> <br></br>
            <div class="col-md-4 col-lg-4 col-sm-4" id="sprinklersimg">
            <img src={firesprinkler} class="d-block w-100" alt="..."></img>
                </div>
                    <div class="col-md-7 col-lg-7 col-sm-7 " >
                            <div class="card-body">
                                <p class="card-text" id="sprinklers">When it comes to the design, installation, and maintenance of fire sprinkler systems in India, there are a number of standards that could apply to your building.</p>
                                <br></br>
                            </div>
                            </div>
                            <br></br>
                        </div> 

                        
                    {/* </div> */}

        {/* Sprinklers ends */}



     {/* Firstaid Starts */}
       
     {/* <div class="card">  */}
     <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">6. First Aid Kits</h1> <br></br>
            <div class="col-md-6 col-lg-6 col-sm-6" >
            <div class="card-body">
                <p class="card-text" id="firstaid">They might not be the first thing to spring to mind when you think of the different types of fire safety equipment, but first aid kits are essential in the aftermath of a fire. Having adequate first aid measures on hand will help with minor injuries sustained during a fire. It’s also a matter of compliance – as a business owner or manager, you need to provide your staff members with first aid.</p>
                <br></br>
            </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4" id="firstaidimg">
            {/* <img src={pay} class="img-fluid rounded-start" alt="..."></img> */}
            <img src={firefirstaid} class="d-block w-100" alt="..."></img>
            </div>
            
            <br></br>
        </div> 
       
        {/* </div> */}
        

{/* Firstaid ends */}




 {/* Emergency Starts */}
       
 {/* <div class="card"> */}
     <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center" >7. Emergency & Exit Signs</h1> <br></br>
            <div class="col-md-4 col-lg-4 col-sm-4" id="emergencyimg">
            <img src={fireexit} class="d-block w-100" alt="..."></img>
                </div>
                    <div class="col-md-7 col-lg-7 col-sm-7 " >
                            <div class="card-body">
                                <p class="card-text" id="emergency">Whilst firefighting equipment is important during an emergency when a flame is out of control, you need to evacuate a building. Emergency and exit signs will help to provide a clear path to an exit during a fire. Having clear signage and lighting will help contain panic and guide your team members to an appropriate exit in time. Emergency and exit lights need to be maintained according to the AS 2293:2005 (Set) standard for Emergency escape lighting and exit signs.</p>
                                <br></br>
                            </div>
                            </div>
                            <br></br>
                        </div> 

                        
                    {/* </div> */}

        {/* Emergency ends */}




        {/* Smoke Starts */}
       
     {/* <div class="card"> */}
         <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">8. Smoke Alarms</h1> <br></br>
            <div class="col-md-6 col-lg-6 col-sm-6" >
            <div class="card-body">
                <p class="card-text" id="smoke">Some types of fire safety equipment are designed for detection. Smoke alarms should be installed in all commercial and domestic buildings. If you are a landlord, the legislation for smoke alarm installation varies from state to state. You can find more information about your obligations on your state government website.</p>
                <br></br>
            </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4" id="smokeimg">
            <img src={smokealarm} class="d-block w-100" alt="..."></img>
            </div>
            
            <br></br>
        </div> 
       
        {/* </div> */}
        

{/* Smoke ends */}




 {/* Maintain Starts */}
       
 {/* <div class="card">  */}
 <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center" >Fire Equipment & Maintenance</h1> <br></br>
            <div class="col-md-4 col-lg-4 col-sm-4" id="maintainimg">
            <img src={fire2} class="d-block w-100" alt="..."></img>
                </div>
                    <div class="col-md-7 col-lg-7 col-sm-7 " >
                            <div class="card-body">
                                <p class="card-text" id="maintain">At Fire Safety, we provide inspection and testing services for businesses across the nation. We test and assess fire blankets, hose reels, extinguishers, smoke alarms, and emergency and exit lights. Contact us now to ensure your workplace is compliant with the current safety standards.</p>
                                <br></br>
                            </div>
                            </div>
                            <br></br>
                        </div> 

                        
                    {/* </div> */}

        {/* Maintain ends */}


                {/* expand Starts */}
       
     {/* <div class="card"> */}
         <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">Expand</h1> <br></br>
            <div class="card-body">
                <p class="card-text" id="expand">Fire extinguishers are one of the most important tools available in the fight against small fires. Their importance and efficacy cannot be understated: an estimated 90% of fires are stopped using extinguishers before they have the opportunity to grow and deal more destruction. Because these are so effective, it is critical that they are properly maintained so that they can be used efficiently at a moment’s notice. But maintenance is not a simple task: it requires vigilant checks from professionals, and those checks must be conducted in accordance with regulations set out by the Indian government. If you need to provision for fire extinguisher testing but can’t decide on a provider, here’s a deeper look at Jim’s Fire Safety and why we can offer the very best in fire extinguisher maintenance.</p>
                <br></br>
            </div>
            
            <br></br>
        </div> 
       
        {/* </div> */}
        

{/* expand ends */}









        </div>
        {/* fire1 divv ends */}






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

export default Fire;