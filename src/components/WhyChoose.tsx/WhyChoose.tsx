
type Props = {}

export default function WhyChoose({}: Props) {
  return (
    <>
    	{/* <!-- Why Choose Us --> */}
	<section className="why-choose-us pb-lg-0">
		<div className="bg-image" style={{backgroundImage: "url(images/icons/bg-pattern-1.png)"}}></div>
		<div className="auto-container">
			<div className="row">
				{/* <!-- Content Column --> */}
				<div className="content-column col-lg-6">
					<div className="inner-column wow fadeInRight">
						<div className="sec-title light">
							<span className="sub-title">Why Choose Us</span>
							<h2>WHY WE ARE THE BEST SOLAR PROVIDER</h2>
						</div>
						{/* <!-- Feature Block --> */}
						<div className="feature-block-two pb-30">
							<div className="inner-box">
								<i className="icon fas fa-check"></i>
								<h4 className="title">TOP QUALITY FOR LOWEST PRICE</h4>
								<p className="text">High quality solar power system for lower price in the market.</p>
							</div>
						</div>
						{/* <!-- Feature Block --> */}
						<div className="feature-block-two border-bottom-0">
							<div className="inner-box">
								<i className="icon fas fa-check"></i>
								<h4 className="title">ACCESS ENERGY BEST SUPERVISION</h4>
								<p className="text">Solar Power System Installation Done Under The supervision of Qualified Engineer And Well Experienced Technical Team.</p>
							</div>
						</div>
						{/* <!-- Feature Block --> */}
						<div className="feature-block-two border-bottom-0">
							<div className="inner-box">
								<i className="icon fas fa-check"></i>
								<h4 className="title">QUICK SERVICE</h4>
								<p className="text">Efficient and speedy after sales services.</p>
							</div>
						</div>
						{/* <!-- Feature Block --> */}
						<div className="feature-block-two border-bottom-0">
							<div className="inner-box">
								<i className="icon fas fa-check"></i>
								<h4 className="title">POWER GENERATION GURANTEE</h4>
								<p className="text">25-30 years Power generation gurantee for the solar module and 10 years warranty for the invertor.</p>
							</div>
						</div>
						{/* <!-- Feature Block --> */}
						<div className="feature-block-two border-bottom-0">
							<div className="inner-box">
								<i className="icon fas fa-check"></i>
								<h4 className="title">SYSTEM WEB MONITORING</h4>
								<p className="text">Centralized monitoring system lets you monitor your entire solar system in real time</p>
							</div>
						</div>
						{/* <!-- Feature Block --> */}
						<div className="feature-block-two border-bottom-0">
							<div className="inner-box">
								<i className="icon fas fa-check"></i>
								<h4 className="title">OUR INSTALLATION STANDARD</h4>
								<p className="text">Installation in done according to SEA (sustainable energy authority) & CEB/LECO standard.</p>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- form Column --> */}
				<div className="form-column col-lg-6">
					<div className="inner-column">
						<p className="fs-6 mb-5 text-light">We believe in a future where renewable energy sources play a vital role in reducing carbon emissions and creating a sustainable planet.</p>
						{/* <!-- Contact Form --> */}
						<div className="contact-form wow fadeInLeft">
							{/* <!--Contact Form--> */}
							<form method="post" action="get" id="contact-form">
								<div className="row">
									<div className="col-lg-12 form-group">
										<input className="form-control" type="text" name="full_name" placeholder="Your Name" required />
									</div>
									<div className="col-lg-12 form-group">
										<input className="form-control" type="text" name="Email" placeholder="Your Email" required />
									</div>
									<div className="col-lg-12 form-group">
										<input className="form-control" type="text" name="Phone" placeholder="Phone No" required />
									</div>
									<div className="col-lg-12 form-group">
										<textarea name="form_message" className="form-control required" rows={6} placeholder="Enter Message"></textarea>
									</div>
									<div className="col-lg-12 col-md-12 col-sm-12 form-group">
										<button className="theme-btn btn-style-three" type="submit" name="submit-form"><span className="btn-title">Submit Request</span></button>
									</div>
								</div>
							</form>
						</div>
						{/* <!--End Contact Form --> */}
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- End Why Choose Us --> */}
    </>
  )
}