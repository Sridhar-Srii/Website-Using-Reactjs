
import "./Hotel.css"
import hotel from "../Images/hotel.jpg"
import hotel2 from "../Images/hotel2.jpg"
import hotel3 from "../Images/hotel3.jpg"
import hotelfront from "../Images/hotelfront.jpg"
import hotelfront2 from "../Images/hotelfront2.jpg"
import hotelhousekeeping from "../Images/hotelhousekeeping.jpg"
import hotelhousekeeping2 from "../Images/hotelhousekeeping2.jpg"
import hotelcheckin from "../Images/hotelcheckin.jpg"
import hotelcheckout from "../Images/hotelcheckout.jpg"
import hotelrestaurant from "../Images/hotelrestaurant.jpg"
import hotelrestaurant2 from "../Images/hotelrestaurant2.jpg"
import hotelac from "../Images/hotelac.jpg"
import hotelac2 from "../Images/hotelac2.jpg"
import logo from "../Images/logo.png"
import { Link } from "react-router-dom"





function Hotel () {
    

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
<h1 className="text-center m-auto">eHotel</h1>
<br></br>
</div>






        {/* Hotel1 starts */}

        <div class="card" id="card"> <br></br>
        <div class="row g-0 container m-auto">
            <h1 className="text-center">eHotel</h1>
             <br></br>
            <div class="col-md-6 col-lg-6 col-sm-6" >
            <div class="card-body">
                <p class="card-text" id="hotel1">Hotel Management Software is the modern solution which has whole range of integrated modules to cover every aspect of property management. The generalized version of eHotel – Hotel Management Software is wide accepted worldwide with due to its state-of-art technology and extremely easy to use in nature. The major modules of the latest eHotel – Hotel Management Software constitutes of Easy Check-in / Check-out, 2 Click guest reservation, Group Management, House Keeping, Night Audit, Travel Agent, Guest History and lot other.</p>
            </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4" id="hotel1img">
            {/* <img src={pay} class="img-fluid rounded-start" alt="..."></img> */}
            <div id="carouselExampleFade1" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={hotel} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={hotel2} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={hotel3} class="d-block w-100" alt="..."></img>
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

       


        {/* Hotel1 ends */}



        {/* Front starts */}


     
        {/* <div class="card"> */}
             <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center" >Front Office</h1> <br></br>
            <div class="col-md-4 col-lg-4 col-sm-4" id="frontimg">
            {/* <img src={eskool} class="img-fluid rounded-start" alt="..."></img> */}
        <div id="carouselExampleFade2" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={hotelfront} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={hotelfront2} class="d-block w-100" alt="..."></img>
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
                                <p class="card-text" id="front">
                                    <ul>
                                      <li>Reservation of guests and records of reservation for future dates</li>
                                      <li>Group Reservations</li>
                                      <li>Daily Arrival Report</li>
                                      <li>Reservation linked to the guest check-in</li>
                                      <li>Density Chart</li>
                                      <li>Reservation for any date in future</li>
                                      <li>Reservation Advance & Refund</li>
                                      <li>Confirmation Letter Printing</li>
                                    </ul>

                                </p>
                                <br></br>
                            </div>
                            </div>
                        </div> 

                        
                    {/* </div> */}




        {/* Front ends */}



        {/* Checkin starts */}


        {/* <div class="card"  >  */}
        <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">Checkin</h1> <br></br>
            <div class="col-md-6 col-lg-6 col-sm-6" >
            <div class="card-body">
                <p class="card-text" id="checkin">

                <ul>
                    <li>Guest search</li>
                    <li>Multiple Rate Types</li>
                    <li>Today’s expected arrivals and departures</li>
                    <li>Guest History</li>
                    <li>Display of individual room status</li>
                    <li>Option to Scan Guest Documents and store</li>
                    <li>Occupancy chart and guest list on one key stroke</li>
                    <li>Display of room availability/Room occupancy with a single keystroke</li>
                </ul>



                </p>
               
                <br></br>
            </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4" id="checkinimg">
            {/* <img src={eoptics} class="img-fluid rounded-start" alt="..."></img> */}
            <div id="carouselExampleFade3" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={hotelcheckin} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={hotelcheckout} class="d-block w-100" alt="..."></img>
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
            <br></br>
        </div> 
        {/* </div> */}

        {/* Checkin ends */}





        {/* Restaurants starts */}

        
        {/* <div class="card"> */}
             <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center" >Restaurant</h1> <br></br>
            <div class="col-md-4 col-lg-4 col-sm-4" id="resimg">
            {/* <img src={eskool} class="img-fluid rounded-start" alt="..."></img> */}
        <div id="carouselExampleFade4" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={hotelrestaurant} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={hotelrestaurant2} class="d-block w-100" alt="..."></img>
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
                                <p class="card-text" id="res">
                                    <ul>
                                      <li>Order Entry & Billing</li>
                                      <li>Multiple Restaurants definition</li>
                                      <li>Single entry screen for all types orders</li>
                                      <li>Hot Key Control to switch between various menus</li>
                                      <li>Option to Transfer Table / Transfer Order</li>
                                      <li>Support for Multiple location</li>
                                      <li>Hotkeys to shift between locations for quicker billing</li>
                                      <li>Support for Multiple Companies</li>
                                      <li>Transfer Bills to Rooms</li>
                                      <li>KOT/BOT Printing in Kitchen/Bar</li>
                                    </ul>

                                </p>
                                <br></br>
                            </div>
                            </div>
                        </div> 

                        
                    {/* </div> */}

        {/* Restaurants ends */}






         {/* House keeping starts */}


         {/* <div class="card"  >  */}
         <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">House Keeping</h1> <br></br>
            <div class="col-md-6 col-lg-6 col-sm-6" >
            <div class="card-body">
                <p class="card-text" id="checkin">

                <ul>
                    <li>Block/Unblock of Rooms repair/Periodical maintenance</li>
                    <li>Lost & Found Register</li>
                    <li>Marking Rooms as clean /Dirty</li>
                    <li>Laundry Billing</li>
                    <li>Laundry Bills posted to room A/c</li>
                    <li>Mini Bar Billing</li>
                    <li>Mini Bar Bills posted to Room A/c</li>
                    <li>Linen Stock</li>
                </ul>
                </p>
               
                <br></br>
            </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4" id="checkinimg">
            {/* <img src={eoptics} class="img-fluid rounded-start" alt="..."></img> */}
            <div id="carouselExampleFade5" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={hotelhousekeeping} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={hotelhousekeeping2} class="d-block w-100" alt="..."></img>
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

        {/* Housekeeping ends */}





        {/* Account starts */}

        
        {/* <div class="card">  */}
        <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center" >Accounts</h1> <br></br>
            <div class="col-md-4 col-lg-4 col-sm-4" id="acimg">
            {/* <img src={eskool} class="img-fluid rounded-start" alt="..."></img> */}
        <div id="carouselExampleFade6" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={hotelac} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={hotelac2} class="d-block w-100" alt="..."></img>
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
                                <p class="card-text" id="ac">
                                    <ul>
                                     <li>Sales & Purchase records automatically imported</li>
                                     <li>Petty Cash Register</li>
                                     <li>Sundry Debtors/ Sundry Creditors</li>
                                     <li>Bank Book/Cash Book</li>
                                     <li>Day book</li>
                                     <li>Balance Sheet</li>
                                     <li>Trial balance</li>
                                     <li>Profit & Loss Account</li>
                                    </ul>

                                </p>
                                <br></br>
                            </div>
                            </div>
                        </div> 

                        
                    {/* </div> */}

        {/* Account ends */}


        {/*  */}
 <div  id="list">
        <div className="container" data-aos="fade-up" data-aos-duration="1500">

                <div className="row">
                    <div className="col-lg-6">
                        <h2 className="text-center">Guest Services</h2>
                        <ul>
                            <li>Pickup & Drop</li>
                            <li>Guest Messages</li>
                            <li>Lost & Found</li>
                            <li>Guest Complaints</li>
                        </ul>

                </div>
               

                 <div className="col-lg-6">
                        <h2 className="text-center">Night Audit</h2>
                        <ul>
                            <li>Guest Ledger</li>
                            <li>Cancellation Report</li>
                            <li>Flash Report comprising of all out let summary in a single report</li>
                        </ul>

                </div>


                </div>
        </div> <br></br>

        {/*  */}


                {/*  */}

                <div className="container" data-aos="fade-up" data-aos-duration="1500">

                <div className="row">
                    <div className="col-lg-6">
                        <h2 className="text-center">Banquets</h2>
                        <ul>
                            <li>Banquet Status display with date wise availability</li>
                            <li>Multiple Halls</li>
                            <li>Hall wise reservation</li>
                            <li>Customer Wise / Event Wise Function Prospectus Printing</li>
                        </ul>

                </div>


                <div className="col-lg-6">
                        <h2 className="text-center">Reports</h2>
                        <ul>
                            <li>Sales Register</li>
                            <li>Item Wise Sales Register</li>
                            <li>Collection Register</li>
                            <li>Tax Report</li>
                        </ul>

                </div>


                </div>
                </div> <br></br>

                {/*  */}




                {/*  */}

                <div className="container" data-aos="fade-up" data-aos-duration="1500">

                <div className="row">


                <div className="col-lg-6">
                        <h2  className="text-center">Food & Beverages</h2>
                        <ul>
                            <li>Food Recipe Entry</li>
                            <li>Bar Recipe Entry</li>
                            <li>Kitchen/Bar Counter Closing Stock</li>
                        </ul>

                </div>


                <div className="col-lg-6">
                        <h2 className="text-center">Sales & Marketing</h2>
                        <ul>
                            <li>Sales Call Report Entry</li>
                            <li>Sales Call Report Sent on Mail to CEO/GM</li>
                        </ul>

                </div>

                </div>
                </div> <br></br>

                {/*  */}



                {/*  */}

                <div className="container" data-aos="fade-up" data-aos-duration="1500">

                <div className="row">
                    <div className="col-lg-6">
                        <h2 className="text-center">Store</h2>
                        <ul>
                           <li>Multiple Stores</li>
                           <li>Purchase Requisition</li>
                           <li>Purchase Order Printing</li>
                           <li>Issues to Other Stores / Departments</li>
                           <li>Returns from other departments</li>
                           <li>Supplier Rate History</li>
                           <li>Cost Statement</li>
                           <li>Item Ledger Printing</li>
                           <li>Damages can be written off</li>
                           <li>Physical stock entry provision and excess/short comparison printing</li>
                           <li>Vendor Payment</li>
                        </ul>

                </div>


                <div className="col-lg-6">
                        <h2 className="text-center">Billing</h2>
                        <ul>
                           <li>Room Bill Splitting into any no of bills</li>
                           <li>Multiple Bill Settlement</li>
                           <li>Bill Transfer to other rooms</li>
                           <li>Customer Outstanding</li>
                           <li>Sales Register</li>
                           <li>Luxury Tax Register</li>
                           <li>FORM C for Foreign guests</li>
                           <li>Settlement by Cash/Card/Company /Bill On Hold</li>
                        </ul>

                </div>


                </div>
                </div>

                {/*  */}

                </div>

                {/* overall list div!!! */}






                </div>
{/* hotel1 divv ends */}



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

export default Hotel;