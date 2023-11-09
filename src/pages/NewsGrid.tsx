import { RouterLink } from "routes/components"

type Props = {}

export default function NewsGrid({}: Props) {
    return (
        <>
            {/* <!-- News Section --> */}
            <section className="news-section">
                <div className="auto-container">
                    <div className="row">
                        {/* <!-- News Block --> */}
                        <div className="news-block col-lg-4 col-sm-6">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <RouterLink href="/news/1">
                                            <img src="/images/resource/news-1.jpg" alt="" />
                                        </RouterLink>
                                    </figure>
                                    <span className="date">
                                        <b>28</b> SEP
                                    </span>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-info">
                                        <li>
                                            <i className="fa fa-user"></i> by Admin
                                        </li>
                                        <li>
                                            <i className="fa fa-comments"></i> 2 Comments
                                        </li>
                                    </ul>
                                    <h4 className="title">
                                        <RouterLink href="/news/1">
                                            Winds of Change in the Turbine Service Industry
                                        </RouterLink>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        {/* <!-- News Block --> */}
                        <div className="news-block col-lg-4 col-sm-6">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <RouterLink href="/news/1">
                                            <img src="/images/resource/news-2.jpg" alt="" />
                                        </RouterLink>
                                    </figure>
                                    <span className="date">
                                        <b>28</b> SEP
                                    </span>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-info">
                                        <li>
                                            <i className="fa fa-user"></i> by Admin
                                        </li>
                                        <li>
                                            <i className="fa fa-comments"></i> 2 Comments
                                        </li>
                                    </ul>
                                    <h4 className="title">
                                        <RouterLink href="/news/1">
                                            Powering Asia Pacific’s Energy Transition
                                        </RouterLink>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        {/* <!-- News Block --> */}
                        <div className="news-block col-lg-4 col-sm-6">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <RouterLink href="/news/1">
                                            <img src="/images/resource/news-3.jpg" alt="" />
                                        </RouterLink>
                                    </figure>
                                    <span className="date">
                                        <b>28</b> SEP
                                    </span>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-info">
                                        <li>
                                            <i className="fa fa-user"></i> by Admin
                                        </li>
                                        <li>
                                            <i className="fa fa-comments"></i> 2 Comments
                                        </li>
                                    </ul>
                                    <h4 className="title">
                                        <RouterLink href="/news/1">
                                            Helping Companies in Their Green Transition
                                        </RouterLink>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        {/* <!-- News Block --> */}
                        <div className="news-block col-lg-4 col-sm-6">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <RouterLink href="/news/1">
                                            <img src="/images/resource/news-3.jpg" alt="" />
                                        </RouterLink>
                                    </figure>
                                    <span className="date">
                                        <b>28</b> SEP
                                    </span>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-info">
                                        <li>
                                            <i className="fa fa-user"></i> by Admin
                                        </li>
                                        <li>
                                            <i className="fa fa-comments"></i> 2 Comments
                                        </li>
                                    </ul>
                                    <h4 className="title">
                                        <RouterLink href="/news/1">
                                            Helping Companies in Their Green Transition
                                        </RouterLink>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        {/* <!-- News Block --> */}
                        <div className="news-block col-lg-4 col-sm-6">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <RouterLink href="/news/1">
                                            <img src="/images/resource/news-1.jpg" alt="" />
                                        </RouterLink>
                                    </figure>
                                    <span className="date">
                                        <b>28</b> SEP
                                    </span>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-info">
                                        <li>
                                            <i className="fa fa-user"></i> by Admin
                                        </li>
                                        <li>
                                            <i className="fa fa-comments"></i> 2 Comments
                                        </li>
                                    </ul>
                                    <h4 className="title">
                                        <RouterLink href="/news/1">
                                            Winds of Change in the Turbine Service Industry
                                        </RouterLink>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        {/* <!-- News Block --> */}
                        <div className="news-block col-lg-4 col-sm-6">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <RouterLink href="/news/1">
                                            <img src="/images/resource/news-2.jpg" alt="" />
                                        </RouterLink>
                                    </figure>
                                    <span className="date">
                                        <b>28</b> SEP
                                    </span>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-info">
                                        <li>
                                            <i className="fa fa-user"></i> by Admin
                                        </li>
                                        <li>
                                            <i className="fa fa-comments"></i> 2 Comments
                                        </li>
                                    </ul>
                                    <h4 className="title">
                                        <RouterLink href="/news/1">
                                            Powering Asia Pacific’s Energy Transition
                                        </RouterLink>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--End News Section --> */}
        </>
    )
}
