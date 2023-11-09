type Props = {}

export default function Service({}: Props) {
    return (
        <>
            {/* <!-- Services Section --> */}
            <section className="services-section-home1 pb-lg-0">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">SPECIALISE IN THE ENERGY SERVICE</span>
                        <h2>Our main Services</h2>
                    </div>
                    <div className="row">
                        {/* <!-- Service Block --> */}
                        <div className="service-block col-lg-4 col-sm-6 wow fadeInUp">
                            <div className="inner-box">
                                <div className="content-box">
                                    <i className="icon flaticon-wind-energy-1"></i>
                                    <span className="sub-title">01 Service</span>
                                    <h4 className="title">
                                        <a href="page-service-details.html">ON GRID SYSTEM</a>
                                    </h4>
                                    <div className="text">
                                        An on-grid solar power system is one that connects to the electrical grid,
                                        utilizing solar panels to produce electricity. This generated power is then
                                        transferred into the grid and credited to the user's account.
                                    </div>
                                    <a href="" className="read-more">
                                        <i className="fa fa-chevron-right"></i>
                                    </a>
                                </div>
                                <div className="image-box">
                                    <figure className="image">
                                        <a href="page-service-details.html">
                                            <img src="/images/resource/service-1.jpg" alt="" />
                                        </a>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Service Block --> */}
                        <div className="service-block col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="inner-box">
                                <div className="content-box">
                                    <i className="icon flaticon-settings-2"></i>
                                    <span className="sub-title">02 Service</span>
                                    <h4 className="title">
                                        <a href="page-service-details.html">OFF GRID SYSTEM</a>
                                    </h4>
                                    <div className="text">
                                        An off-grid system is an independent solar power setup that functions separately
                                        from the electrical grid. Normally composed of solar panels, batteries, and
                                        inverters, this system generates electricity through solar panels and operates
                                        without reliance on the traditional grid.
                                    </div>
                                    <a href="" className="read-more">
                                        <i className="fa fa-chevron-right"></i>
                                    </a>
                                </div>
                                <div className="image-box">
                                    <figure className="image">
                                        <a href="page-service-details.html">
                                            <img src="/images/resource/service-2.jpg" alt="" />
                                        </a>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Service Block --> */}
                        <div className="service-block col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="400ms">
                            <div className="inner-box">
                                <div className="content-box">
                                    <i className="icon flaticon-windmill"></i>
                                    <span className="sub-title">03 Service</span>
                                    <h4 className="title">
                                        <a href="page-service-details.html">HYBRID SYSTEM</a>
                                    </h4>
                                    <div className="text">
                                        A hybrid solar system merges features from both grid-connected and off-grid
                                        systems. By harnessing solar panels to generate electricity, it can store this
                                        power in batteries for future utilization.
                                    </div>
                                    <a href="" className="read-more">
                                        <i className="fa fa-chevron-right"></i>
                                    </a>
                                </div>
                                <div className="image-box">
                                    <figure className="image">
                                        <a href="page-service-details.html">
                                            <img src="/images/resource/service-3.jpg" alt="" />
                                        </a>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Service Block --> */}
                    </div>
                </div>
            </section>
            {/* <!-- End Services Section--> */}
        </>
    )
}
