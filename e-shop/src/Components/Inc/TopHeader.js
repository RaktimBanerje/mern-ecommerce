import React from 'react'

const TopHeader = () => {
    return (
        <React.Fragment>
            <div className="agile-main-top">
                <div className="container">
                    <div className="row main-top-w3l py-2">
                        <div className="col-lg-3 col-sm-4 header-most-top">
                            <p className=" text-lg-left text-center">Welcome to our shop!</p>
                        </div>
                        <div className="col-lg-9 col-sm-8 header-right ml-auto text-sm-right text-center">
                            
                            <ul className="top-header-lists">
                                <li>
                                    <a className="play-icon popup-with-zoom-anim " href="#small-dialog1">
                                        <i className="fas fa-map-marker mr-1"></i>Select Location</a>
                                </li>
                                <li className="mx-3">
                                    <a href="" data-toggle="modal" data-target="#exampleModal" className="" id="login-btn">
                                        <i className="fas fa-sign-in-alt mr-1"></i> Log In </a>
                                </li>
                                <li>
                                    <a href="" data-toggle="modal" data-target="#exampleModal2" className="" id="register-btn">
                                        <i className="fas fa-sign-out-alt mr-1"></i>Register </a>
                                </li>
                                <li>
                                    <a href="<?php echo base_url() ?>signout" className="" id="logout-btn">
                                        Logout </a>
                                </li>
        
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="small-dialog1" className="mfp-hide">
                <div className="select-city">
                    <h3>
                        <i className="fas fa-map-marker"></i> Please Select Your Location</h3>
                    <select className="list_of_cities">
                        <optgroup label="Popular Cities">
                            <option selected style={{display:"none", color:"#eee"}}>Select City</option>
                            <option>Birmingham</option>
                            <option>Anchorage</option>
                            <option>Phoenix</option>
                            <option>Little Rock</option>
                            <option>Los Angeles</option>
                            <option>Denver</option>
                            <option>Bridgeport</option>
                            <option>Wilmington</option>
                            <option>Jacksonville</option>
                            <option>Atlanta</option>
                            <option>Honolulu</option>
                            <option>Boise</option>
                            <option>Chicago</option>
                            <option>Indianapolis</option>
                        </optgroup>
                        <optgroup label="Alabama">
                            <option>Birmingham</option>
                            <option>Montgomery</option>
                            <option>Mobile</option>
                            <option>Huntsville</option>
                            <option>Tuscaloosa</option>
                        </optgroup>
                        <optgroup label="Alaska">
                            <option>Anchorage</option>
                            <option>Fairbanks</option>
                            <option>Juneau</option>
                            <option>Sitka</option>
                            <option>Ketchikan</option>
                        </optgroup>
                        <optgroup label="Arizona">
                            <option>Phoenix</option>
                            <option>Tucson</option>
                            <option>Mesa</option>
                            <option>Chandler</option>
                            <option>Glendale</option>
                        </optgroup>
                        <optgroup label="Arkansas">
                            <option>Little Rock</option>
                            <option>Fort Smith</option>
                            <option>Fayetteville</option>
                            <option>Springdale</option>
                            <option>Jonesboro</option>
                        </optgroup>
                        <optgroup label="California">
                            <option>Los Angeles</option>
                            <option>San Diego</option>
                            <option>San Jose</option>
                            <option>San Francisco</option>
                            <option>Fresno</option>
                        </optgroup>
                        <optgroup label="Colorado">
                            <option>Denver</option>
                            <option>Colorado</option>
                            <option>Aurora</option>
                            <option>Fort Collins</option>
                            <option>Lakewood</option>
                        </optgroup>
                        <optgroup label="Connecticut">
                            <option>Bridgeport</option>
                            <option>New Haven</option>
                            <option>Hartford</option>
                            <option>Stamford</option>
                            <option>Waterbury</option>
                        </optgroup>
                        <optgroup label="Delaware">
                            <option>Wilmington</option>
                            <option>Dover</option>
                            <option>Newark</option>
                            <option>Bear</option>
                            <option>Middletown</option>
                        </optgroup>
                        <optgroup label="Florida">
                            <option>Jacksonville</option>
                            <option>Miami</option>
                            <option>Tampa</option>
                            <option>St. Petersburg</option>
                            <option>Orlando</option>
                        </optgroup>
                        <optgroup label="Georgia">
                            <option>Atlanta</option>
                            <option>Augusta</option>
                            <option>Columbus</option>
                            <option>Savannah</option>
                            <option>Athens</option>
                        </optgroup>
                        <optgroup label="Hawaii">
                            <option>Honolulu</option>
                            <option>Pearl City</option>
                            <option>Hilo</option>
                            <option>Kailua</option>
                            <option>Waipahu</option>
                        </optgroup>
                        <optgroup label="Idaho">
                            <option>Boise</option>
                            <option>Nampa</option>
                            <option>Meridian</option>
                            <option>Idaho Falls</option>
                            <option>Pocatello</option>
                        </optgroup>
                        <optgroup label="Illinois">
                            <option>Chicago</option>
                            <option>Aurora</option>
                            <option>Rockford</option>
                            <option>Joliet</option>
                            <option>Naperville</option>
                        </optgroup>
                        <optgroup label="Indiana">
                            <option>Indianapolis</option>
                            <option>Fort Wayne</option>
                            <option>Evansville</option>
                            <option>South Bend</option>
                            <option>Hammond</option>
                        </optgroup>
                        <optgroup label="Iowa">
                            <option>Des Moines</option>
                            <option>Cedar Rapids</option>
                            <option>Davenport</option>
                            <option>Sioux City</option>
                            <option>Waterloo</option>
                        </optgroup>
                        <optgroup label="Kansas">
                            <option>Wichita</option>
                            <option>Overland Park</option>
                            <option>Kansas City</option>
                            <option>Topeka</option>
                            <option>Olathe </option>
                        </optgroup>
                        <optgroup label="Kentucky">
                            <option>Louisville</option>
                            <option>Lexington</option>
                            <option>Bowling Green</option>
                            <option>Owensboro</option>
                            <option>Covington</option>
                        </optgroup>
                        <optgroup label="Louisiana">
                            <option>New Orleans</option>
                            <option>Baton Rouge</option>
                            <option>Shreveport</option>
                            <option>Metairie</option>
                            <option>Lafayette</option>
                        </optgroup>
                        <optgroup label="Maine">
                            <option>Portland</option>
                            <option>Lewiston</option>
                            <option>Bangor</option>
                            <option>South Portland</option>
                            <option>Auburn</option>
                        </optgroup>
                        <optgroup label="Maryland">
                            <option>Baltimore</option>
                            <option>Frederick</option>
                            <option>Rockville</option>
                            <option>Gaithersburg</option>
                            <option>Bowie</option>
                        </optgroup>
                        <optgroup label="Massachusetts">
                            <option>Boston</option>
                            <option>Worcester</option>
                            <option>Springfield</option>
                            <option>Lowell</option>
                            <option>Cambridge</option>
                        </optgroup>
                        <optgroup label="Michigan">
                            <option>Detroit</option>
                            <option>Grand Rapids</option>
                            <option>Warren</option>
                            <option>Sterling Heights</option>
                            <option>Lansing</option>
                        </optgroup>
                        <optgroup label="Minnesota">
                            <option>Minneapolis</option>
                            <option>St. Paul</option>
                            <option>Rochester</option>
                            <option>Duluth</option>
                            <option>Bloomington</option>
                        </optgroup>
                        <optgroup label="Mississippi">
                            <option>Jackson</option>
                            <option>Gulfport</option>
                            <option>Southaven</option>
                            <option>Hattiesburg</option>
                            <option>Biloxi</option>
                        </optgroup>
                        <optgroup label="Missouri">
                            <option>Kansas City</option>
                            <option>St. Louis</option>
                            <option>Springfield</option>
                            <option>Independence</option>
                            <option>Columbia</option>
                        </optgroup>
                        <optgroup label="Montana">
                            <option>Billings</option>
                            <option>Missoula</option>
                            <option>Great Falls</option>
                            <option>Bozeman</option>
                            <option>Butte-Silver Bow</option>
                        </optgroup>
                        <optgroup label="Nebraska">
                            <option>Omaha</option>
                            <option>Lincoln</option>
                            <option>Bellevue</option>
                            <option>Grand Island</option>
                            <option>Kearney</option>
                        </optgroup>
                        <optgroup label="Nevada">
                            <option>Las Vegas</option>
                            <option>Henderson</option>
                            <option>North Las Vegas</option>
                            <option>Reno</option>
                            <option>Sunrise Manor</option>
                        </optgroup>
                        <optgroup label="New Hampshire">
                            <option>Manchesters</option>
                            <option>Nashua</option>
                            <option>Concord</option>
                            <option>Dover</option>
                            <option>Rochester</option>
                        </optgroup>
                        <optgroup label="New Jersey">
                            <option>Newark</option>
                            <option>Jersey City</option>
                            <option>Paterson</option>
                            <option>Elizabeth</option>
                            <option>Edison</option>
                        </optgroup>
                        <optgroup label="New Mexico">
                            <option>Albuquerque</option>
                            <option>Las Cruces</option>
                            <option>Rio Rancho</option>
                            <option>Santa Fe</option>
                            <option>Roswell</option>
                        </optgroup>
                        <optgroup label="New York">
                            <option>New York</option>
                            <option>Buffalo</option>
                            <option>Rochester</option>
                            <option>Yonkers</option>
                            <option>Syracuse</option>
                        </optgroup>
                        <optgroup label="North Carolina">
                            <option>Charlotte</option>
                            <option>Raleigh</option>
                            <option>Greensboro</option>
                            <option>Winston-Salem</option>
                            <option>Durham</option>
                        </optgroup>
                        <optgroup label="North Dakota">
                            <option>Fargo</option>
                            <option>Bismarck</option>
                            <option>Grand Forks</option>
                            <option>Minot</option>
                            <option>West Fargo</option>
                        </optgroup>
                        <optgroup label="Ohio">
                            <option>Columbus</option>
                            <option>Cleveland</option>
                            <option>Cincinnati</option>
                            <option>Toledo</option>
                            <option>Akron</option>
                        </optgroup>
                        <optgroup label="Oklahoma">
                            <option>Oklahoma City</option>
                            <option>Tulsa</option>
                            <option>Norman</option>
                            <option>Broken Arrow</option>
                            <option>Lawton</option>
                        </optgroup>
                        <optgroup label="Oregon">
                            <option>Portland</option>
                            <option>Eugene</option>
                            <option>Salem</option>
                            <option>Gresham</option>
                            <option>Hillsboro</option>
                        </optgroup>
                        <optgroup label="Pennsylvania">
                            <option>Philadelphia</option>
                            <option>Pittsburgh</option>
                            <option>Allentown</option>
                            <option>Erie</option>
                            <option>Reading</option>
                        </optgroup>
                        <optgroup label="Rhode Island">
                            <option>Providence</option>
                            <option>Warwick</option>
                            <option>Cranston</option>
                            <option>Pawtucket</option>
                            <option>East Providence</option>
                        </optgroup>
                        <optgroup label="South Carolina">
                            <option>Columbia</option>
                            <option>Charleston</option>
                            <option>North Charleston</option>
                            <option>Mount Pleasant</option>
                            <option>Rock Hill</option>
                        </optgroup>
                        <optgroup label="South Dakota">
                            <option>Sioux Falls</option>
                            <option>Rapid City</option>
                            <option>Aberdeen</option>
                            <option>Brookings</option>
                            <option>Watertown</option>
                        </optgroup>
                        <optgroup label="Tennessee">
                            <option>Memphis</option>
                            <option>Nashville</option>
                            <option>Knoxville</option>
                            <option>Chattanooga</option>
                            <option>Clarksville</option>
                        </optgroup>
                        <optgroup label="Texas">
                            <option>Houston</option>
                            <option>San Antonio</option>
                            <option>Dallas</option>
                            <option>Austin</option>
                            <option>Fort Worth</option>
                        </optgroup>
                        <optgroup label="Utah">
                            <option>Salt Lake City</option>
                            <option>West Valley City</option>
                            <option>Provo</option>
                            <option>West Jordan</option>
                            <option>Orem</option>
                        </optgroup>
                        <optgroup label="Vermont">
                            <option>Burlington</option>
                            <option>Essex</option>
                            <option>South Burlington</option>
                            <option>Colchester</option>
                            <option>Rutland</option>
                        </optgroup>
                        <optgroup label="Virginia">
                            <option>Virginia Beach</option>
                            <option>Norfolk</option>
                            <option>Chesapeake</option>
                            <option>Arlington</option>
                            <option>Richmond</option>
                        </optgroup>
                        <optgroup label="Washington">
                            <option>Seattle</option>
                            <option>Spokane</option>
                            <option>Tacoma</option>
                            <option>Vancouver</option>
                            <option>Bellevue</option>
                        </optgroup>
                        <optgroup label="West Virginia">
                            <option>Charleston</option>
                            <option>Huntington</option>
                            <option>Parkersburg</option>
                            <option>Morgantown</option>
                            <option>Wheeling</option>
                        </optgroup>
                        <optgroup label="Wisconsin">
                            <option>Milwaukee</option>
                            <option>Madison</option>
                            <option>Green Bay</option>
                            <option>Kenosha</option>
                            <option>Racine</option>
                        </optgroup>
                        <optgroup label="Wyoming">
                            <option>Cheyenne</option>
                            <option>Casper</option>
                            <option>Laramie</option>
                            <option>Gillette</option>
                            <option>Rock Springs</option>
                        </optgroup>
                    </select>
                    <div className="clearfix"></div>
                </div>
            </div>
                            
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center">Log In</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form action="<?php echo base_url();?>signin" method="post">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Username" name="email" required="" value="raktimbanerjee9@gmail.com" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password" name="password"
                                        required="" value="Raktim365249" />
                                </div>
                                <div className="right-w3l">
                                    <input type="submit" className="form-control" value="Log in" />
                                </div>
                                <div className="sub-w3l">
                                    <div className="custom-control custom-checkbox mr-sm-2">
                                        <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                                        <label className="custom-control-label" htmlFor="customControlAutosizing">Remember me?</label>
                                    </div>
                                </div>
                                <p className="text-center dont-do mt-3">Don't have an account?
                                    <a href="#" data-toggle="modal" data-target="#exampleModal2">
                                        Register Now</a>
                                </p>
                                <p className="text-center dont-do mt-3">(Or)</p>
                                <div className="social text-center mt-2">
                                    <ul className="list-unstyled">
                                        <li className="d-inline">
                                            <a className="icon fb" href="#facebook">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li className="d-inline mx-1">
                                            <a className="icon tw" href="#twitter">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="d-inline">
                                            <a className="icon gp" href="#google-plus">
                                                <i className="fab fa-google-plus-g"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Register</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
        
                            <div id="register-alert" className="alert"></div>
        
                            <form id="register-form">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Name" name="name" value="Raktim Banerjee" />
                                    <div className="invalid-feedback d-block"></div>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email" name="email" value="raktimbanerjee9@gmail.com" />
                                    <div className="invalid-feedback d-block"></div>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password" name="password"
                                        id="password1" value="Raktim365249" />
                                    <div className="invalid-feedback d-block"></div>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Confirm Password"
                                        name="confirm_password" id="password2" value="Raktim365249" />
                                    <div className="invalid-feedback d-block"></div>
                                </div>
                                <div className="right-w3l">
                                    <input type="submit" className="form-control" value="Register" />
                                </div>
                                <div className="sub-w3l">
                                    <div className="custom-control custom-checkbox mr-sm-2">
                                        <input type="checkbox" className="custom-control-input" id="customControlAutosizing2" name="t&c" />
                                        <label className="custom-control-label" htmlFor="customControlAutosizing2">I Accept to the Terms
                                            & Conditions</label>
                                    </div>
                                </div>
                                <p className="text-center dont-do mt-3">(Or)</p>
                                <div className="social text-center mt-2">
                                    <ul className="list-unstyled">
                                        <li className="d-inline">
                                            <a className="icon fb" href="#facebook">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li className="d-inline mx-1">
                                            <a className="icon tw" href="#twitter">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="d-inline">
                                            <a className="icon gp" href="#google-plus">
                                                <i className="fab fa-google-plus-g"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default TopHeader
