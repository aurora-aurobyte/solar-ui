
type Props = {}

export default function WhyChoose({}: Props) {
  return (
    <>
    	{/* <!-- Why Choose Us --> */}
	<section className="why-choose-us-home2">
		<div className="bg-image d-none d-xl-block" style={{backgroundImage: "url(./images/background/home-2-divider-bg.jpg)"}}></div>
		<div className="bg-shape"><div className="shape" style={{backgroundImage: "url(./images/background/9.jpg)"}}></div></div>

		<div className="container-fluid">
			<div className="row">
				{/* <!-- Image Column --> */}
				<div className="image-column col-xl-7">
					<div className="image-box hide-desktop"><img src="images/background/home-2-divider-bg.jpg" alt="" /></div>
				</div>
				{/* <!-- Content Column --> */}
				<div className="content-column col-xl-4 col-lg-8">
					<div className="inner-column wow fadeInLeft">
						<div className="sec-title light">
							<span className="sub-title">Why Choose Us</span>
							<h2>We are Building Reliable & <br/>Affordable Energy!</h2>
							<div className="text">Develop energy storage systems such as batteries and other technologies that can store excess renewable energy for use later.</div>
							<div className="text">Invest in energy-efficient technologies that can reduce energy consumption and save money on energy bills.</div>
						</div>
						<div className="row">
							{/* <!-- Feature Block Four--> */}
							<div className="feature-block-home2 mb-4 mb-sm-0 col-6">
								<div className="inner-box d-sm-flex align-items-sm-center">
									<i className="icon mr-20 flaticon-solar-panel"></i>
									<h5 className="title mt-3 mt-sm-0 my-0 text-white">Quality Energy <br/>Solution</h5>
								</div>
							</div>
							{/* <!-- Feature Block Four --> */}
							<div className="feature-block-home2 col-6">
								<div className="inner-box d-sm-flex align-items-sm-center">
									<i className="icon mr-20 flaticon-renewable-energy"></i>
									<h5 className="title mt-3 mt-sm-0 my-0 text-white">Fast Technical <br/>Services</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- End Why Choose Us --> */}
    </>
  )
}