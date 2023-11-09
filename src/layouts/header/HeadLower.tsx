type Props = {}

export default function HeadLower({}: Props) {
    return (
        <div className="header-lower">
            {/* <!-- Main box --> */}
            <div className="main-box">
                <div className="logo-box">
                    <div className="logo">
                        <a href="index.html">
                            <img src="/images/logo-2.png" alt="" title="Tronis" />
                        </a>
                    </div>
                </div>

                {/* <!--Nav Box--> */}
                <div className="nav-outer">
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
                            <a href="#" className="theme-btn btn-style-one alternate hvr-light">
                                <span className="btn-title">Get A Quote</span>
                            </a>
                            {/* <!-- Mobile Nav toggler --> */}
                            <div className="mobile-nav-toggler">
                                <span className="icon lnr-icon-bars"></span>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Main Menu End--> */}
                </div>
            </div>
        </div>
    )
}
