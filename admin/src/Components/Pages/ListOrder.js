import { useState, useEffect, useContext } from 'react'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'
import { UserContext } from '../../App'
import orderApi from '../../Services/api/order.api'

import Navbar from '../Inc/Navbar'
import Menu from '../Inc/Menu'
import Footer from '../Inc/Footer'
import Invoice from '../Inc/Invoice'



const ListOrder = () => {
    
    const { state, setState } = useContext(UserContext)
    
    const [orderDetails, setOrderDetails] = useState({
        loading: false,
        data: null,
        error: null,
    })

    const getOrderDetails = id => {
        setOrderDetails({loading: true, data: null, error: null})
        orderApi.get(id)
            .then(res => res.status === 200 && setOrderDetails({loading: false, data: res.data}))
            .catch(error => setOrderDetails({
                loading: false, 
                error: 'Something went wrong !'
            }))
    }

    const print = () => {
        html2canvas(document.getElementById('invoice'))
            .then(canvas => {
                var imgData = canvas.toDataURL('image/jpeg')

                const doc = new jsPDF('p', 'pt', 'a4', true)
                doc.addImage({imageData: imgData, x: 8, y: 17, compression: 'FAST'})

                console.log(doc.output('datauristring'))

                var mywindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');                                            
                mywindow.document.write(`<iframe width='100%' height='100%' src="${doc.output('datauristring')}" />`);
                
                mywindow.document.close(); // necessary for IE >= 10
            })
    }

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
                            
                            <div className="table-responsive">
                                <table className="table table-striped">
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
                                                <tr key={order._id}>
                                                    <td>{order.customer.name}</td>
                                                    <td>{order.customer.email}</td>
                                                    <td>{order.shipping_details.phone}</td>
                                                    <td>INR {order.total_amount}</td>
                                                    <td>{new Date(order.createdAt).toLocaleString('en-GB', { timeZone: 'IST' })}</td>
                                                    <td>
                                                        <button className="btn btn-primary" data-toggle="modal" data-target="#order-details" onClick={()=> getOrderDetails(order._id)}>View Details</button>
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

            <div id="order-details" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            { orderDetails.loading && "Loading..."}
                            { orderDetails.error && "Something went wrong"}
                            { orderDetails.data && <Invoice {...orderDetails.data} />}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success btn-lg w-100" onClick={()=> print()}>
                                <i className="fa fa-print mr-1"></i>Print
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ListOrder
