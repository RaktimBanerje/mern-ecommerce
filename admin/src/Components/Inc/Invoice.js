import { jsPDF } from 'jspdf'

const Invoice = ({_id, shipping_details, items, total_amount, createdAt}) => {
    
    return (
        <div id="invoice" className="container-fluid mt-100 mb-100">
            <div id="ui-view">
                <div>
                    <div className="card">
                        <div className="card-header"> 
                            Invoice #<strong>{_id}</strong>
                        </div>
                        <div className="card-body">
                            <div className="row mb-4">
                                <div className="col-sm-4">
                                    <h6 className="mb-3">From:</h6>
                                    <div><strong>Electronics Mart</strong></div>
                                    <div>546 Aston Avenue</div>
                                    <div>NYC, NY 12394</div>
                                    <div>Email: raktimbanerjee9@gmail.com</div>
                                    <div>Phone: 9836739907</div>
                                </div>
                                <div className="col-sm-4">
                                    <h6 className="mb-3">To:</h6>
                                    <div>{shipping_details.name}</div>
                                    <div>{shipping_details.address}, {shipping_details.landmark}</div>
                                    <div>{shipping_details.city}, {shipping_details.zip}</div>
                                    <div>{shipping_details.phone}</div>
                                </div>
                                <div className="col-sm-4">
                                    <h6 className="mb-3">Details:</h6>
                                    <div><p>ID<strong> #{_id}</strong></p></div>
                                    <div><p>Date: {new Date(createdAt).toLocaleString('en-GB', { timeZone: 'IST' })}</p></div>
                                </div>
                            </div>
                            <div className="table-responsive-sm">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th className="center">#</th>
                                            <th>ITEM</th>
                                            <th className="center">UNIT</th>
                                            <th className="right">COST</th>
                                            <th className="right">TOTAL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { 
                                            items.map((item, idx)=> (
                                                <tr key={idx}>
                                                    <td className="center">{idx + 1}</td>
                                                    <td className="left">{item.name}</td>
                                                    <td className="center">{item.qty}</td>
                                                    <td className="right">INR {item.unit_amount}</td>
                                                    <td className="right">INR {Number(item.qty * item.unit_amount)}</td>
                                                </tr> 
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-sm-5 ml-auto">
                                    <table className="table table-clear">
                                        <tbody>
                                            <tr>
                                                <td className="left"><strong>Total</strong></td>
                                                <td className="right"><strong>INR {total_amount}</strong></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Invoice
