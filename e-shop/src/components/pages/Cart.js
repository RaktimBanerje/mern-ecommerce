import React, { useEffect, useContext, useState } from 'react'
import axios from 'axios'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { UserContext } from '../../App'
import cartApi from '../../services/api/cart.api'
import stripeApi from '../../services/api/stripe.api'
import authApi from '../../services/api/auth.api'

import TopHeader from '../inc/TopHeader'
import HeaderBottom from '../inc/HeaderBottom'
import Navigation from '../inc/Navigation'
import Banner from '../inc/Banner'
import Advertisement from '../inc/Advertisement'
import Middle from '../inc/Middle'
import Footer from '../inc/Footer'
import Copyright from '../inc/Copyright'
import CartList from '../inc/CartList'
import FieldControl from '../FormComponent/FieldControl'

const Cart = () => { 
    const { state, setState } = useContext(UserContext)

    const [shippingDetails, setShippingDetails] = useState({
        name: '', 
        phone: '',
        address_line: '',
        zip: '',
        landmark: '',
        city: ''
    })

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        phone: Yup.string().required('Required'),
        address_line: Yup.string().required('Required'),
        zip: Yup.string().required('Required'),
        landmark: Yup.string().required('Required'),
        city: Yup.string().required('Required'),
    })

    useEffect(() => {

        axios.all([cartApi.get(), authApi.getUser()])
            .then(response => {
                const cartResponse = response[0]
                const userResponse = response[1]

                if(cartResponse.status === 200) setState(state => ({...state, cart: cartResponse.data}))
                else alert('Something went wrong')

                if(userResponse.status === 200){
                    setState(state => ({...state, user: userResponse.data}))
                    setShippingDetails({
                        name: userResponse.data.name,
                        phone: userResponse.data.phone,
                        address_line: userResponse.data.address.address_line,
                        zip: userResponse.data.address.zip,
                        landmark: userResponse.data.address.landmark,
                        city: userResponse.data.address.city,
                    })
                }
                else alert('Something went wrong')
            })
    }, [])
    

    const checkout = async (shippingDetails) => {
        const items = state.cart.map(item => ({
            productId: item.productId,
            qty: item.qty,
        }))

        try{
            const res = await stripeApi.checkout({items, shippingDetails})

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
                                    <h4 className="mb-sm-4 mb-3">Shipping Details</h4>
                                    <Formik
                                        initialValues={shippingDetails}
                                        validationSchema={validationSchema}
                                        onSubmit={checkout}
                                        enableReinitialize
                                    >
                                        <Form className="creditly-card-form agileinfo_form">
                                            <div className="creditly-wrapper wthree, w3_agileits_wrapper">
                                                <div className="information-wrapper">
                                                    <div className="first-row">
                                                        <FieldControl control="input" name="name" label="Name" />
                                                        <FieldControl control="input" name="phone" label="Phone" />
                                                        <FieldControl control="input" name="address_line" label="Address" />
                                                        <FieldControl control="input" name="zip" label="ZIP" />
                                                        <FieldControl control="input" name="landmark" label="Landmark" />
                                                        <FieldControl control="input" name="city" label="City / Town" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="checkout-right-basket">
                                                <input type="submit" name="submit-btn" value="Place Order" className="btn btn-success" />
                                            </div>
                                        </Form>
                                    </Formik>
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
