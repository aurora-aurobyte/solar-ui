import HeadLower from "./HeadLower"
import HeadTop from "./HeadTop"
import HeaderSearch from "./HeaderSearch"
import MobileMenu from "./MobileMenu"
import StickyHeader from "./StickyHeader"

type Props = {}

export default function Header({}: Props) {
    return (
        <header className="main-header header-style-one">
            {/* <!-- Header Top --> */}
            <div className="header-top">
                <div className="top-left">
                    {/* <!-- Info List --> */}
                    <ul className="list-style-one">
                        <li>
                            <i className="fa fa-map-marker-alt"></i> No.100, Main Street Jaffna, Srilanka.
                        </li>
                        <li>
                            <i className="fa fa-clock"></i> Mon - Sat: 8am - 5pm
                        </li>
                        <li>
                            <i className="fa fa-phone-volume"></i> <a href="tel:+92(8800)87890">+94 77 120 8700</a>
                        </li>
                    </ul>
                </div>
                <div className="top-right">
                    <ul className="social-icon-one">
                        <li>
                            <a href="#">
                                <span className="fab fa-facebook-square"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="fab fa-twitter"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="fab fa-pinterest-p"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="fab fa-instagram"></span>
                            </a>
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
                            <a href="index.html">
                                <img
                                    src="/images/logo.png"
                                    alt="Access Energy Engineering"
                                    title="Access Energy Engineering"
                                />
                            </a>
                        </div>
                    </div>

                    {/* <!--Nav Box--> */}
                    <div className="nav-outer">
                        <nav className="nav main-menu">
                            <ul className="navigation">
                                <li className="current dropdown">
                                    <a href="index.html">Home</a>
                                    <ul>
                                        <li>
                                            <a href="index.html">Home page 01</a>
                                        </li>
                                        <li>
                                            <a href="index-2.html">Home page 02</a>
                                        </li>
                                        <li>
                                            <a href="index-3.html">Home page 03</a>
                                        </li>
                                        <li>
                                            <a href="index-4.html">Home page 04</a>
                                        </li>
                                        <li className="dropdown">
                                            <a href="#">Single Styles</a>
                                            <ul>
                                                <li>
                                                    <a href="index-1-single.html">Single Style One</a>
                                                </li>
                                                <li>
                                                    <a href="index-2-single.html">Single Style Two</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a href="#">Dark Styles</a>
                                            <ul>
                                                <li>
                                                    <a href="index-1-dark.html">Dark Style One</a>
                                                </li>
                                                <li>
                                                    <a href="index-2-dark.html">Dark Style Two</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="index-1-rtl.html">RTL Style One</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#">Pages</a>
                                    <ul>
                                        <li>
                                            <a href="page-about.html">About</a>
                                        </li>
                                        <li className="dropdown">
                                            <a href="#">Projects</a>
                                            <ul>
                                                <li>
                                                    <a href="page-projects.html">Projects List</a>
                                                </li>
                                                <li>
                                                    <a href="page-project-details.html">Project Details</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a href="#">Team</a>
                                            <ul>
                                                <li>
                                                    <a href="page-team.html">Team List</a>
                                                </li>
                                                <li>
                                                    <a href="page-team-details.html">Team Details</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="page-testimonial.html">Testimonial</a>
                                        </li>
                                        <li>
                                            <a href="page-pricing.html">Pricing</a>
                                        </li>
                                        <li>
                                            <a href="page-faq.html">FAQ</a>
                                        </li>
                                        <li>
                                            <a href="page-404.html">Page 404</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#">Services</a>
                                    <ul>
                                        <li>
                                            <a href="page-services.html">Services List</a>
                                        </li>
                                        <li>
                                            <a href="page-service-details.html">Service Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#">Shop</a>
                                    <ul>
                                        <li>
                                            <a href="shop-products.html">Products</a>
                                        </li>
                                        <li>
                                            <a href="shop-products-sidebar.html">Products with Sidebar</a>
                                        </li>
                                        <li>
                                            <a href="shop-product-details.html">Product Details</a>
                                        </li>
                                        <li>
                                            <a href="shop-cart.html">Cart</a>
                                        </li>
                                        <li>
                                            <a href="shop-checkout.html">Checkout</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#">News</a>
                                    <ul>
                                        <li>
                                            <a href="news-grid.html">News Grid</a>
                                        </li>
                                        <li>
                                            <a href="news-details.html">News Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="page-contact.html">Contact</a>
                                </li>
                            </ul>
                        </nav>
                        {/* <!-- Main Menu End--> */}

                        <div className="outer-box">
                            <button className="ui-btn ui-btn search-btn">
                                <span className="icon lnr lnr-icon-search"></span>
                            </button>

                            <a href="shop-cart.html" className="ui-btn">
                                <i className="lnr-icon-shopping-cart"></i>
                            </a>

                            <a href="page-contact.html" className="theme-btn btn-style-one alternate">
                                <span className="btn-title">Get A Quote</span>
                            </a>

                            {/* <!-- Mobile Nav toggler --> */}
                            <div className="mobile-nav-toggler">
                                <span className="icon lnr-icon-bars"></span>
                            </div>
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
                            <a href="index.html">
                                <img src="images/logo-2.png" alt="" title="Fesho" />
                            </a>
                        </div>
                        <div className="close-btn">
                            <i className="icon fa fa-times"></i>
                        </div>
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
                            <a href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-pinterest"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* <!-- End Mobile Menu --> */}

            {/* <!-- Header Search --> */}
            <div className="search-popup">
                <span className="search-back-drop"></span>
                <button className="close-search">
                    <span className="fa fa-times"></span>
                </button>

                <div className="search-inner">
                    <form method="post" action="index.html">
                        <div className="form-group">
                            <input type="search" name="search-field" value="" placeholder="Search..." required />
                            <button type="submit">
                                <i className="fa fa-search"></i>
                            </button>
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
                            <a href="index.html" title="">
                                <img
                                    src="images/logo.png"
                                    alt="Access Energy Engineering"
                                    title="Access Energy Engineering"
                                />
                            </a>
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
                            <div className="mobile-nav-toggler">
                                <span className="icon lnr-icon-bars"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Sticky Menu --> */}
        </header>
    )
}
