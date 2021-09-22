import React, { useEffect,useState } from 'react'
import categoryApi from '../../Services/api/category.api'

import Navbar from '../Inc/Navbar'
import Menu from '../Inc/Menu'
import Footer from '../Inc/Footer'

const ListCategory = () => {
    const [ categories, setCategories ] = useState([])

    useEffect(()=>{
        categoryApi.getAll()
        .then(res => setCategories(res.data))
        .catch(() => console.log('Something went wrong!'))
    },[])
    
    return (
        <div id="page-top">

            <div id="wrapper">

                <Menu />

                <div id="content-wrapper" className="d-flex flex-column">
                    
                    <Navbar />
                    
                    <div id="content">
 
                        <div className="container-fluid">
                         
                            <h1 className="h3 mb-4 text-gray-800">List category</h1>
                            
                            <table className="table table-striped table-hover">
                                <thead className="thead-dark">
                                    <tr>                                   
                                        <th scope="col" className="text-center">Category</th>
                                        <th scope="col" className="text-center">Parent</th>
                                        <th scope="col" className="text-center">Action</th>                                    
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        categories.map(category => (
                                            <tr key={category._id}>
                                                <td className="text-center">{category.name}</td>
                                                <td className="text-center">{category.parentName}</td>
                                                <td className="text-center">
                                                    <div className="btn-toolbar justify-content-center" role="toolbar" aria-label="Toolbar with button groups">
                                                        <div className="btn-group mr-2" role="group" aria-label="First group">
                                                            <button type="button" className="btn btn-success">Edit</button>
                                                        </div>
                                                        <div className="btn-group mr-2" role="group" aria-label="Second group">
                                                            <button type="button" className="btn btn-danger" disabled={category.parentName == 'No Parent'}>Delete</button>
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

export default ListCategory
