

type Props = {}

export default function About({}: Props) {
  return (
    <>
    {/* <!-- About Section Two / Style Two --> */}
	<section className="about-section-two mt-lg-5">
		<figure className="floating-home2-about"><img src="images/icons/layout1-left.png" alt=""/></figure>
		<div className="auto-container">
			<div className="row">
				<div className="content-column col-lg-6 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
					<div className="inner-column ps-lg-5">
						<div className="sec-title mb-30">
							<span className="sub-title">Get To Know Us</span>
							<h2>Providing Renewable Energy Solutions</h2>
							<div className="text">Geothermal energy is a clean and reliable source of renewable energy that uses heat from the earth’s core to generate electricity.</div>
						</div>
						<ul className="list-style-two">
							<li><i className="fa fa-check-circle"></i> Solutions can help reduce the risk of oil spills</li>
							<li><i className="fa fa-check-circle"></i> Help reduce the impact of climate change</li>
						</ul>
						<div className="d-sm-flex align-items-sm-center justify-content-sm-between mt-20">
							<div className="home2-support-1">
								<h5 className="title">24/7 Support</h5>
								<p className="text mb-30">24/7 support refers to customer service or technical assistance</p>
								<a href="page-about.html" className="theme-btn btn-style-one hvr-light"><span className="btn-title">Explore Now</span></a>
							</div>
							<div className="icon-box1-home2 mt-4 mt-sm-0">
								<i className="icon flaticon-quality"></i>
								<h6 className="title">We’re Certified Solar Experts</h6>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Image Column --> */}
				<div className="col-lg-6 col-md-12 col-sm-12">
					<div className="home2-about1-img-col">
						<figure className="image-1"><img src="images/resource/about-1.jpg" alt="" /></figure>
						<figure className="image-2 bounce-y d-none d-sm-block"><img src="images/resource/about-3.jpg" alt="" /></figure>
						<figure className="image-3"><img src="images/resource/favicon_big.png" alt="" /></figure>
						<figure className="image-4 bounce-y"><img src="images/icons/dot.png" alt="" /></figure>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!--Emd About Section Two --> */}
    </>
  )
}