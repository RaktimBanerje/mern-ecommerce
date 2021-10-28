import { useState, useEffect } from 'react'
import Invoice from '../Inc/Invoice'
import orderApi from '../../Services/api/order.api'

const ViewOrderDetails = ({id}) => {
    const [orderDetails, setOrderDetails] = useState({
        error: null,
        loading: false,
        data: {}
    })

    useEffect(() => {
        setOrderDetails({...orderDetails, loading: true})
        document.getElementById('order-details').style.display = 'block'
        orderApi.get(id)
            .then(res => res.status === 200 && setOrderDetails({loading: false, data:res.data}))
            .catch(error => setOrderDetails({
                loading: false, 
                error: 'Something went wrong !'
            }))
    }, [])
    
    return(
        <div id="order-details" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <Invoice />
                </div>
            </div>
        </div>
    )
}

export default ViewOrderDetails
