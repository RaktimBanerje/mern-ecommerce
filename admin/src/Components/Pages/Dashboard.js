import React from 'react'

import Navbar from '../Inc/Navbar'
import Menu from '../Inc/Menu'
import Footer from '../Inc/Footer'

const Dashboard = () => {

    return (
        <div id="page-top">

            <div id="wrapper">

                <Menu />

                <div id="content-wrapper" className="d-flex flex-column">
                            
                    <div id="content">

                        <Navbar />

                        <div className="container-fluid">
                         
                            <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>
        
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

export default Dashboard
