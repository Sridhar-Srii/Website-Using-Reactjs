import pay from "../Images/@Pay.jpg"
import emines from "../Images/eMines.jpg"
import ehotel from "../Images/eHotel.jpg"
import eoptics from "../Images/eOptics.jpg"
import epetro from "../Images/ePetro.jpg"
import ereckon from "../Images/eReckon.jpg"
import eskool from "../Images/eskool.jpg"
import eweigh from "../Images/eWeigh.jpg"
import firesafety from "../Images/FireSafety.jpg"
import readymix from "../Images/readymix.jpg"
import mines from "../Images/mines.jpg"
import mines2 from "../Images/mines2.jpg"
import mines3 from "../Images/mines3.jpg"
import payroll from "../Images/payroll.jpg"
import payroll2 from "../Images/payroll2.jpg"
import payroll3 from "../Images/payroll3.jpg"
import petrol from "../Images/petrol.jpg"
import petrol2 from "../Images/petrol2.jpg"
import petrol3 from "../Images/petrol3.jpg"
import optics from "../Images/optics.jpg"
import optics2 from "../Images/optics2.jpg"
import optics3 from "../Images/optics3.jpg"
import skool from "../Images/skool.jpg"
import skool2 from "../Images/skool2.jpg"
import skool3 from "../Images/skool3.jpg"
import hotel from "../Images/hotel.jpg"
import hotel2 from "../Images/hotel2.jpg"
import hotel3 from "../Images/hotel3.jpg"
import reckon from "../Images/reckon.jpg"
import reckon2 from "../Images/reckon2.jpg"
import reckon3 from "../Images/reckon3.jpg"
import weigh from "../Images/weigh.jpg"
import weigh2 from "../Images/weigh2.jpg"
import weigh3 from "../Images/weigh3.jpg"
import batching from "../Images/batching.webp"
import batching2 from "../Images/batching2.jpg"
import batching3 from "../Images/batching3.jpg"
import logo from "../Images/logo.png"
import { Link, NavLink} from "react-router-dom"
// import React, { useState, useEffect } from 'react';
import "./Home.css"



