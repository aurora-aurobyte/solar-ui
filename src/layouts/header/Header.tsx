import { RouterLink, RouterNavLink } from "routes/components"

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
                            <RouterLink href="/">
                                <img
                                    src="/images/logo.png"
                                    alt="Access Energy Engineering"
                                    title="Access Energy Engineering"
                                />
                            </RouterLink>
                        </div>
                    </div>

                    {/* <!--Nav Box--> */}
                    <div className="nav-outer">
                        <nav className="nav main-menu">
                            <ul className="navigation">
                                <li className="current dropdown">
                                    <RouterNavLink href="index.html">Home</RouterNavLink>
                                    <ul>
                                        <li>
                                            <RouterNavLink href="index.html">Home page 01</RouterNavLink>
                                        </li>
                                        <li>
                                            <RouterNavLink href="index-2.html">Home page 02</RouterNavLink>
                                        </li>
                                        <li>
                                            <RouterNavLink href="index-3.html">Home page 03</RouterNavLink>
                                        </li>
                                        <li>
                                            <RouterNavLink href="index-4.html">Home page 04</RouterNavLink>
                                        </li>
                                        <li className="dropdown">
                                            <RouterNavLink href="#">Single Styles</RouterNavLink>
                                            <ul>
                                                <li>
                                                    <RouterNavLink href="index-1-single.html">
                                                        Single Style One
                                                    </RouterNavLink>
                                                </li>
                                                <li>
                                                    <RouterNavLink href="index-2-single.html">
                                                        Single Style Two
                                                    </RouterNavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <RouterNavLink href="#">Dark Styles</RouterNavLink>
                                            <ul>
                                                <li>
                                                    <RouterNavLink href="index-1-dark.html">
                                                        Dark Style One
                                                    </RouterNavLink>
                                                </li>
                                                <li>
                                                    <RouterNavLink href="index-2-dark.html">
                                                        Dark Style Two
                                                    </RouterNavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <RouterNavLink href="index-1-rtl.html">RTL Style One</RouterNavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <RouterNavLink href="#">Pages</RouterNavLink>
                                    <ul>
                                        <li>
                                            <RouterNavLink href="page-about.html">About</RouterNavLink>
                                        </li>
                                        <li className="dropdown">
                                            <RouterNavLink href="#">Projects</RouterNavLink>
                                            <ul>
                                                <li>
                                                    <RouterNavLink href="page-projects.html">
                                                        Projects List
                                                    </RouterNavLink>
                                                </li>
                                                <li>
                                                    <RouterNavLink href="page-project-details.html">
                                                        Project Details
                                                    </RouterNavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <RouterNavLink href="#">Team</RouterNavLink>
                                            <ul>
                                                <li>
                                                    <RouterNavLink href="page-team.html">Team List</RouterNavLink>
                                                </li>
                                                <li>
                                                    <RouterNavLink href="page-team-details.html">
                                                        Team Details
                                                    </RouterNavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <RouterNavLink href="page-testimonial.html">Testimonial</RouterNavLink>
                                        </li>
                                        <li>
                                            <RouterNavLink href="page-pricing.html">Pricing</RouterNavLink>
                                        </li>
                                        <li>
                                            <RouterNavLink href="page-faq.html">FAQ</RouterNavLink>
                                        </li>
                                        <li>
                                            <RouterNavLink href="page-404.html">Page 404</RouterNavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <RouterNavLink href="#">Services</RouterNavLink>
                                    <ul>
                                        <li>
                                            <RouterNavLink href="page-services.html">Services List</RouterNavLink>
                                        </li>
                                        <li>
                                            <RouterNavLink href="page-service-details.html">
                                                Service Details
                                            </RouterNavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <RouterNavLink href="#">Shop</RouterNavLink>
                                    <ul>
                                        <li>
                                            <RouterNavLink href="shop-products.html">Products</RouterNavLink>
                                        </li>
                                        <li>
                                            <RouterNavLink href="shop-products-sidebar.html">
                                                Products with Sidebar
                                            </RouterNavLink>
                                        </li>
                                        <li>
                                            <RouterNavLink href="shop-product-details.html">
                                                Product Details
                                            </RouterNavLink>
                                        </li>
                                        <li>
                                            <RouterNavLink href="shop-cart.html">Cart</RouterNavLink>
                                        </li>
                                        <li>
                                            <RouterNavLink href="shop-checkout.html">Checkout</RouterNavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <RouterNavLink href="#">News</RouterNavLink>
                                    <ul>
                                        <li>
                                            <RouterNavLink href="news-grid.html">News Grid</RouterNavLink>
                                        </li>
                                        <li>
                                            <RouterNavLink href="news-details.html">News Details</RouterNavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <RouterNavLink href="page-contact.html">Contact</RouterNavLink>
                                </li>
                            </ul>
                        </nav>
                        {/* <!-- Main Menu End--> */}

                        <div className="outer-box">
                            <button className="ui-btn ui-btn search-btn">
                                <span className="icon lnr lnr-icon-search"></span>
                            </button>

                            <RouterNavLink href="shop-cart.html" className="ui-btn">
                                <i className="lnr-icon-shopping-cart"></i>
                            </RouterNavLink>

                            <RouterNavLink href="page-contact.html" className="theme-btn btn-style-one alternate">
                                <span className="btn-title">Get A Quote</span>
                            </RouterNavLink>

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
                            <RouterNavLink href="/">
                                <img
                                    src="images/logo.png"
                                    alt="Access Energy Engineering"
                                    title="Access Energy Engineering"
                                />
                            </RouterNavLink>
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
                                <a href="tel:+92880098670">+94 77 120 8700</a>
                            </div>
                        </li>
                        <li>
                            {/* <!-- Contact Info Box --> */}
                            <div className="contact-info-box">
                                <span className="icon lnr-icon-envelope1"></span>
                                <span className="title">Send Email</span>
                                <a href="mailto:help@company.com">accessenergyeng@gmail.com</a>
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
                            <RouterNavLink href="/" title="">
                                <img
                                    src="images/logo.png"
                                    alt="Access Energy Engineering"
                                    title="Access Energy Engineering"
                                />
                            </RouterNavLink>
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
