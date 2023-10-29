

type Props = {}

export default function MobileMenu({}: Props) {
  return (
    <div className="mobile-menu">
					<div className="menu-backdrop"></div>

					{/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
					<nav className="menu-box">
						<div className="upper-box">
							<div className="nav-logo"><a href="index.html"><img src="images/logo-2.png" alt="" title="Fesho" /></a></div>
							<div className="close-btn"><i className="icon fa fa-times"></i></div>
						</div>

						<ul className="navigation clearfix">
							{/* <!--Keep This Empty / Menu will come through Javascript--> */}
						</ul>
						<ul className="contact-list-one">
							<li>
								{/* <!-- Contact Info Box --> */}
								<div className="contact-info-box">
									<i className="icon lnr-icon-phone-handset"></i>
									<span className="title">Call Now</span>
									<a href="tel:+92880098670">+92 (8800) - 98670</a>
								</div>
							</li>
							<li>
								{/* <!-- Contact Info Box --> */}
								<div className="contact-info-box">
									<span className="icon lnr-icon-envelope1"></span>
									<span className="title">Send Email</span>
									<a href="mailto:help@company.com">help@company.com</a>
								</div>
							</li>
							<li>
								{/* <!-- Contact Info Box --> */}
								<div className="contact-info-box">
									<span className="icon lnr-icon-clock"></span>
									<span className="title">Send Email</span>
									Mon - Sat 8:00 - 6:30, Sunday - CLOSED
								</div>
							</li>
						</ul>


						<ul className="social-links">
							<li><a href="#"><i className="fab fa-twitter"></i></a></li>
							<li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
							<li><a href="#"><i className="fab fa-pinterest"></i></a></li>
							<li><a href="#"><i className="fab fa-instagram"></i></a></li>
						</ul>
					</nav>
				</div>
  )
}