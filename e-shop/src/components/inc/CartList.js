import CartProduct from './CartProduct'

const CartList = ({cart}) => {
    return (
        <div className="table-responsive">
            <table className="timetable_sub">
                <thead>
                    <tr>
                        <th>SL No.</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    { Array.isArray(cart) && cart.map((item, idx) => <CartProduct idx={idx + 1} {...item} /> ) }
                </tbody>    
            </table>
        </div>
    )
}

export default CartList
