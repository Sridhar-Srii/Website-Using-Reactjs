
import "./Pay.css"
import payrollabout1 from "../Images/payrollabout1.jpg"
import payrollabout2 from "../Images/payrollabout2.jpg"
import payrollneed1 from "../Images/payrollneed1.jpg"
import payrollneed2 from "../Images/payrollneed2.jpg"
import payrollbeniefit1 from "../Images/payrollbeniefit1.jpg"
import payrollbeniefit2 from "../Images/payrollbeniefit2.jpg"
import payroll from "../Images/payroll.jpg"
import payroll2 from "../Images/payroll2.jpg"
import payroll3 from "../Images/payroll3.jpg"
import logo from "../Images/logo.png"
import { Link } from "react-router-dom"



function Pay() {

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
<h1 className="text-center m-auto">@Pay</h1>
<br></br>
</div>






        {/* pay1 starts */}


        <div class="card" id="card"> <br></br>
        <div class="row g-0 container m-auto">
            <h1 className="text-center">@Pay (Attendance And Payroll Software)</h1> <br></br>
            <div class="col-md-6 col-lg-6 col-sm-6" >
            <div class="card-body">
                <p class="card-text" id="pay1">Gomath Technologies is specialized in providing the solution for Attendance & Payroll Software. It is designed to handle all the need in systematic effectual and easier way. Payroll Software helps us to establish and maintain long relationship with our customer and it has unlimited choices of options and configuration setting that fits the industrial recruitment of the customer and provide you better care of your products. Payroll Software brings us new opportunities and reduces involvement of time taking and complex day- to- day tasks.</p>
            </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4" id="payimg1">
            {/* <img src={pay} class="img-fluid rounded-start" alt="..."></img> */}
            <div id="carouselExampleFade1" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={payroll} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={payroll2} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={payroll3} class="d-block w-100" alt="..."></img>
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


        {/* pay1 ends */}



        {/* About software starts */}



        {/* <div class="card"> */}
             <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center" >About our Software</h1> <br></br>
            <div class="col-md-4 col-lg-4 col-sm-4" id="aboutpayimg">
            {/* <img src={eskool} class="img-fluid rounded-start" alt="..."></img> */}
        <div id="carouselExampleFade2" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={payrollabout1} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={payrollabout2} class="d-block w-100" alt="..."></img>
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
                                <h5>Introduction of Attendance & Payroll Software</h5>
                                <p class="card-text" id="aboutpay">
                                    <ul>
                                        <li>Payroll system is an integral part of an organization.</li>
                                        <li>The Payroll system should take care of calculation of salary as per rules of the Company, statutory compliances like Provident Fund, ESIC, TDS etc.</li>
                                        <li>The Salary Payroll system should be able to generate Pay slips, Attendance and Salary summary and other MIS reports.</li>
                                        <li>Payroll is a method of administering employee’s salaries in an organization.</li>
                                        <li>The process consists of calculation of employee salaries and miscellaneous deductions, administrating employee benefits and payment of salaries.</li>
                                        <li>Our Time Attendance Payroll Management System is fully capable of maintaining such tedious tasks with a lot of ease and comfort.</li>
                                        <li>Salary Payroll Software helps saves much time.</li>
                                    </ul>

                                </p>
                                <br></br>
                            </div>
                            </div>
                            <br></br>
                        </div> 

                        
                    {/* </div> */}

        {/* About software starts */}



        {/* Needs starts */}


        {/* <div class="card"  >  */}
        <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">Why its Needs?</h1> <br></br>
            <div class="col-md-6 col-lg-6 col-sm-6" >
            <div class="card-body">
                <p class="card-text" id="needs">

                <ul>
                <li>Automatic calculation of Attendance, Leaves, Salary etc in Time Attendance software.</li>
                <li>No need to worry about maintaining records manually.</li>
                <li>Complete detail of an Employee on single click.</li>
                <li>No need to worry to calculate Statutory compliance like PF, ESIC, TDS, Professional Tax etc. in Salary Payroll Software.</li>
                <li>Ready to file Statutory Returns (PF, ESIC and TDS) on single click.</li>
                <li>Proper documentation of every employee. No need to look after manual folders and files.</li>
                <li>Complete details of Company maintaining Salary Payroll Software on single click.</li>
                <li>Multi-year, Multi-location, Multi-company option.</li>
                <li>Protection of data from illegal users.</li>
                </ul>



                </p>
               
                <br></br>
            </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4" id="needsimg">
            {/* <img src={eoptics} class="img-fluid rounded-start" alt="..."></img> */}
            <div id="carouselExampleFade3" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={payrollneed1} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={payrollneed2} class="d-block w-100" alt="..."></img>
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

        {/* Needs ends */}



        {/* Benefits starts */}


            
        {/* <div class="card">  */}
        <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center" >Benefits of Payroll</h1> <br></br>
            <div class="col-md-4 col-lg-4 col-sm-4" id="benefitsimg">
            {/* <img src={eskool} class="img-fluid rounded-start" alt="..."></img> */}
        <div id="carouselExampleFade4" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={payrollbeniefit1} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={payrollbeniefit2} class="d-block w-100" alt="..."></img>
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
                                <p class="card-text" id="benefits">
                                    <ul>
                                       <li>Our salary payroll System has user friendly interface.</li>
                                       <li>You can enter payment information quickly by Marg Salary Payroll Software as compared to a manual system.</li>
                                       <li>Computerized payrolls simplify tax processing by computing the data.</li>
                                       <li>Our payroll system can integrate with Biometric software’ s as well.</li>
                                       <li>Computerized payroll eliminates the stress of processing all the records.</li>
                                       <li>You can get your old payroll reports when you needed in just a click</li>
                                       <li>This time attendance payroll system will track and maintain all the information of salary transfer.</li>
                                       <li>Payroll system helps saves much time.</li>
                                    </ul>

                                </p>
                                <br></br>
                            </div>
                            </div>
                        </div> 

                        
                    {/* </div> */}

        {/* Benefits ends */}




        {/* Features starts */}


        {/* <div className="card "> */}
        <div className="row g-0 container-fluid m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">Features of Attendance & Payroll Software</h1>
        <div class="col-md-4 col-lg-6 col-sm-4" >
                            <div class="card-body">
                                <p class="card-text" id="features">
                                    <ul>
                                      <li>Attendance</li>
                                      <li>SMS Intimation of Attendance & Salary</li>
                                      <li>Leave Management</li>
                                      <li>Salary Calculation</li>
                                      <li>Statutory Compliance</li>
                                      <li>Over Time calculation</li>
                                      <li>Salary Calculation</li>
                                      <li>Send Salary Slip Through Mail</li>
                                    </ul>

                                </p>
                            </div>
                            </div>

                            <div class="col-md-4 col-lg-6 col-sm-4" >
                            {/* <div class="card-body"> */}
                                <p class="card-text" id="features1">
                                    <ul>
                                    <li>E-TDS Returns</li>
                                    <li>Bonus Management</li>
                                    <li>Arrear Calculation & Arrear Slip</li>
                                    <li>Tax Projection</li>
                                    <li>Full Settlement of Employee</li>
                                    <li>HRD Modules</li>
                                    <li>User Level Access Rights</li>
                                    <li>Employee Birthday Notifications</li>
                                    </ul>

                                </p>
                                <br></br>
                            {/* </div> */}
                            </div>
                        
                        
                            </div>
                            {/* </div> */}

        {/* Features ends */}


        {/* Reports starts */}


    {/* <div className="card"> */}
            <div class="container table-responsive py-5" data-aos="fade-up" data-aos-duration="1500"> 
            <h1 className="text-center">Available Reports</h1>
            <br></br>
            <table class="table table-bordered table-hover">
            <thead class="thead-dark">
                <tr>
                <th scope="col">Reports</th>
                <th scope="col">Available Reports</th>
                
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row"></th>
                <td>Present</td>
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Absent</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Latecomers, Earlygoing (SMS Option)</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Daily Performance</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Leave</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>WeeklyOff</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Permission / Onduty</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Manual Punch List</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Alloted Shift Report</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Daily Abstract</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Working Hours</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Working Hours</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Daily Break IN/Out</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Daily IN/Out Details</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Time In/Out Details</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td></td>
                
                </tr>
                
                <tr>
                <th scope="row">Monthly-Yearly</th>
                <td>Muster Roll with IN/ Out</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Attendance Abstract</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>OT (form 10)</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Leave Register (Form 15)</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Form F</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td></td>
                
                </tr>
                <tr>
                <th scope="row">Pay Reports</th>
                <td>Monthly, Weekly, 15 Days salary sheetPayslip (SMS & Email Option)</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Payslip (SMS & Email Option)</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Salary Bank Statement</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>PF, ESIC List and CSV file for online upload purpose</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Daily, Weekly, 15days Monthly Abstract</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Yearly Status</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>OT, WO Report</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Allowances/Deduction Abstract</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Allowances/Deduction Detailed</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Muster Roll</td>
                
                </tr>
                
                
            </tbody>
            </table>
    </div>                     


                        
    <div class="container table-responsive py-5" data-aos="fade-up" data-aos-duration="1500"> 
            <table class="table table-bordered table-hover">
            <thead class="thead-dark">
                <tr>
                <th scope="col">PF-ESI-TAX Reports</th>
                <th scope="col">PF/ESI Statement</th>
                
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row"></th>
                <td>PF Form 5 , 10</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Professional Tax and TDS deduction Report</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>ESIC Challans</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>PF Challan</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>PF form 3a, 6a</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>ESI form 6,7,16</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td></td>
                
                </tr>
                <tr>
                <th scope="row">Employee Reports</th>
                <td>Employee List with full details (code wise, dept wise, shift wise and staffs)</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Increment Report (code wise, dept wise, shift wise and staffs)</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Salary Increment Details</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Resigned Employee Details</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Birthday List (Month wise)</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>ESI form 6,7,16</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Bank Account Number Report</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td></td>
                
                </tr>
                <tr>
                <th scope="row">HRD Procedures</th>
                <td>Final Settlement</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Gratuity</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Transfer, promotion & Increments</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Transfer Details (Shift / Department)</td>
                
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Promotion Details (Post / Salary)</td>
                
                </tr>
                
                


            </tbody>
            </table>
    </div>




     {/* </div> */}


        {/* Reports ends*/}

        </div>
{/* pay1 divvv ends */}



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

export default Pay;