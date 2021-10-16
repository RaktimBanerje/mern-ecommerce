import React from 'react'

const Banner = () => {
    return (       
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item item1 active">
                    <div className="banner-style d-flex align-items-center">
                        <div className="container">
                            <div className="w3l-space-banner">
                                <div className="carousel-caption-banner" style={{maxWidth:"500px"}}>
                                    <p>Get flat
                                        <span>10%</span> Cashback</p>
                                    <h3 className="mt-2">Exciting Deals on Televisions</h3>
                                    <a className="btn btn-style mt-4" href="product.html">Shop Now </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item item2">
                    <div className="banner-style d-flex align-items-center">
                        <div className="container">
                            <div className="w3l-space-banner">
                                <div className="carousel-caption-banner" style={{maxWidth:"500px"}}>
                                    <p>Top
                                        <span>Brands</span> lowest <span>Prices</span></p>
                                    <h3 className="mt-2">Wide Range of Mobile Phones!</h3>
                                    <a className="btn btn-style mt-4" href="product.html">Shop Now </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item item3">
                    <div className="banner-style d-flex align-items-center">
                        <div className="container">
                            <div className="w3l-space-banner">
                                <div className="carousel-caption-banner" style={{maxWidth:"500px"}}>
                                    <p>Get up to
                                        <span>25%</span> Off</p>
                                    <h3 className="mt-2">Smart Watches New Collection!</h3>
                                    <a className="btn btn-style mt-4" href="product.html">Shop Now </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item item4">
                    <div className="banner-style d-flex align-items-center">
                        <div className="container">
                            <div className="w3l-space-banner">
                                <div className="carousel-caption-banner" style={{maxWidth:"500px"}}>
                                    <p>Top
                                        <span>Sale</span> Best <span>Deals</span></p>
                                    <h3 className="mt-2">Fresh, Healthy Air Everywhere!</h3>
                                    <a className="btn btn-style mt-4" href="product.html">Shop Now </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>      
    )
}

export default Banner
