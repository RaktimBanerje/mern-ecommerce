import React from 'react'

const LeftPanel = () => {
    return (
        
        <div className="col-lg-3 mt-lg-0 mt-4 p-lg-0 order-lg-first order-last">
            <div className="side-bar p-sm-4 p-3">
                
                <div className="customer-rev left-side py-2">
                    <h3 className="agileits-sear-head mb-3">Customer Review</h3>
                    <ul>
                        <li>
                            <a href="#">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <span>5.0</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <span>4.0</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half"></i>
                                <span>3.5</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <span>3.0</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half"></i>
                                <span>2.5</span>
                            </a>
                        </li>
                    </ul>
                </div>
                
                
                <div className="range py-2">
                    <h3 className="agileits-sear-head mb-3">Price</h3>
                    <div className="w3l-range">
                        <ul>
                            <li>
                                <a href="#">Under $1,000</a>
                            </li>
                            <li className="my-1">
                                <a href="#">$1,000 - $5,000</a>
                            </li>
                            <li>
                                <a href="#">$5,000 - $10,000</a>
                            </li>
                            <li className="my-1">
                                <a href="#">$10,000 - $20,000</a>
                            </li>
                            <li>
                                <a href="#">$20,000 $30,000</a>
                            </li>
                            <li className="mt-1">
                                <a href="#">Over $30,000</a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                
                <div className="left-side py-2">
                    <h3 className="agileits-sear-head mb-3">Discount</h3>
                    <ul>
                        <li>
                            <input type="checkbox" className="checked" />
                            <span className="span">5% or More</span>
                        </li>
                        <li>
                            <input type="checkbox" className="checked" />
                            <span className="span">10% or More</span>
                        </li>
                        <li>
                            <input type="checkbox" className="checked" />
                            <span className="span">20% or More</span>
                        </li>
                        <li>
                            <input type="checkbox" className="checked" />
                            <span className="span">30% or More</span>
                        </li>
                        <li>
                            <input type="checkbox" className="checked" />
                            <span className="span">50% or More</span>
                        </li>
                        <li>
                            <input type="checkbox" className="checked" />
                            <span className="span">60% or More</span>
                        </li>
                    </ul>
                </div>
                
                
                <div className="left-side py-2">
                    <h3 className="agileits-sear-head mb-3">Electronics</h3>
                    <ul>
                        <li>
                            <input type="checkbox" className="checked" />
                            <span className="span">Accessories</span>
                        </li>
                        <li>
                            <input type="checkbox" className="checked" />
                            <span className="span">Cameras & Photography</span>
                        </li>
                        <li>
                            <input type="checkbox" className="checked" />
                            <span className="span">Car & Vehicle Electronics</span>
                        </li>
                        <li>
                            <input type="checkbox" className="checked" />
                            <span className="span">Computers & Accessories</span>
                        </li>
                        <li>
                            <input type="checkbox" className="checked" />
                            <span className="span">GPS & Accessories</span>
                        </li>
                        <li>
                            <input type="checkbox" className="checked" />
                            <span className="span">Headphones</span>
                        </li>
                        <li>
                            <input type="checkbox" className="checked" />
                            <span className="span">Home Audio</span>
                        </li>
                        <li>
                            <input type="checkbox" className="checked" />
                            <span className="span">Home Theater, TV & Video</span>
                        </li>
                        <li>
                            <input type="checkbox" className="checked" />
                            <span className="span">Mobiles & Accessories</span>
                        </li>
                        <li>
                            <input type="checkbox" className="checked" />
                            <span className="span">Portable Media Players</span>
                        </li>
                        <li>
                            <input type="checkbox" className="checked" />
                            <span className="span">Tablets</span>
                        </li>
                        <li>
                            <input type="checkbox" className="checked" />
                            <span className="span">Telephones & Accessories</span>
                        </li>
                        <li>
                            <input type="checkbox" className="checked" />
                            <span className="span">Wearable Technology</span>
                        </li>
                    </ul>
                </div>
                
                
                <div className="left-side py-2">
                    <h3 className="agileits-sear-head mb-3">Cash On Delivery</h3>
                    <ul>
                        <li>
                            <input type="checkbox" className="checked" />
                            <span className="span">Eligible for Cash On Delivery</span>
                        </li>
                    </ul>
                </div>
                
                
                <div className="left-side py-2">
                    <h3 className="agileits-sear-head mb-3">New Arrivals</h3>
                    <ul>
                        <li>
                            <input type="checkbox" className="checked" />
                            <span className="span">Last 30 days</span>
                        </li>
                        <li>
                            <input type="checkbox" className="checked" />
                            <span className="span">Last 90 days</span>
                        </li>
                    </ul>
                </div>
                
                
                <div className="f-grid py-2">
                    <h3 className="agileits-sear-head mb-3">Best Seller</h3>
                    <div className="box-scroll">
                        <div className="scroll">
                            <div className="row">
                                <div className="col-lg-3 col-sm-2 col-3 left-mar">
                                    <img src="<?php echo asset_url(); ?>client_assets/images/k1.png" alt="" className="img-fluid" />
                                </div>
                                <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                                    <a href="#">Samsung Galaxy F62 (Laser Grey, 128 GB) (6 GB RAM)</a>
                                    <a href="#" className="price-mar mt-2">$12,990.00</a>
                                </div>
                            </div>
                            <div className="row my-4">
                                <div className="col-lg-3 col-sm-2 col-3 left-mar">
                                    <img src="<?php echo asset_url(); ?>client_assets/images/k2.png" alt="" className="img-fluid" />
                                </div>
                                <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                                    <a href="#">Samsung 192 L Direct Cool Single Door 3 Star (2021)
                                        Refrigerator</a>
                                    <a href="#" className="price-mar mt-2">$12,499.00</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-sm-2 col-3 left-mar">
                                    <img src="<?php echo asset_url(); ?>client_assets/images/k3.png" alt="" className="img-fluid" />
                                </div>
                                <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                                    <a href="#">boAt Rockerz 450 Bluetooth Headset (Luscious Black, On the
                                        Ear)</a>
                                    <a href="#" className="price-mar mt-2">$1,199.00 </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
        
    )
}

export default LeftPanel
