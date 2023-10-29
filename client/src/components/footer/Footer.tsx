type Props = {}

export default function Footer({}: Props) {
  return (
    <>
    {/* <!-- Main Footer --> */}
	<footer className="main-footer">
		<div className="bg-image" style={{backgroundImage: "url(./images/background/5.jpg)"}}></div>

		{/* <!-- Contact info --> */}
		<div className="contacts-outer">
			<div className="auto-container">
				<div className="row">
					{/* <!-- Contact Info Block --> */}
					<div className="contact-info-block col-lg-4 col-sm-6 wow fadeInRight">
						<div className="inner-box">
							<div className="icon-box"><i className="icon flaticon-location"></i></div>
							<h4 className="title">Address</h4>
							<div className="text">30 St Kilda Road, Jackson Store, Australia</div>
						</div>
					</div>
					{/* <!-- Contact Info Block --> */}
					<div className="contact-info-block col-lg-4 col-sm-6 wow fadeInRight" data-wow-delay="300ms">
						<div className="inner-box">
							<div className="icon-box"><i className="icon flaticon-e-mail-envelope"></i></div>
							<h4 className="title">Contact</h4>
							<div className="text">
								<a href="mailto:needhelp@company.com">needhelp@company.com</a>
								<a href="tel:+92(8800)48720">+92 (8800) 48720</a>
							</div>
						</div>
					</div>
					{/* <!-- Contact Info Block --> */}
					<div className="contact-info-block col-lg-4 col-sm-6 wow fadeInRight" data-wow-delay="600ms">
						<div className="inner-box">
							<div className="icon-box"><i className="icon flaticon-time"></i></div>
							<h4 className="title">Timing</h4>
							<div className="text">Mon - Sat: 8 am - 5 pm, Sunday: CLOSED</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- End Contact info --> */}

		{/* <!--Widgets Section--> */}
		<div className="widgets-section">
			<div className="auto-container">
				<div className="row">
					{/* <!--Footer Column--> */}
					<div className="footer-column col-xl-3 col-lg-12 col-md-6 col-sm-12">
						<div className="footer-widget about-widget">
							<div className="logo"><a href="index.html"><img src="images/logo-2.png" alt="" /></a></div>
							<div className="text">We work with a passion of taking challenges and creating new ones in advertising sector.</div>
							<a href="page-about.html" className="theme-btn btn-style-one hvr-light small"><span className="btn-title">About</span></a>
						</div>
					</div>

					{/* <!--Footer Column--> */}
					<div className="footer-column col-xl-3 col-lg-3 col-md-6 col-sm-12">
						<div className="footer-widget">
							<h3 className="widget-title">Service</h3>
							<ul className="user-links">
								<li><a href="#">Reliability & Punctuality</a></li>
								<li><a href="#">Trusted Franchise</a></li>
								<li><a href="#">Warehoues Storage</a></li>
								<li><a href="#">Real Time Tracking</a></li>
								<li><a href="#">Transparent Pricing</a></li>
							</ul>
						</div>
					</div>


					{/* <!--Footer Column--> */}
					<div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
						<div className="footer-widget gallery-widget">
							<h3 className="widget-title">Projects</h3>
							<div className="widget-content">
								<div className="outer clearfix">
									<figure className="image">
										<a href="#"><img src="images/resource/project-thumb-1.jpg" alt="" /></a>
									</figure>

									<figure className="image">
										<a href="#"><img src="images/resource/project-thumb-2.jpg" alt="" /></a>
									</figure>

									<figure className="image">
										<a href="#"><img src="images/resource/project-thumb-3.jpg" alt="" /></a>
									</figure>

									<figure className="image">
										<a href="#"><img src="images/resource/project-thumb-4.jpg" alt="" /></a>
									</figure>

									<figure className="image">
										<a href="#"><img src="images/resource/project-thumb-5.jpg" alt="" /></a>
									</figure>

									<figure className="image">
										<a href="#"><img src="images/resource/project-thumb-6.jpg" alt="" /></a>
									</figure>
								</div>
							</div>
						</div>
					</div>

					{/* <!--Footer Column--> */}
					<div className="footer-column col-xl-3 col-lg-5 col-md-6 col-sm-12">
						<div className="footer-widget">
							<h3 className="widget-title">Newsletter</h3>
							<div className="widget-content">
								<div className="subscribe-form">
									<div className="text">Subscribe our newsletter to get our latest update & news</div>
									<form method="post" action="#">
										<div className="form-group">
											<input type="email" name="email" className="email" value=""
												placeholder="Email Address" required/>
											<button type="button" className="theme-btn btn-style-one"><span className="btn-title"><i
														className="fa fa-paper-plane"></i></span></button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>

		{/* <!--Footer Bottom--> */}
		<div className="footer-bottom">
			<div className="auto-container">
				<div className="inner-container">
					<div className="copyright-text">
						<p>&copy; Copyright 2023 by <a href="index.html">Company.com</a></p>
					</div>

					<ul className="social-icon-two">
						<li><a href="#"><i className="fab fa-facebook"></i></a></li>
						<li><a href="#"><i className="fab fa-twitter"></i></a></li>
						<li><a href="#"><i className="fab fa-pinterest"></i></a></li>
						<li><a href="#"><i className="fab fa-instagram"></i></a></li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
	{/* <!--End Main Footer --> */}
    </>
  )
}