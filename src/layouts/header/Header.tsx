import HeadLower from "./HeadLower"
import HeadTop from "./HeadTop"
import HeaderSearch from "./HeaderSearch"
import MobileMenu from "./MobileMenu"
import StickyHeader from "./StickyHeader"


type Props = {}

export default function Header({ }: Props) {
	return (
		<>
			<header className="main-header header-style-one">
			{/* <!-- Header Top --> */}
			<div className="header-top">
				<div className="top-left">
					{/* <!-- Info List --> */}
					<ul className="list-style-one">
						<li><i className="fa fa-map-marker-alt"></i> 380 St Kilda Road, Australia</li>
						<li><i className="fa fa-clock"></i> Mon - Sat: 8am - 5pm</li>
						<li><i className="fa fa-phone-volume"></i> <a href="tel:+92(8800)87890">+92 (8800) 87890</a></li>
					</ul>
				</div>
				<div className="top-right">
					<ul className="social-icon-one">
						<li>
							<a href="#"><span className="fab fa-facebook-square"></span></a>
						</li>
						<li>
							<a href="#"><span className="fab fa-twitter"></span></a>
						</li>
						<li>
							<a href="#"><span className="fab fa-pinterest-p"></span></a>
						</li>
						<li>
							<a href="#"><span className="fab fa-instagram"></span></a>
						</li>
					</ul>
				</div>
			</div>
			{/* <!-- Header Top --> */}

			{/* <!-- Header Lower --> */}
			<div className="header-lower">
				{/* <!-- Main box --> */}
				<div className="main-box">
					<div className="logo-box">
						<div className="logo">
							<a href="index.html"><img src="images/logo-2.png" alt="" title="Tronis" /></a>
						</div>
					</div>

					{/* <!--Nav Box--> */}
					<div className="nav-outer">
						<nav className="nav main-menu">
							<ul className="navigation">
								<li><a href="/">Home</a></li>
								<li className="dropdown">
									<a href="#">Pages</a>
									<ul>
										<li><a href="about">About</a></li>
										<li className="dropdown">
											<a href="#">Projects</a>
											<ul>
												<li><a href="project-list">Projects List</a></li>
												<li><a href="project">Project Details</a></li>
											</ul>
										</li>
										<li className="dropdown">
											<a href="#">Team</a>
											<ul>
												<li><a href="team-list">Team List</a></li>
												<li><a href="team">Team Details</a></li>
											</ul>
										</li>
										<li><a href="testimonial">Testimonial</a></li>
										<li><a href="price">Pricing</a></li>
										<li><a href="faq">FAQ</a></li>
									</ul>
								</li>
								<li className="dropdown">
									<a href="#">Services</a>
									<ul>
										<li><a href="service-list">Services List</a></li>
										<li><a href="service">Service Details</a></li>
									</ul>
								</li>
								<li className="dropdown">
									<a href="#">Shop</a>
									<ul>
										<li><a href="product-list">Products</a></li>
										<li><a href="product-sidebar">Products with Sidebar</a></li>
										<li><a href="product">Product Details</a></li>
										<li><a href="cart">Cart</a></li>
										<li><a href="check-out">Checkout</a></li>
									</ul>
								</li>
								<li className="dropdown">
									<a href="#">News</a>
									<ul>
										<li><a href="news-list">News Grid</a></li>
										<li><a href="news">News Details</a></li>
									</ul>
								</li>
								<li><a href="contact-us">Contact</a></li>
							</ul>
						</nav>
						{/* <!-- Main Menu End--> */}

						<div className="outer-box">
							<button className="ui-btn ui-btn search-btn">
								<span className="icon lnr lnr-icon-search"></span>
							</button>

							<a href="cart" className="ui-btn"><i className="lnr-icon-shopping-cart"></i></a>

							<a href="page-contact.html" className="theme-btn btn-style-one alternate"><span
									className="btn-title">Get A Quote</span></a>

							{/* <!-- Mobile Nav toggler --> */}
							<div className="mobile-nav-toggler"><span className="icon lnr-icon-bars"></span></div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- End Header Lower --> */}

			{/* <!-- Mobile Menu  --> */}
			<div className="mobile-menu">
				<div className="menu-backdrop"></div>

				{/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
				<nav className="menu-box">
					<div className="upper-box">
						<div className="nav-logo">
							<a href="index.html"><img src="images/logo-2.png" alt="" title="Fesho" /></a>
						</div>
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
						<li>
							<a href="#"><i className="fab fa-twitter"></i></a>
						</li>
						<li>
							<a href="#"><i className="fab fa-facebook-f"></i></a>
						</li>
						<li>
							<a href="#"><i className="fab fa-pinterest"></i></a>
						</li>
						<li>
							<a href="#"><i className="fab fa-instagram"></i></a>
						</li>
					</ul>
				</nav>
			</div>
			{/* <!-- End Mobile Menu --> */}

			{/* <!-- Header Search --> */}
			<div className="search-popup">
				<span className="search-back-drop"></span>
				<button className="close-search"><span className="fa fa-times"></span></button>

				<div className="search-inner">
					<form method="post" action="/">
						<div className="form-group">
							<input type="search" name="search-field" value="" placeholder="Search..." required />
							<button type="submit"><i className="fa fa-search"></i></button>
						</div>
					</form>
				</div>
			</div>
			{/* <!-- End Header Search --> */}

			{/* <!-- Sticky Header  --> */}
			<div className="sticky-header">
				<div className="auto-container">
					<div className="inner-container">
						{/* <!--Logo--> */}
						<div className="logo">
							<a href="index.html" title=""><img src="images/logo.png" alt="" title="" /></a>
						</div>

						{/* <!--Right Col--> */}
						<div className="nav-outer">
							{/* <!-- Main Menu --> */}
							<nav className="main-menu">
								<div className="navbar-collapse show collapse clearfix">
									<ul className="navigation clearfix">
										{/* <!--Keep This Empty / Menu will come through Javascript--> */}
									</ul>
								</div>
							</nav>
							{/* <!-- Main Menu End--> */}

							{/* <!--Mobile Navigation Toggler--> */}
							<div className="mobile-nav-toggler"><span className="icon lnr-icon-bars"></span></div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- End Sticky Menu --> */}
		</header>

		</>
	)
}