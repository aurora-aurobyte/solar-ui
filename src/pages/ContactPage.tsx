type Props = {}

export default function ContactPage({}: Props) {
    return (
        <>
            {/* <!-- Start main-content --> */}
            <section className="page-title" style={{ backgroundImage: "url(images/background/page-title-bg.png)" }}>
                <div className="auto-container">
                    <div className="title-outer text-center">
                        <h1 className="title">Contact Us</h1>
                        <ul className="page-breadcrumb">
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <!-- end main-content --> */}

            {/* <!--Contact Details Start--> */}
            <section className="contact-details">
                <div className="container ">
                    <div className="row">
                        <div className="col-xl-7 col-lg-6">
                            <div className="sec-title">
                                <span className="sub-title">Send us email</span>
                                <h2>Feel free to write</h2>
                            </div>
                            {/* <!-- Contact Form --> */}
                            <form
                                id="contact_form"
                                name="contact_form"
                                className=""
                                action="includes/sendmail.php"
                                method="post"
                            >
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input
                                                name="form_name"
                                                className="form-control"
                                                type="text"
                                                placeholder="Enter Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input
                                                name="form_email"
                                                className="form-control required email"
                                                type="email"
                                                placeholder="Enter Email"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input
                                                name="form_subject"
                                                className="form-control required"
                                                type="text"
                                                placeholder="Enter Subject"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input
                                                name="form_phone"
                                                className="form-control"
                                                type="text"
                                                placeholder="Enter Phone"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        name="form_message"
                                        className="form-control required"
                                        rows={7}
                                        placeholder="Enter Message"
                                    ></textarea>
                                </div>
                                <div className="mb-5">
                                    <input
                                        name="form_botcheck"
                                        className="form-control"
                                        type="hidden"
                                        defaultValue=""
                                    />
                                    <button
                                        type="submit"
                                        className="theme-btn btn-style-one mb-3 mb-sm-0"
                                        data-loading-text="Please wait..."
                                    >
                                        <span className="btn-title">Send message</span>
                                    </button>
                                    <button type="reset" className="theme-btn btn-style-one bg-theme-color5">
                                        <span className="btn-title">Reset</span>
                                    </button>
                                </div>
                            </form>
                            {/* <!-- Contact Form Validation--> */}
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="contact-details__right">
                                <div className="sec-title">
                                    <span className="sub-title">Need A Help ?</span>
                                    <h2>We are happy to assist you...</h2>
                                </div>
                                <ul className="list-unstyled contact-details__info">
                                    <li className="d-block d-sm-flex align-items-sm-center ">
                                        <div className="icon bg-theme-color2">
                                            <span className="lnr-icon-phone-plus"></span>
                                        </div>
                                        <div className="text ml-xs--0 mt-xs-10">
                                            <h6>Have any question?</h6>
                                            <a href="tel:+94 212223829" style={{ marginRight: 10 }}>
                                                <span>Free</span> +94 212223829
                                            </a>
                                            <a href="tel:+94 771208700"> +94 771208700</a>
                                        </div>
                                    </li>
                                    <li className="d-block d-sm-flex align-items-sm-center ">
                                        <div className="icon">
                                            <span className="lnr-icon-envelope1"></span>
                                        </div>
                                        <div className="text ml-xs--0 mt-xs-10">
                                            <h6>Write email</h6>
                                            <a href="mailto:accessenergyeng@gmail.com">accessenergyeng@gmail.com</a>
                                        </div>
                                    </li>
                                    <li className="d-block d-sm-flex align-items-sm-center ">
                                        <div className="icon">
                                            <span className="lnr-icon-location"></span>
                                        </div>
                                        <div className="text ml-xs--0 mt-xs-10">
                                            <h6>Visit</h6>
                                            <span>No.100, Main Street Jaffna, Srilanka.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--Contact Details End--> */}

            {/* <!-- Map Section--> */}
            <section className="map-section">
                <iframe className="map w-100" src="https://maps.app.goo.gl/CbATtKMiWk12ADJAA"></iframe>
            </section>
            {/* <!--End Map Section--> */}
        </>
    )
}
