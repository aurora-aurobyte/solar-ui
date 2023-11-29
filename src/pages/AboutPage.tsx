import { RouterLink } from "routes/components"

type Props = {}

export default function AboutPage({}: Props) {
    return (
        <>
            {/* <!-- Start main-content --> */}
            <section className="page-title" style={{ backgroundImage: "url(images/background/page-title-bg.png)" }}>
                <div className="auto-container">
                    <div className="title-outer text-center">
                        <h1 className="title">About Us</h1>
                        <ul className="page-breadcrumb">
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <!-- end main-content --> */}

            <section className="about-section-two mt-lg-5">
                <figure className="floating-home2-about">
                    <img src="images/icons/layout1-left.png" alt="about" />
                </figure>
                <div className="auto-container">
                    <div className="row">
                        <div
                            className="content-column col-lg-6 col-md-12 col-sm-12 order-2 wow fadeInRight"
                            data-wow-delay="600ms"
                        >
                            <div className="inner-column ps-lg-5">
                                <div className="sec-title mb-30">
                                    <span className="sub-title">Get To Know Us</span>
                                    <h2>Providing Renewable Energy Solutions</h2>
                                    <div className="text">
                                        Geothermal energy is a clean and reliable source of renewable energy that uses
                                        heat from the earth’s core to generate electricity.
                                    </div>
                                </div>
                                <ul className="list-style-two">
                                    <li>
                                        <i className="fa fa-check-circle" /> Solutions can help reduce the risk of oil
                                        spills
                                    </li>
                                    <li>
                                        <i className="fa fa-check-circle" /> Help reduce the impact of climate change
                                    </li>
                                </ul>
                                <div className="d-sm-flex align-items-sm-center justify-content-sm-between mt-20">
                                    <div className="home2-support-1">
                                        <h5 className="title">24/7 Support</h5>
                                        <p className="text mb-30">
                                            24/7 support refers to customer service or technical assistance
                                        </p>
                                        <RouterLink href="/contact-us" className="theme-btn btn-style-one hvr-light">
                                            <span className="btn-title">Explore Now</span>
                                        </RouterLink>
                                    </div>
                                    <div className="icon-box1-home2 mt-4 mt-sm-0">
                                        <i className="icon flaticon-quality" />
                                        <h6 className="title">We’re Certified Solar Experts</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="home2-about1-img-col">
                                <figure className="image-1">
                                    <img src="images/resource/about-1.jpg" alt="about" />
                                </figure>
                                <figure className="image-2 bounce-y d-none d-sm-block">
                                    <img src="images/resource/about-3.jpg" alt="about" />
                                </figure>
                                <figure className="image-3 bounce-x">
                                    <img style={{ width: 150 }} src="images/resource/favicon_big.png" alt="about" />
                                </figure>
                                <figure className="image-4 bounce-y">
                                    <img src="images/icons/dot.png" alt="about" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services-section-home1 pb-lg-0">
                <div className="auto-container">
                    <div className="sec-title text-center wow fadeInUp">
                        <span className="sub-title">ACCESS ENERGY ENGINEERING</span>
                        <h2>Company Overview</h2>
                        <p className="blog-details__text-2">
                            Access Energy Engineering (Pvt) Ltd ( Reg No:- ) is a dynamic and innovative company that
                            serves the emerging renewable energy & eco building trade in Sri Lanka, a country
                            experiencing a rapid growth and has an increasing demand for energy & eco-friendly. With the
                            limited power generation capacity and increasing demand, growing road network, Sri Lanka is
                            looking for products and services to boost its development drive. As a result of this the
                            country has witnessed a rapid growing demand for energy
                        </p>
                        <p className="blog-details__text-2">
                            Our aim at Access Energy Engineering (Pvt) Ltd is to participate in the development drive of
                            Sri Lanka by providing renewable energy solutions to its growing energy demand. As a country
                            located near equator we have been blessed with abundant Sun Light throughout the year. This
                            as well as government’s policy to promote renewable energy by cutting taxes on most
                            renewable energy products has worked well for solar power solutions to be very lucrative.
                            Further it is a clean form of energy, helping 'sustainable green development' for the
                            wellbeing of our future generations
                        </p>
                        <h4 className="blog-details__title">
                            The company with a history of over five year’s background, we have a competent service /
                            Installation team island wide.
                        </h4>
                    </div>
                    <div className="row">
                        {/* Service Block */}
                        <div className="service-block col-lg-4 col-sm-12 wow fadeInUp about">
                            <div className="inner-box">
                                <div className="content-box">
                                    <i className="icon flaticon-electric-light-bulb" />
                                    <h4 className="title">VISION</h4>
                                    <div className="text">
                                        Our Vision is to provide high quality and cost effective sustainable-renewable
                                        energy solutions across all markets sectors, thereby improving quality of
                                        present and future human life.
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Service Block */}
                        <div className="service-block col-lg-4 col-sm-12 wow fadeInUp about" data-wow-delay="200ms">
                            <div className="inner-box">
                                <div className="content-box">
                                    <i className="icon flaticon-graph-line-screen" />
                                    <h4 className="title">GOALS</h4>
                                    <div className="text">
                                        Access Energy Engineering is committed to increase the renewable energy
                                        capacities striving to meet a target of 100 megawatts to be a market leader
                                        grid-connected solar PV roof top share of Srilanka.
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Service Block */}
                        <div className="service-block col-lg-4 col-sm-12 wow fadeInUp about" data-wow-delay="400ms">
                            <div className="inner-box">
                                <div className="content-box">
                                    <i className="icon flaticon-idea" />
                                    <h4 className="title">MISSION</h4>
                                    <div className="text">
                                        Envisioning ENERGY FOR ALL – as our prime motto and quality as our business USP,
                                        Our efforts in main VISION streaming solar is to become a World leader and a
                                        Rooftop Solar (RTS) Company of Choice executing and operating our projects
                                        efficiently and maintaining the highest standards of quality, safety and
                                        environmental sustainability.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
