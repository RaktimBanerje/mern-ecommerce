import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../App'
import cartApi from '../../services/api/cart.api'

const Product = ({
    _id,
    categoryId,
    name,
    sellingPrice,
    marketPrice,
    photo
}) => {

    const { state, setState } = useContext(UserContext)
    
    const addToCart = async (event) => {
        event.preventDefault()
      
        const item = { 
            qty: event.target.qty.value,
            productId: event.target.productId.value,
            categoryId: event.target.categoryId.value,
        }
            
        const res = await cartApi.add(item)

        if(res.status === 200){
            alert('New item is added to your cart')
        }
        else{
            alert('Something went wrong')
        }
    }

    return (
        <div className="col-md-4 product-men mt-md-0 mt-5">
            <div className="men-pro-item simpleCart_shelfItem">
                <div className="men-thumb-item text-center">
                    <img src={`http://localhost:8080/assets/product-image/${photo}`} alt={name} className="img-fluid" />
                    <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                            <a href="single.html" className="link-product-add-cart">Quick View</a>
                        </div>
                    </div>
                    <span className="product-new-top">New</span>

                </div>
                <div className="item-info-product text-center mt-2">
                    <h4 className="pt-1">
                        <a href="single.html">{name}</a>
                    </h4>
                    <div className="info-product-price">
                        <span className="item_price">{sellingPrice}</span>
                        <del>{marketPrice}</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                        <form onSubmit={addToCart}>
                            <fieldset>
                                <input type='hidden' name='qty' value='1' />
                                <input type='hidden' name='productId' value={_id} />
                                <input type='hidden' name='categoryId' value={categoryId} />
                                {
                                    state.loggedIn? 
                                        <input type='submit' name='submit' value='Add to cart' className='btn btn-style btn-style-secondary mt-3' />
                                    :
                                        <Link to="/login" className='btn btn-style btn-style-secondary mt-3' > Add to cart </Link>
                                }                              
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
