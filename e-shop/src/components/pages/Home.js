import React, { useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../App'
import productApi from '../../services/api/product.api'

import LeftPanel from '../inc/LeftPanel'
import TopHeader from '../inc/TopHeader'
import HeaderBottom from '../inc/HeaderBottom'
import Navigation from '../inc/Navigation'
import Banner from '../inc/Banner'
import Advertisement from '../inc/Advertisement'
import Middle from '../inc/Middle'
import Footer from '../inc/Footer'
import Copyright from '../inc/Copyright'
import Product from '../inc/Product'

const Home = () => {

	const { state, setState } = useContext(UserContext)

	useEffect(() => {
		productApi.getAll()
			.then(res => res.status === 200 && setState({...state, products: res.data}))
			.catch(error => alert('Something went wrong'))
	}, [])

	return (
		<div>
			<TopHeader />
			<HeaderBottom />
			<Navigation />
			<Banner />
			<Advertisement />			

			<div className="ads-grid py-5">
				<div className="container py-md-5 py-4">
				
				<h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
					<span className="font-weight-normal">Our</span> New Products</h3>
				
				<div className="row">

					<LeftPanel />
				
					<div className="agileinfo-ads-display col-lg-9 order-lg-last order-first">
						<div className="wrapper">
							
							<div className="product-sec1 px-lg-4">
								<div className="row">							
									{state.products.map(product => <Product {...product} key={product._id} />) }
								</div>
							</div>						
							
						</div>
					</div>
					
				</div>
			</div>
			</div>
			
			<div className="overlay"></div>

			<Middle />
			<Advertisement />
			<Footer />
			<Copyright />    

		</div>
	)
}

export default Home