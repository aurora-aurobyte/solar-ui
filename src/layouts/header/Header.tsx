import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { RouterLink, RouterNavLink } from "routes/components"
import Navigation from "./Navigation"
import { useAppSelector } from "store/store"

type Props = {}

export default function Header({}: Props) {
    const cartItems = useAppSelector((state) => state.cart.cartItems)

    useEffect(() => {
        //Update Header Style and Scroll to Top
        function headerStyle() {
            // @ts-ignore
            if ($(".main-header").length) {
                // @ts-ignore
                var windowpos = $(window).scrollTop()
                // @ts-ignore
                var siteHeader = $(".header-style-one")
                // @ts-ignore
                var scrollLink = $(".scroll-to-top")
                // @ts-ignore
                var sticky_header = $(".main-header .sticky-header")
                if (windowpos > 100) {
                    sticky_header.addClass("fixed-header animated slideInDown")
                    scrollLink.fadeIn(300)
                } else {
                    sticky_header.removeClass("fixed-header animated slideInDown")
                    scrollLink.fadeOut(300)
                }
                if (windowpos > 1) {
                    siteHeader.addClass("fixed-header")
                } else {
                    siteHeader.removeClass("fixed-header")
                }
            }
        }

        //Mobile Nav Hide Show
        // @ts-ignore
        if ($(".mobile-menu").length) {
            // @ts-ignore
            $(".mobile-menu .close-btn").on("click", function () {
                // @ts-ignore
                $("body").removeClass("mobile-menu-visible")
            })

            //Dropdown Button
            // @ts-ignore
            $(".mobile-menu li.dropdown .dropdown-btn").on("click", function () {
                // @ts-ignore
                $(this).prev("ul").slideToggle(500)
                // @ts-ignore
                $(this).toggleClass("active")
            })

            //Menu Toggle Btn
            // @ts-ignore
            $(".mobile-nav-toggler").on("click", function () {
                // @ts-ignore
                $("body").addClass("mobile-menu-visible")
            })

            //Menu Toggle Btn
            // @ts-ignore
            $(".mobile-menu .menu-backdrop, .mobile-menu .close-btn").on("click", function () {
                // @ts-ignore
                $("body").removeClass("mobile-menu-visible")
            })
        }

        // @ts-ignore
        $(window).on("scroll", function () {
            headerStyle()
        })
        headerStyle()
    }, [])
    const { pathname } = useLocation()
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
                            <a href="https://www.facebook.com/accessenergy.lk?mibextid=ZbWKwL" target="_blank">
                                <span className="fab fa-facebook-square"></span>
                            </a>
                        </li>
                        {/* <li>
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
                        </li> */}
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
                                <Navigation />
                            </ul>
                        </nav>
                        {/* <!-- Main Menu End--> */}

                        <div className="outer-box">
                            <button className="ui-btn ui-btn search-btn">
                                <span className="icon lnr lnr-icon-search"></span>
                            </button>

                            <RouterNavLink href="/shop/cart" className="ui-btn">
                                <i className="lnr-icon-shopping-cart">
                                    {cartItems.length && (
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill cart-item-count">
                                            {cartItems.length}
                                            <span className="visually-hidden">Cart Items</span>
                                        </span>
                                    )}
                                </i>
                            </RouterNavLink>

                            <RouterNavLink href="/contact-us" className="theme-btn btn-style-one alternate">
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
                                    src="/images/logo.png"
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
                        <Navigation />
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
                        {/* <li>
                            <a href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li> */}
                        <li>
                            <a href="https://www.facebook.com/accessenergy.lk?mibextid=ZbWKwL" target="_blank">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        {/* <li>
                            <a href="#">
                                <i className="fab fa-pinterest"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li> */}
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
                            <input type="search" name="search-field" defaultValue="" placeholder="Search..." required />
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
                                    src="/images/logo.png"
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
                                        <Navigation />
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
