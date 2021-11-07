import { useContext } from 'react'
import { UserContext } from '../../App'
import cartApi from '../../services/api/cart.api'
import { Link } from 'react-router-dom'
 
const CartProduct = ({
    idx,
    productId,
    name,
    qty,
    price,
    photo
}) => {

    const { state, setState } = useContext(UserContext)
    
    const increment = (values)=>{
        cartApi.increment(values)
            .then(res => {
                if(res.status === 200){
                    cartApi.get()
                        .then(res => res.status === 200 && setState({...state, cart: res.data}))
                        .catch(err => alert('Something went wrong'))  
                }
                else
                    return Promise.reject()    
            })
            .catch(err => alert('Something went wrong'))
    }

    const remove = (values) => {
        console.log(values)
        cartApi.remove(values)  
            .then(res => {
                if(res.status === 200){
                    cartApi.get()
                        .then(res => res.status === 200 && setState({...state, cart: res.data}))
                        .catch(err => alert('Something went wrong'))  
                }
                else
                    return Promise.reject()    
            })
            .catch(err => alert('Something went wrong'))
    }
    
    return (
        <tr className={`rem${idx}`}>
            <td className="invert">{idx}</td>
            <td className="invert-image">
                <Link to="/product-view">
                    <img src={`/assets/product-image/${photo}`} alt={name} className="img-responsive" />
                </Link>
            </td>
            <td className="invert">
                <div className="quantity">
                    <div className="quantity-select">
                        <div className="entry value-minus" onClick={()=> increment({productId: productId, qty: -1})}>&nbsp;</div>
                        <div className="entry value">
                            <span>{qty}</span>
                        </div>
                        <div className="entry value-plus active" onClick={()=> increment({productId: productId, qty: 1})}>&nbsp;</div>
                    </div>
                </div>
            </td>
            <td className="invert">{name}</td>
            <td className="invert">{price}</td>
            <td className="invert">
                <div className="rem">
                    <div className="close1" onClick={()=>remove(idx-1)}></div>
                </div>
            </td>
        </tr>
    )
}

export default CartProduct
