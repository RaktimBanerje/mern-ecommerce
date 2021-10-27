import { useEffect, useContext } from 'react'
import { UserContext } from '../../App'
import orderApi from '../../Services/api/order.api'

import Navbar from '../Inc/Navbar'
import Menu from '../Inc/Menu'
import Footer from '../Inc/Footer'

const ListOrder = () => {

    const { state, setState } = useContext(UserContext)

    useEffect(() => {
        orderApi.getAll()
            .then(res => res.status === 200 && setState({...state, orders: res.data}))
            .catch(error => alert('Something went wrong'))
    }, [])

    return (
        <div id="page-top">

            <div id="wrapper">

                <Menu />

                <div id="content-wrapper" className="d-flex flex-column">
                            
                    <div id="content">

                        <Navbar />

                        <div className="container-fluid">
                         
                            <h1 className="h3 mb-4 text-gray-800">Order List</h1>
                            
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Total</th>
                                            <th scope="col">Date</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { 
                                            state.orders.map(order => (
                                                <tr>
                                                    <td>{order.customer.name}</td>
                                                    <td>{order.customer.email}</td>
                                                    <td>{order.shipping_details.phone}</td>
                                                    <td>{order.total_amount}</td>
                                                    <td>{order.createdAt}</td>
                                                    <td>
                                                        <button className="btn btn-primary">View Details</button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
        
                        </div>
 
                    </div>

                    <Footer />

                </div>
        
            </div>
                    
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>
            
        </div>
    )
}

export default ListOrder
