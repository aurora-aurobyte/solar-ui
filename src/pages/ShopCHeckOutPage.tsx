

type Props = {}

export default function ShopCHeckOutPage({}: Props) {
  return (
    <>
    
	{/* <!-- Start main-content --> */}
	<section className="page-title" style={{backgroundImage: "url(images/background/page-title-bg.png)"}}>
		<div className="auto-container">
			<div className="title-outer text-center">
				<h1 className="title">Checkout</h1>
				<ul className="page-breadcrumb">
					<li><a href="index.html">Home</a></li>
					<li>Shop</li>
				</ul>
			</div>
		</div>
	</section>
	{/* <!-- end main-content --> */}

	{/* <!--checkout Start--> */}
	<section>
  	<div className="container pt-70">
  		<div className="section-content">
  		<form id="checkout-form" action="#">
  			<div className="row mt-30">
  			<div className="col-md-6">
  				<div className="billing-details">
  				<h3 className="mb-30">Billing Details</h3>
  				<div className="row">
  					<div className="mb-3 col-md-6">
  					<label htmlFor="checkuot-form-fname">First Name</label>
  					<input id="checkuot-form-fname" type="email" className="form-control" placeholder="First Name"/>
  					</div>
  					<div className="mb-3 col-md-6">
  					<label htmlFor="checkuot-form-lname">Last Name</label>
  					<input id="checkuot-form-lname" type="email" className="form-control" placeholder="Last Name"/>
  					</div>
  					<div className="col-md-12">
  					<div className="mb-3">
  						<label htmlFor="checkuot-form-cname">Company Name</label>
  						<input id="checkuot-form-cname" type="email" className="form-control" placeholder="Company Name"/>
  					</div>
  					<div className="mb-3">
  						<label htmlFor="checkuot-form-email">Email Address</label>
  						<input id="checkuot-form-email" type="email" className="form-control" placeholder="Email Address"/>
  					</div>
  					<div className="mb-3">
  						<label htmlFor="checkuot-form-address">Address</label>
  						<input id="checkuot-form-address" type="email" className="form-control" placeholder="Street address"/>
  					</div>
  					<div className="mb-3">
  						<input type="email" className="form-control" placeholder="Apartment, suite, unit etc. (optional)"/>
  					</div>
  					</div>
  					<div className="mb-3 col-md-6">
  					<label htmlFor="checkuot-form-city">City</label>
  					<input id="checkuot-form-city" type="email" className="form-control" placeholder="City"/>
  					</div>
  					<div className="mb-3 col-md-6">
  					<label>State/Province</label>
  					<select className="form-control">
  						<option>Select Country</option>
  						<option>Australia</option>
  						<option>UK</option>
  						<option>USA</option>
  					</select>
  					</div>
  					<div className="mb-3 col-md-6">
  					<label htmlFor="checkuot-form-zip">Zip/Postal Code</label>
  					<input id="checkuot-form-zip" type="email" className="form-control" placeholder="Zip/Postal Code"/>
  					</div>
  					<div className="mb-3 col-md-6">
  					<label>Country</label>
  					<select className="form-control">
  						<option>Select Country</option>
  						<option>Australia</option>
  						<option>UK</option>
  						<option>USA</option>
  					</select>
  					</div>
  				</div>
  				</div>
  			</div>
  			<div className="col-md-6">
  				<h3>Additional information</h3>
  				<label htmlFor="order_comments" className="">Order notes&nbsp;<span className="optional">(optional)</span></label>
  				<textarea id="order_comments" className="form-control" placeholder="Notes about your order, e.g. special notes for delivery." rows={3}></textarea>
  			</div>
  			<div className="col-md-12 mt-30">
  				<h3>Your order</h3>
  				<table className="table table-striped table-bordered tbl-shopping-cart">
  				<thead>
  					<tr>
  					<th>Photo</th>
  					<th>Product Name</th>
  					<th>Total</th>
  					</tr>
  				</thead>
  				<tbody>
  					<tr>
  					<td className="product-thumbnail"><a href="shop-product-details.html"><img alt="product" src="images/resource/products/1.jpg"/></a></td>
  					<td className="product-name"><a href="shop-product-details.html">Headphone</a> x 2</td>
  					<td><span className="amount">$36.00</span></td>
  					</tr>
  					<tr>
  					<td className="product-thumbnail"><a href="shop-product-details.html"><img alt="product" src="images/resource/products/2.jpg"/></a></td>
  					<td className="product-name"><a href="shop-product-details.html">Lagage</a> x 3</td>
  					<td><span className="amount">$115.00</span></td>
  					</tr>
  					<tr>
  					<td className="product-thumbnail"><a href="shop-product-details.html"><img alt="product" src="images/resource/products/3.jpg"/></a></td>
  					<td className="product-name"><a href="shop-product-details.html">Watch</a> x 1</td>
  					<td><span className="amount">$68.00</span></td>
  					</tr>
  					<tr>
  					<td>Cart Subtotal</td>
  					<td>&nbsp;</td>
  					<td>$180.00</td>
  					</tr>
  					<tr>
  					<td>Shipping and Handling</td>
  					<td>&nbsp;</td>
  					<td>Free Shipping</td>
  					</tr>
  					<tr>
  					<td>Order Total</td>
  					<td>&nbsp;</td>
  					<td>$250.00</td>
  					</tr>
  				</tbody>
  				</table>
  			</div>
  			<div className="col-md-12 mt-60">
  				<div className="payment-method">
  					<h3>Choose a Payment Method</h3>
  					<ul className="accordion-box">
  						<li className="accordion block active-block">
  							<div className="acc-btn active">
  								<div className="icon-outer"><i className="lnr-icon-chevron-down"></i></div>
  								Credir Card / Debit Card
  							</div>
  							<div className="acc-content current">
  								<div className="payment-info">
  									<div className="row clearfix">
  										<div className="col-lg-6 col-md-6 col-sm-12 column">
  											<div className="field-input mb-3">
  												<input type="text" className="form-control" name="name" placeholder="Name on the Card" required />
  											</div>
  										</div>
  										<div className="col-lg-6 col-md-6 col-sm-12 column">
  											<div className="field-input mb-3">
  												<input type="text" className="form-control" name="number" placeholder="Card Number" required/>
  											</div>
  										</div>
  										<div className="col-lg-3 col-md-6 col-sm-12 column">
  											<div className="field-input mb-3">
  												<input type="text" className="form-control" name="date" placeholder="Expiry Date" required/>
  											</div>
  										</div>
  										<div className="col-lg-3 col-md-6 col-sm-12 column">
  											<div className="field-input mb-3">
  												<input type="text" className="form-control" name="code" placeholder="Security Code" required/>
  											</div>
  										</div>
  										<div className="col-lg-6 col-md-12 col-sm-12 column">
  											<div className="field-input message-btn">
  												<button type="submit" className="theme-btn btn-style-one" data-loading-text="Please wait..."><span className="btn-title">Make Payment</span></button>
  											</div>
  										</div>
  									</div>
  								</div>
  							</div>
  						</li>
  						<li className="accordion block">
  							<div className="acc-btn">
  								<div className="icon-outer"><i className="lnr-icon-chevron-down"></i></div>
  								Direct Bank Transfer
  							</div>
  							<div className="acc-content">
  								<div className="payment-info">
  									<p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
  								</div>
  							</div>
  						</li>
  						<li className="accordion block">
  							 <div className="acc-btn">
  								<div className="icon-outer"><i className="lnr-icon-chevron-down"></i></div>
  								Cheque Payment
  							</div>
  							<div className="acc-content">
  								<div className="payment-info">
  									<p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
  								</div>
  							</div>
  						</li>
  						<li className="accordion block">
  							 <div className="acc-btn">
  								<div className="icon-outer"><i className="lnr-icon-chevron-down"></i></div>
  								Other Payment
  							</div>
  							<div className="acc-content">
  								<div className="payment-info">
  									<p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
  								</div>
  							</div>
  						</li>
  					</ul>
  				</div>
  			</div>
  			</div>
  		</form>
  		</div>
  	</div>
	</section>
	{/* <!--checkout Start--> */}
    </>
  )
}