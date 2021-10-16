import React from 'react'

const Middle = () => {
    return (        
        <div className="join-w3l1 py-sm-5 py-4">
            <div className="container py-xl-4 py-lg-2">
                <div className="row">
                    <div className="col-lg-6">
                        <a href="product2.html">
                            <div className="join-agile text-left p-4">
                                <div className="row">
                                    <div className="col-sm-7 offer-name">
                                        <h6>New Collections, New Trendy</h6>
                                        <h4 className="mb-3">Smart Watches</h4>
                                        <p>Sale up to 25% off all in store</p>
                                    </div>
                                    <div className="col-sm-5 offerimg-w3l">
                                        <img src="<?php echo asset_url(); ?>client_assets/images/off1.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-6 mt-lg-0 mt-4">
                        <a href="product.html">
                            <div className="join-agile text-left p-4">
                                <div className="row ">
                                    <div className="col-sm-7 offer-name">
                                        <h6>Top Brands, lowest Prices</h6>
                                        <h4 className="mb-3">Smart Phones</h4>
                                        <p>Free shipping order over $100</p>
                                    </div>
                                    <div className="col-sm-5 offerimg-w3l">
                                        <img src="<?php echo asset_url(); ?>client_assets/images/off2.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default Middle
