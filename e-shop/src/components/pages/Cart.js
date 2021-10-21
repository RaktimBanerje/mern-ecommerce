import React, { useEffect, useContext} from 'react'
import { UserContext } from '../../App'
import cartApi from '../../services/api/cart.api'
import stripeApi from '../../services/api/stripe.api' 

import TopHeader from '../inc/TopHeader'
import HeaderBottom from '../inc/HeaderBottom'
import Navigation from '../inc/Navigation'
import Banner from '../inc/Banner'
import Advertisement from '../inc/Advertisement'
import Middle from '../inc/Middle'
import Footer from '../inc/Footer'
import Copyright from '../inc/Copyright'
import CartList from '../inc/CartList'

const Cart = () => {
    
    const { state, setState } = useContext(UserContext)

    useEffect(() => {
        cartApi.get()
            .then(res => res.status === 200 && setState({...state, cart: res.data}))
            .catch(err => alert('Something went wrong'))
    }, [])
    

    const checkout = async () => {
        const values = state.cart.map(item => ({
            productId: item.productId,
            qty: item.qty,
        }))

        try{
            const res = await stripeApi.checkout({items: values})

            if(res.status === 200){
                window.location = res.data.redirecURL
            }   
        }
        catch{
            alert('Something went wrong')
        }
    }

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
                        <h4 className="mb-sm-4 mb-3">
                            {
                                state.cart.length > 0 ? 
                                    `Your shopping cart contains: ${state.cart.length} Products`
                                :
                                    'Your shopping cart is empty'
                            }                            
                        </h4>
                        { state.cart.length > 0 && <CartList cart={state.cart} /> }
                    </div>
                    {
                        state.cart.length > 0 && 
                        (
                            <div className="checkout-left">
                                <div className="address_form_agile mt-sm-5 mt-4">
                                    <h4 className="mb-sm-4 mb-3">Add a new Details</h4>
                                    <form action="https://demo.w3layouts.com/demos_new/template_demo/11-06-2021/electronics-mart-liberty-demo_Free/1081434887/web/payment.html" method="post" className="creditly-card-form agileinfo_form">
                                        <div className="creditly-wrapper wthree, w3_agileits_wrapper">
                                            <div className="information-wrapper">
                                                <div className="first-row">
                                                    <div className="controls form-group">
                                                        <input className="billing-address-name form-control" type="text" name="name"
                                                            placeholder="Full Name" required="" />
                                                    </div>
                                                    <div className="w3_agileits_card_number_grids">
                                                        <div className="w3_agileits_card_number_grid_left form-group">
                                                            <div className="controls">
                                                                <input type="text" className="form-control" placeholder="Mobile Number"
                                                                    name="number" required="" />
                                                            </div>
                                                        </div>
                                                        <div className="w3_agileits_card_number_grid_right form-group">
                                                            <div className="controls">
                                                                <input type="text" className="form-control" placeholder="Landmark"
                                                                    name="landmark" required="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="controls form-group">
                                                        <input type="text" className="form-control" placeholder="Town/City" name="city"
                                                            required="" />
                                                    </div>
                                                    <div className="controls form-group">
                                                        <select className="option-w3ls">
                                                            <option>Select Address type</option>
                                                            <option>Office</option>
                                                            <option>Home</option>
                                                            <option>Commercial</option>
                
                                                        </select>
                                                    </div>
                                                </div>
                                                <button className="submit check_out btn">Delivery to this Address</button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="checkout-right-basket">
                                        <a onClick={() => checkout()}>Make a Payment
                                            <span className="far fa-hand-point-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )    
                    }
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

export default Cart
