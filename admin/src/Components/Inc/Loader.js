import React from 'react'
import { FadeLoader } from "react-spinners";

import Navbar from '../Inc/Navbar'
import Menu from '../Inc/Menu'
import Footer from '../Inc/Footer'

const Loader = () => {

    return (
        <div id="page-top">

            <div id="wrapper">

                <Menu />

                <div id="content-wrapper" className="d-flex flex-column">
                            
                    <div id="content" style={{position: 'relative'}}>

                        <Navbar />
                        
                        <FadeLoader color="#4e73df" loading={true} size={150} css="position: absolute; top: 50%; left: 50%;" />
                   
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

export default Loader