function Home () {


    // when hover dropdown works js ;;;

    // document.addEventListener("DOMContentLoaded", function(){
    //     // make it as accordion for smaller screens
    //     if (window.innerWidth > 992) {
        
    //         document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
        
    //             everyitem.addEventListener('mouseover', function(e){
        
    //                 let el_link = this.querySelector('a[data-bs-toggle]');
        
    //                 if(el_link != null){
    //                     let nextEl = el_link.nextElementSibling;
    //                     el_link.classList.add('show');
    //                     nextEl.classList.add('show');
    //                 }
        
    //             });
    //             everyitem.addEventListener('mouseleave', function(e){
    //                 let el_link = this.querySelector('a[data-bs-toggle]');
        
    //                 if(el_link != null){
    //                     let nextEl = el_link.nextElementSibling;
    //                     el_link.classList.remove('show');
    //                     nextEl.classList.remove('show');
    //                 }
        
        
    //             })
    //         });
        
    //     }
    //     // end if innerWidth
    //     }); 
    //     // DOMContentLoaded  end
  
    

     // Enable hover on desktop and click on mobile
  if (window.matchMedia("(min-width: 992px)").matches) {
    // Desktop
    document.querySelectorAll('.nav-item.dropdown').forEach(function (elem) {
      elem.addEventListener('mouseover', function () {
        elem.querySelector('.dropdown-menu').classList.add('show');
      });
      elem.addEventListener('mouseout', function () {
        elem.querySelector('.dropdown-menu').classList.remove('show');
      });
    });
  } else {
    // Mobile
    document.querySelectorAll('.nav-item.dropdown').forEach(function (elem) {
      elem.addEventListener('click', function () {
        elem.querySelector('.dropdown-menu').classList.toggle('show');
      });
    });
  }

 



  


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



{/* Img Slider Starts */}


<div id="slider">
            
             <div className="container-fluid p-4"> 
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="" data-bs-interval="3000">
                <div class="carousel-inner" >

                    <div class="carousel-item active">
                    <img src={pay} class="d-block w-100" alt="..."></img>
                    </div>

                    <div class="carousel-item">
                    <img src={emines} class="d-block w-100" alt="..."></img>
                    </div>

                    <div class="carousel-item">
                    <img src={ehotel} class="d-block w-100" alt="..."></img>
                    </div>

                    <div class="carousel-item">
                    <img src={eoptics} class="d-block w-100" alt="..."></img>
                    </div>

                    <div class="carousel-item">
                    <img src={epetro} class="d-block w-100" alt="..."></img>
                    </div>

                    <div class="carousel-item">
                    <img src={ereckon} class="d-block w-100" alt="..."></img>
                    </div>

                    <div class="carousel-item">
                    <img src={eskool} class="d-block w-100" alt="..."></img>
                    </div>

                    <div class="carousel-item">
                    <img src={eweigh} class="d-block w-100" alt="..."></img>
                    </div>

                    <div class="carousel-item">
                    <img src={firesafety} class="d-block w-100" alt="..."></img>
                    </div>

                    <div class="carousel-item">
                    <img src={readymix} class="d-block w-100" alt="..."></img>
                    </div>
                
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
        </div>
        
</div> 


{/* Image Slider Ends */}



        {/* About us Start */}
       
    <div class="card " id="about" > <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">About Us</h1> <br></br>
            <div class="col-md-6 col-lg-6 col-sm-6" >
            <div class="card-body">
                <p class="card-text" id="about1">We are pleased to inform you that our company “Gomath Technologies” with the experience of last 20 years in electronic & Software Development Field.We have separate team for R&D, Marketing & Service which is continuously engaged in development of new products and improvement in the existing ones. And also we examined the needs of our clients and we provide the best service always to all our customers.</p>
            </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4" id="aboutimg">
            <img src={emines} class="img-fluid rounded-start" alt="..."></img>
            </div>
            <br></br>
            {/* <hr className="container"></hr> */}
        </div> 
      
       
        {/* About us Ends */}




        {/* Software Starts */}
   
    <div className="container-fluid card" id="soft">
       <br></br>
    <div className="container" data-aos="fade-up" data-aos-duration="1000">
        <h1 className="text-center">Software</h1> <br></br>
        <div class="row row-cols-1 row-cols-md-3 g-5">
           

    {/* payroll */}

    <div id="carouselExampleFade1" class="carousel slide carousel-fade" data-bs-ride="carousel" data-aos="fade-up" data-aos-duration="1000">
                <div class="carousel-inner" id="img">
                    <div class="carousel-item active">
                    <img src={payroll} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={payroll2} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={payroll3} class="d-block w-100" alt="..."></img>
                    </div>

                    <div>
                        {/* <h2 className="carousel-caption overlay" id="text">@Pay</h2> */}
                        <h2><Link to="/pay" className="carousel-caption overlay" id="text">@Pay</Link></h2>
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
            
    {/* petrol starts */}


        <div id="carouselExampleFade2" class="carousel slide carousel-fade" data-bs-ride="carousel" data-aos="fade-up" data-aos-duration="1000">
                <div class="carousel-inner" id="img">
                    <div class="carousel-item active">
                    <img src={petrol} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={petrol2} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={petrol3} class="d-block w-100" alt="..."></img>
                    </div>

                    <div>
                    <h2><Link to="/petro" className="carousel-caption overlay" id="text">ePetro</Link></h2>
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

        {/* petro ends */}


        {/* optics starts */}


<div id="carouselExampleFade3" class="carousel slide carousel-fade" data-bs-ride="carousel" data-aos="fade-up" data-aos-duration="1000">
                <div class="carousel-inner" id="img">
                    <div class="carousel-item active">
                    <img src={optics} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={optics2} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={optics3} class="d-block w-100" alt="..."></img>
                    </div>

                    <div>
                    <h2><Link to="/optic" className="carousel-caption overlay" id="text">eOptics</Link></h2>
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

{/* skool */}

<div id="carouselExampleFade4" class="carousel slide carousel-fade" data-bs-ride="carousel" data-aos="fade-up" data-aos-duration="1000">
                <div class="carousel-inner" id="img">
                    <div class="carousel-item active">
                    <img src={skool} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={skool2} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={skool3} class="d-block w-100" alt="..."></img>
                    </div>

                    <div>
                    <h2><Link to="/skool" className="carousel-caption overlay" id="text">eSkool</Link></h2>
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

        
    {/* hotel */}

<div id="carouselExampleFade5" class="carousel slide carousel-fade" data-bs-ride="carousel" data-aos="fade-up" data-aos-duration="1000">
                <div class="carousel-inner" id="img">
                    <div class="carousel-item active">
                    <img src={hotel} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={hotel2} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={hotel3} class="d-block w-100" alt="..."></img>
                    </div>

                    <div>
                    <h2><Link to="/hotel" className="carousel-caption overlay" id="text">eHotel</Link></h2>
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



    {/* mines */}

    <div id="carouselExampleFade6" class="carousel slide carousel-fade" data-bs-ride="carousel" data-aos="fade-up" data-aos-duration="1000">
                <div class="carousel-inner" id="img">
                    <div class="carousel-item active">
                    <img src={mines} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={mines2} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={mines3} class="d-block w-100" alt="..."></img>
                    </div>

                    <div>
                    <h2><Link to="/mines" className="carousel-caption overlay" id="text">eMines</Link></h2>
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

    {/* reckon */}

<div id="carouselExampleFade7" class="carousel slide carousel-fade" data-bs-ride="carousel" data-aos="fade-up" data-aos-duration="1000">
                <div class="carousel-inner" id="img">
                    <div class="carousel-item">
                    <img src={reckon} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item active">
                    <img src={reckon2} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={reckon3} class="d-block w-100" alt="..."></img>
                    </div>
                
                    <div>
                    <h2><Link to="/reckon" className="carousel-caption overlay" id="text">eReckon</Link></h2>
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


        {/* weigh */}

<div id="carouselExampleFade8" class="carousel slide carousel-fade" data-bs-ride="carousel" data-aos="fade-up" data-aos-duration="1000">
                <div class="carousel-inner" id="img">
                    <div class="carousel-item active">
                    <img src={weigh} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={weigh2} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={weigh3} class="d-block w-100" alt="..."></img>
                    </div>

                    <div>
                    <h2><Link to="/weigh" className="carousel-caption overlay" id="text">eWeigh</Link></h2>
                    </div>
                
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade8" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade8" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
        </div>

        {/* batching */}

<div id="carouselExampleFade9" class="carousel slide carousel-fade" data-bs-ride="carousel" data-aos="fade-up" data-aos-duration="1000">
                <div class="carousel-inner" id="img">
                    <div class="carousel-item active">
                    <img src={batching} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={batching2} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={batching3} class="d-block w-100" alt="..."></img>
                    </div>

                    <div>
                    <h2><Link to="/" className="carousel-caption overlay" id="text">eBatch</Link></h2>
                    </div>
                
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade9" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade9" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
        </div>







            

    </div>
    
    </div>
    <br></br>
    {/* <hr className="container"></hr> */}
    
   
   
   
    {/* Software ends */}



    {/* Product Starts */}

            
            <div className="container-fluid card" id="product1">
                <br></br>
            <div className="container" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">Product</h1>
            <br></br>
            <input type="checkbox" id="check"></input>
            <p id="product">Time and attendance is the process of tracking work hours. In the past, this was always a manual system. Employees may have manually completed a time card and that information was used for payroll and benefits. Another option for tracking time was a punch clock. As technology continued to advance, there were newer options for tracking time and attendance. One such advance utilizes scanning to track time.</p>

            <p className="content" id="product">Employees are issued smart cards, which resemble ATM cards. The Smart Card is then flash through a smart card reader to capture the time the employee is punching in and out. Nowadays, there are various systems available to measure time & attendance, from manual to complete automation. A Biometric-based Time Attendance system provides the desired automation while ensuring authenticity and eliminating impersonation.</p>
            
            <label for="check">Read More</label>
            </div>
            <br></br>
            </div>

        {/* Product ends */}

        </div> 
{/* software page divv */}



        </div> 
    {/* About page div !! */}
   
       



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

export default Home;