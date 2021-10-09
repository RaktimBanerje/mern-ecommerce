import React from 'react'

import LeftPanel from './Inc/LeftPanel'

const Index = () => {
	return (
		<div>

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

									
									{/* <?php foreach($products as $product) { ?> */}

										<div className="col-md-4 product-men mt-md-0 mt-5">
											<div className="men-pro-item simpleCart_shelfItem">
												<div className="men-thumb-item text-center">
													<img src="<?php echo asset_url() . '/product_images/' . $product->photo; ?>" alt="" className="img-fluid" />
													<div className="men-cart-pro">
														<div className="inner-men-cart-pro">
															<a href="single.html" className="link-product-add-cart">Quick View</a>
														</div>
													</div>
													<span className="product-new-top">New</span>

												</div>
												<div className="item-info-product text-center mt-2">
													<h4 className="pt-1">
														{/* <a href="single.html"><?php echo $product->name; ?></a> */}
													</h4>
													<div className="info-product-price">
														{/* <span className="item_price"><?php echo $product->selling_price; ?></span> */}
														{/* <del><?php echo $product->market_price; ?></del> */}
													</div>
													<div
														className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
														{/* <?php 
															if( $this->session->loggedIn )
																echo ("
																<form id='addCart'>
																	<fieldset>
																		<input type='hidden' name='qty' value='1' />
																		<input type='hidden' name='id' value='$product->productId' >
																		<input type='hidden' name='category' value='$product->category' >
																		<input type='submit' name='submit' value='Add to cart'
																			className='btn btn-style btn-style-secondary mt-3' />
																	</fieldset>
																</form>");
															else
																echo ('
																	<button className="btn btn-style btn-style-secondary mt-3" data-toggle="modal" data-target="#exampleModal">Add to cart</button>
																');
														?> */}

													</div>
												</div>
											</div>
										</div>

									{/* <?php } ?> */}
									
									
								</div>
							</div>						
							
						</div>
					</div>
					
				</div>
			</div>
			</div>

			<div className="overlay"></div>

		</div>
	)
}

export default Index