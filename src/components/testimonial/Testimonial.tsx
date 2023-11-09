type Props = {}

export default function Testimonial({}: Props) {
    return (
        <>
            {/* <!-- Testimonial Section --> */}
            <section className="testimonial-section-home2">
                <div className="float-image">
                    <img src="/images/resource/icon_tesimonial.png" alt="" />
                </div>
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">CLIENT & TESTIMONIAL</span>
                        <h2>
                            Here is Some Clients <br />
                            Feedbacks
                        </h2>
                    </div>
                    <div className="row">
                        {/* <!-- Testimonial Column --> */}
                        <div className="col-lg-4 col-sm-6">
                            <div className="testimonial-block-two">
                                <div className="inner-content">
                                    <div className="text">
                                        “All of our lorries are fitted with Satellite Tracking and Temperature
                                        Controlled monitoring systems so that the transportation of high value and
                                        temperature sensitive loads can be monitored at all times.
                                    </div>
                                    <div className="reviews">
                                        <div className="stars"></div>
                                    </div>
                                    <div className="testi-quote">
                                        <i className="fas fa-quote-right"></i>
                                    </div>
                                </div>
                                <div className="img-content d-flex align-items-end">
                                    <div className="testi-img">
                                        <img src="/images/resource/client1.jpg" />
                                    </div>
                                    <div className="testi-holder ml-15">
                                        <div className="text">Co Founder</div>
                                        <h5 className="my-0">Jhon D. William</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Testimonial Column --> */}
                        <div className="col-lg-4 col-sm-6">
                            <div className="testimonial-block-two">
                                <div className="inner-content">
                                    <div className="text">
                                        “All of our lorries are fitted with Satellite Tracking and Temperature
                                        Controlled monitoring systems so that the transportation of high value and
                                        temperature sensitive loads can be monitored at all times.
                                    </div>
                                    <div className="reviews">
                                        <div className="stars"></div>
                                    </div>
                                    <div className="testi-quote">
                                        <i className="fas fa-quote-right"></i>
                                    </div>
                                </div>
                                <div className="img-content d-flex align-items-end">
                                    <div className="testi-img">
                                        <img src="/images/resource/client2.jpg" />
                                    </div>
                                    <div className="testi-holder ml-15">
                                        <div className="text">Co Founder</div>
                                        <h5 className="my-0">Aleesha Brown</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Testimonial Column --> */}
                        <div className="col-lg-4 col-sm-6">
                            <div className="testimonial-block-two">
                                <div className="inner-content">
                                    <div className="text">
                                        “All of our lorries are fitted with Satellite Tracking and Temperature
                                        Controlled monitoring systems so that the transportation of high value and
                                        temperature sensitive loads can be monitored at all times.
                                    </div>
                                    <div className="reviews">
                                        <div className="stars"></div>
                                    </div>
                                    <div className="testi-quote">
                                        <i className="fas fa-quote-right"></i>
                                    </div>
                                </div>
                                <div className="img-content d-flex align-items-end">
                                    <div className="testi-img">
                                        <img src="/images/resource/client3.jpg" />
                                    </div>
                                    <div className="testi-holder ml-15">
                                        <div className="text">Co Founder</div>
                                        <h5 className="my-0">Mike Hardon</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Testimonial Section --> */}
        </>
    )
}
