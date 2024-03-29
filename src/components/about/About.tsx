import { RouterLink } from "routes/components"

type Props = {}

export default function About({}: Props) {
    return (
        <>
            {/* <!-- About Section --> */}
            <section className="about-section-home1">
                <img className="about-bg-home1" src="/images/background/about1-bg-home1.jpg" alt="" />
                <div className="anim-icons">
                    <div className="float-text wow zoomInLeft">Access Energy Engineering</div>
                </div>
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-lg-6 order-2 wow fadeInRight">
                            <div className="inner-column pl-10">
                                <div className="sec-title mb-40">
                                    <span className="sub-title">GET TO KNOW US</span>
                                    <h2>Welcome to Sustainable Energy Services</h2>
                                    <div className="text mb-30">
                                        Our Vision is to provide high quality and cost effective sustainable-renewable
                                        energy solutions across all markets sectors, thereby improving quality of
                                        present and future human life.
                                    </div>
                                    <h4>
                                        We have 12+ years of experience in power supply and renewable energy solutions
                                        in Sri Lanka.
                                    </h4>
                                </div>
                                <div className="company-cell mb-30 d-sm-flex align-items-center position-relative">
                                    <div className="icon mb-3 mb-sm-0 mr-20">
                                        <i className="fa fa-phone-volume"></i>
                                    </div>
                                    <div>
                                        <h5 className="title my-0">Have any question? Give us a call</h5>
                                        <a className="subtitle" href="tel:+92 666 888 0000">
                                            +94 21 222 3829
                                        </a>
                                    </div>
                                </div>
                                <div className="company-cell mb-30 d-sm-flex align-items-center position-relative">
                                    <div className="icon mb-3 mb-sm-0 mr-20">
                                        <i className="fa fa-phone-volume"></i>
                                    </div>
                                    <div>
                                        <h5 className="title my-0">Have any question? Give us a call</h5>
                                        <a className="subtitle" href="tel:+92 666 888 0000">
                                            +94 77 120 8700
                                        </a>
                                        <br />
                                        <a className="subtitle" href="tel:+92 666 888 0000">
                                            +94 77 752 8940
                                        </a>
                                    </div>
                                </div>
                                <RouterLink className="theme-btn btn-style-one mt-2" href="/contact-us">
                                    Explore Now
                                </RouterLink>
                            </div>
                        </div>
                        {/* <!-- Image Column --> */}
                        <div className="image-column col-lg-6 wow fadeInLeft">
                            <div className="inner-column position-relative mr-10">
                                <figure className="image-1">
                                    <img src="/images/resource/about-1.jpg" alt="" />
                                </figure>
                                <figure className="image-2 bounce-x">
                                    <img src="/images/resource/about-2.jpg" alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
