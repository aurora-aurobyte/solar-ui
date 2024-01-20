import { Helmet } from "react-helmet-async"

type Props = {}

export default function Page404({}: Props) {
    return (
        <>
            <Helmet>
                <title> 404 | Access Energy Engineering </title>
            </Helmet>
            {/* <!-- 404 Section --> */}
            <section className="">
                <div className="auto-container pt-120 pb-70">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="error-page__inner">
                                <div className="error-page__title-box">
                                    <img src="/images/resource/404.jpg" alt="" />
                                    <h3 className="error-page__sub-title">Page not found!</h3>
                                </div>
                                <p className="error-page__text">
                                    Sorry we can't find that page! The page you are looking <br /> for was never
                                    existed.
                                </p>
                                <form className="error-page__form">
                                    <div className="error-page__form-input">
                                        <input type="search" placeholder="Search here" />
                                        <button type="submit">
                                            <i className="lnr lnr-icon-magnifier"></i>
                                        </button>
                                    </div>
                                </form>
                                <a href="index.html" className="theme-btn btn-style-one shop-now">
                                    <span className="btn-title">Back to Home</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--End 404 Section --> */}
        </>
    )
}
