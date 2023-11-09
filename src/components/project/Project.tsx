type Props = {}

export default function Project({}: Props) {
    return (
        <>
            {/* <!-- Project Section --> */}
            <section className="project-section pull-up pb-0">
                <div className="large-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">LASTEST PROJECT</span>
                        <h2>Our Latest Projects</h2>
                    </div>
                    <div className="row wow fadeInUp">
                        <div className="col-xl-3 col-sm-6">
                            {/* <!-- Project Block --> */}
                            <div className="project-block mb-30">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <a href="/images/resource/project-1.jpg" className="lightbox-image">
                                                <img src="/images/resource/project-1.jpg" alt="" />
                                            </a>
                                        </figure>
                                        <a href="page-project-details.html" className="icon">
                                            <i className="fa fa-plus"></i>
                                        </a>
                                    </div>
                                    <div className="content-box">
                                        <span className="sub-title">Solar Energy</span>
                                        <h4 className="title">
                                            <a href="page-project-details.html">Maximizing Solar ROI</a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            {/* <!-- Project Block --> */}
                            <div className="project-block mb-30">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <a href="/images/resource/project-2.jpg" className="lightbox-image">
                                                <img src="/images/resource/project-2.jpg" alt="" />
                                            </a>
                                        </figure>
                                        <a href="page-project-details.html" className="icon">
                                            <i className="fa fa-plus"></i>
                                        </a>
                                    </div>
                                    <div className="content-box">
                                        <span className="sub-title">Solar Energy</span>
                                        <h4 className="title">
                                            <a href="page-project-details.html">Diversifying Your Solar</a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            {/* <!-- Project Block --> */}
                            <div className="project-block mb-30">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <a href="/images/resource/project-3.jpg" className="lightbox-image">
                                                <img src="/images/resource/project-3.jpg" alt="" />
                                            </a>
                                        </figure>
                                        <a href="page-project-details.html" className="icon">
                                            <i className="fa fa-plus"></i>
                                        </a>
                                    </div>
                                    <div className="content-box">
                                        <span className="sub-title">Solar Energy</span>
                                        <h4 className="title">
                                            <a href="page-project-details.html">The Benefits of Solar</a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            {/* <!-- Project Block --> */}
                            <div className="project-block mb-30">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <a href="/images/resource/project-4.jpg" className="lightbox-image">
                                                <img src="/images/resource/project-4.jpg" alt="" />
                                            </a>
                                        </figure>
                                        <a href="page-project-details.html" className="icon">
                                            <i className="fa fa-plus"></i>
                                        </a>
                                    </div>
                                    <div className="content-box">
                                        <span className="sub-title">Solar Energy</span>
                                        <h4 className="title">
                                            <a href="page-project-details.html">Shining a Light</a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--End Project Section --> */}
        </>
    )
}
