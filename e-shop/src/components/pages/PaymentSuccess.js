import React, { useState, useEffect} from 'react'
import orderApi from '../../services/api/order.api'

import TopHeader from '../inc/TopHeader'
import HeaderBottom from '../inc/HeaderBottom'
import Navigation from '../inc/Navigation'
import Banner from '../inc/Banner'
import Advertisement from '../inc/Advertisement'
import Middle from '../inc/Middle'
import Footer from '../inc/Footer'
import Copyright from '../inc/Copyright'

const PaymentSuccess = () => {
    
    const [message, setMessage] = useState("");

    useEffect(() => {
      // Check to see if this is a redirect back from Checkout
      const query = new URLSearchParams(window.location.search);
      if (query.get("success")) {
        // setMessage("Order placed! You will receive an email confirmation.");
        orderApi.placeOrder({sessionId: query.get("sessionId")})
            .then(res => {
                if(res.status === 200){
                    setMessage("Order placed! You will receive an email confirmation.");
                }
            })
            .catch(error => setMessage('Something went wrong! Don\'t panic. Our team will resolve this issue and after that you will receive an email confirmation'))
    }

    if (query.get("canceled")) {
        setMessage(
          "Order canceled -- continue to shop around and checkout when you're ready."
        );
      }
    }, []);
    
    return (
        <React.Fragment>
            
            <TopHeader />
            <HeaderBottom />
            <Navigation />
            <Banner />
            <Advertisement />	

            <div className="privacy py-5">
                <div className="container py-md-5 py-4">
                    <div className="checkout-right">
                        <h4 className="mb-sm-4 mb-3 text-center">
                           {message}
                        </h4>
                    </div>
                </div>
            </div>

            <div className="overlay"></div>

            <Middle />
            <Advertisement />
            <Footer />
            <Copyright />    
       
        </React.Fragment>
    )
}

export default PaymentSuccess