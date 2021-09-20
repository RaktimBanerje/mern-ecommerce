import React, { useEffect, useContext } from 'react'
import { UserContext } from '../../App'

import categoryApi from '../../Services/api/category.api'
import {Link} from 'react-router-dom';
const Menu = () => {
    const {categories, setCategories} = useContext(UserContext)

    // useEffect(()=>{
    //     categoryApi.getAll()
    //       .then(res => res.status === 200 && setCategories(res.data))
    //       .catch(err => {})        
    // },[])
    
    return (
        <React.Fragment>

            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                                    
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Ecommerce</div>
                </a>
                
                <hr className="sidebar-divider my-0" />

                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></Link>
                </li>
                
                

                
                <li className="nav-item">
                    <Link className="nav-link" to="/add-category">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Add Category</span></Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/list-category">
                        <i className="fas fa-fw fa-table"></i>
                        <span>List Category</span></Link>
                </li>

                
                <hr className="sidebar-divider d-none d-md-block" />

                

        </ul>

        </React.Fragment>
    )
}

export default Menu