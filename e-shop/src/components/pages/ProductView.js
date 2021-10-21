import React from 'react'

import TopHeader from '../inc/TopHeader'
import HeaderBottom from '../inc/HeaderBottom'
import Navigation from '../inc/Navigation'
import Banner from '../inc/Banner'
import Advertisement from '../inc/Advertisement'
import Middle from '../inc/Middle'
import Footer from '../inc/Footer'
import Copyright from '../inc/Copyright'

const ProductView = () => {
    return (
        <React.Fragment>

            <TopHeader />
            <HeaderBottom />
            <Navigation />
            <Banner />
            <Advertisement />	
        
            <div class="banner-bootom-w3-agileits py-5">
                <div class="container py-md-5 py-4">
                    <div class="row">
                        <div class="col-lg-5 col-md-8 single-right-left ">
                            <div class="grid images_3_of_2">
                                <div class="flexslider">
                                    <ul class="slides">
                                        <li data-thumb="images/si1.png">
                                            <div class="thumb-image">
                                                <img src="images/si1.png" data-imagezoom="true" class="img-fluid" alt="" /> </div>
                                        </li>
                                        <li data-thumb="images/si2.png">
                                            <div class="thumb-image">
                                                <img src="images/si2.png" data-imagezoom="true" class="img-fluid" alt="" /> </div>
                                        </li>
                                        <li data-thumb="images/si3.png">
                                            <div class="thumb-image">
                                                <img src="images/si3.png" data-imagezoom="true" class="img-fluid" alt="" /> </div>
                                        </li>
                                    </ul>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-7 single-right-left simpleCart_shelfItem">
                            <h3 class="mb-3">Redmi 9 Prime (Space Blue, 64 GB) (4 GB RAM)</h3>
                            <p class="mb-3">
                                <span class="item_price">$360.00</span>
                                <del class="mx-2 font-weight-light">$400.00</del>
                                <label>Free delivery</label>
                            </p>
                            <div class="single-infoagile">
                                <ul>
                                    <li class="mb-3">
                                        Cash on Delivery Eligible.
                                    </li>
                                    <li class="mb-3">
                                        Shipping Speed to Delivery.
                                    </li>
                                    <li class="mb-3">
                                        EMIs from $100/month.
                                    </li>
                                    <li class="mb-3">
                                        Bank Offer Extra 5% off* with Axis Bank Buzz Credit Card
                                    </li>
                                </ul>
                            </div>
                            <div class="product-single-w3l">
                                <p class="my-3">
                                    <i class="far fa-hand-point-right mr-2"></i>
                                    1 Year Manufacturer Warranty
                                    <ul>
                                        <li class="mb-1">
                                            Handset, Power Adapter, USB Type-C Cable, SIM Eject Tool, Simple Protective Cover,
                                            Warranty Card, User Guide
                                        </li>
                                        <li class="mb-1">
                                            Full HD+ IPS Display
                                        </li>
                                        <li class="mb-1">
                                            13MP Rear Camera | 8MP Front Camera
                                        </li>
                                        <li class="mb-1">
                                            5020 mAh
                                        </li>
                                        <li class="mb-1">
                                            2340 x 1080 Pixels
                                        </li>
                                    </ul>
                                    <p class="my-sm-4 my-3">
                                        <i class="far fa-hand-point-right mr-2"></i>Net banking & Credit/ Debit/ ATM card
                                    </p>
                                </p>
                            </div>
                            <div class="occasion-cart">
                                <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                    <form action="#" method="post">
                                        <fieldset>
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="business" value=" " />
                                            <input type="hidden" name="item_name" value="Samsung Galaxy J7 Prime" />
                                            <input type="hidden" name="amount" value="200.00" />
                                            <input type="hidden" name="discount_amount" value="1.00" />
                                            <input type="hidden" name="currency_code" value="USD" />
                                            <input type="hidden" name="return" value=" " />
                                            <input type="hidden" name="cancel_return" value=" " />
                                            <input type="submit" name="submit" value="Add to cart" class="btn btn-style" />
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <Middle />
            <Advertisement />
            <Footer />
            <Copyright />    

        </React.Fragment>
    )
}

export default ProductView
