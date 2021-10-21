import { Link } from "react-router-dom"

const HeaderBottom = () => {
    return (
        <div className="header-bot my-md-4 my-3" id="site-header">
            <div className="container">
                <div className="row header-bot_inner_wthreeinfo_header_mid align-items-center">
                    
                    <div className="col-lg-3 col-md-4 logo_agile">
                        <h1>
                            <a href="index.html"><span>E</span>lectronics <span>M</span>art</a>
                        </h1>
                    </div>
                    
                    
                    <div className="col-lg-9 col-md-8 header">
                        <div className="row">
                            
                            <div className="col-lg-9 col-sm-8 agileits_search">
                                <form className="form-inline" action="#" method="post" style={{maxWidth:"600px"}}>
                                    <input className="form-control" type="search"
                                        placeholder="Search for products, brands and more" aria-label="Search" required="" />
                                    <button className="btn" type="submit"><i className="fa fa-search"
                                            aria-hidden="true"></i></button>
                                </form>
                            </div>
                            
                            
                            <div
                                className="col-lg-3 col-sm-4 top_nav_right text-center mt-sm-0 mt-2 d-flex align-items-center justify-content-between">
                                <div className="cart-store">
                                    
                                    <div className="cont-ser-position">
                                        <nav className="navigation">
                                            <div className="theme-switch-wrapper">
                                                <label className="theme-switch" htmlFor="checkbox">
                                                    <input type="checkbox" id="checkbox" />
                                                    <div className="mode-container">
                                                        <i className="gg-sun"></i>
                                                        <i className="gg-moon"></i>
                                                    </div>
                                                </label>
                                            </div>
                                        </nav>
                                    </div>
                                    
                                </div>
                                <div className="cart-store">
                                    <a href="checkout.html"><i className="far fa-heart"></i></a>
                                </div>
                                <div className="wthreecartaits wthreecartaits2 cart cart box_1">
                                    <Link to="/cart" className="btn w3view-cart p-0">
                                         <i className="fas fa-shopping-cart" style={{fontSize: '22px'}}></i> Cart
                                    </Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderBottom
