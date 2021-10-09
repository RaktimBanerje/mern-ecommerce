import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../Inc/Navbar'
import Menu from '../Inc/Menu'
import Footer from '../Inc/Footer'

import productApi from '../../Services/api/product.api'
import { UserContext } from '../../App'

const ListProduct = () => {

    const { state, setState } = useContext(UserContext)
    
    const getAllProduct = ()=>{
        productApi.getAll()
        .then(res => {
            if(res.status === 200)
                setState({
                    ...state,
                    products: res.data
                })
        })
        .catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        if ( state.products.length === 0 ) {
            getAllProduct()
        }
    },[])

    const deleteProduct = async (productId) => {
        productApi.delete(productId)
            .then(res => {
                if(res.status === 200)
                    getAllProduct()
            })
            .catch(error => {
                alert('Something went wrong')
            })
    }

    return (
        <div id="page-top">

            <div id="wrapper">

                <Menu />

                <div id="content-wrapper" className="d-flex flex-column">
                            
                    <div id="content">

                        <Navbar />

                        <div className="container-fluid">
                         
                            <h1 className="h3 mb-4 text-gray-800">Product List</h1>

                            <table className="table table-striped table-hover">
                                <thead className="thead-dark">
                                    <tr>                                   
                                        <th scope="col" className="text-center">Category</th>
                                        <th scope="col" className="text-center">Name</th>
                                        <th scope="col" className="text-center">Title</th>
                                        <th scope="col" className="text-center">Market Price</th>
                                        <th scope="col" className="text-center">Selling Price</th>
                                        <th scope="col" className="text-center">Photo</th>
                                        <th scope="col" className="text-center">Action</th>                                    
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        state.products.map(product => (
                                            <tr key={product._id}>
                                                <td className="text-center">{product.category}</td>
                                                <td className="text-center">{product.name}</td>
                                                <td className="text-center">{product.title}</td>
                                                <td className="text-center">{product.marketPrice}</td>
                                                <td className="text-center">{product.sellingPrice}</td>
                                                <td className="text-center">
                                                    <img src={`http://localhost:8080/assets/product-image/${product.photo}`} height="200" width="200" />
                                                </td>
                                                <td className="text-center">
                                                    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                                        <div className="btn-group m-2 w-100" role="group" aria-label="First group">
                                                            <Link className="btn btn-success d-block w-100" to={{
                                                                pathname: '/edit-product', 
                                                                search: `?product_id=${product._id}`,
                                                                state: {productId: product._id}
                                                            }}> Edit </Link>
                                                        </div>
                                                        <div className="btn-group m-2 w-100" role="group" aria-label="Second group">
                                                            <button className="btn btn-danger d-block w-100" onClick={()=> window.confirm('Are you sure?') && deleteProduct(product._id) }> Delete </button>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>

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

export default ListProduct
