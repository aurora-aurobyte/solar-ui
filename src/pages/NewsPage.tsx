type Props = {}

export default function NewsPage({}: Props) {
    return (
        <>
            {/* <!-- Start main-content --> */}
            <section className="page-title" style={{ backgroundImage: "url(images/background/page-title-bg.png)" }}>
                <div className="auto-container">
                    <div className="title-outer text-center">
                        <h1 className="title">News Details</h1>
                        <ul className="page-breadcrumb">
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>News</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <!-- end main-content --> */}

            {/* <!--Blog Details Start--> */}
            <section className="blog-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="blog-details__left">
                                <div className="blog-details__img">
                                    <img src="/images/resource/news-details.jpg" alt="" />
                                    <div className="blog-details__date">
                                        <span className="day">28</span>
                                        <span className="month">Aug</span>
                                    </div>
                                </div>
                                <div className="blog-details__content">
                                    <ul className="list-unstyled blog-details__meta">
                                        <li>
                                            <a href="news-details.html">
                                                <i className="fas fa-user-circle"></i> Admin
                                            </a>{" "}
                                        </li>
                                        <li>
                                            <a href="news-details.html">
                                                <i className="fas fa-comments"></i> 02 Comments
                                            </a>
                                        </li>
                                    </ul>
                                    <h3 className="blog-details__title">Delivering the best web design agency</h3>
                                    <p className="blog-details__text-2">
                                        Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla.
                                        Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin
                                        at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus.
                                        Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae
                                        et nunc. Sed vitae leo vitae nisl pellentesque semper.
                                    </p>
                                    <p className="blog-details__text-2">
                                        Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla.
                                        Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin
                                        at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus.
                                        Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae
                                        et nunc. Sed vitae leo vitae nisl pellentesque semper.
                                    </p>
                                    <p className="blog-details__text-2">
                                        Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla.
                                        Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin
                                        at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus.
                                        Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae
                                        et nunc. Sed vitae leo vitae nisl pellentesque semper.
                                    </p>
                                </div>
                                <div className="blog-details__bottom">
                                    <p className="blog-details__tags">
                                        {" "}
                                        <span>Tags</span> <a href="news-details.html">Business</a>{" "}
                                        <a href="news-details.html">Agency</a>{" "}
                                    </p>
                                    <div className="blog-details__social-list">
                                        {" "}
                                        <a href="news-details.html">
                                            <i className="fab fa-twitter"></i>
                                        </a>{" "}
                                        <a href="news-details.html">
                                            <i className="fab fa-facebook"></i>
                                        </a>{" "}
                                        <a href="news-details.html">
                                            <i className="fab fa-pinterest-p"></i>
                                        </a>{" "}
                                        <a href="news-details.html">
                                            <i className="fab fa-instagram"></i>
                                        </a>{" "}
                                    </div>
                                </div>
                                <div className="nav-links">
                                    <div className="prev">
                                        <a href="news-details.html" rel="prev">
                                            Bring to the table win-win survival strategies
                                        </a>
                                    </div>
                                    <div className="next">
                                        <a href="news-details.html" rel="next">
                                            How to lead a healthy &amp; well-balanced life
                                        </a>
                                    </div>
                                </div>
                                <div className="comment-one">
                                    <h3 className="comment-one__title">2 Comments</h3>
                                    <div className="comment-one__single">
                                        <div className="comment-one__image">
                                            {" "}
                                            <img src="/images/resource/testi-2.jpg" alt="" />{" "}
                                        </div>
                                        <div className="comment-one__content">
                                            <h3>Kevin Martin</h3>
                                            <p>
                                                Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia
                                                nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus
                                                nulla, sollicitudin at euismod.
                                            </p>
                                            <a
                                                href="news-details.html"
                                                className="theme-btn btn-style-one comment-one__btn"
                                            >
                                                <span className="btn-title">Reply</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="comment-one__single">
                                        <div className="comment-one__image">
                                            {" "}
                                            <img src="/images/resource/testi-1.jpg" alt="" />{" "}
                                        </div>
                                        <div className="comment-one__content">
                                            <h3>Sarah Albert</h3>
                                            <p>
                                                Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia
                                                nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus
                                                nulla, sollicitudin at euismod.
                                            </p>
                                            <a
                                                href="news-details.html"
                                                className="theme-btn btn-style-one comment-one__btn"
                                            >
                                                <span className="btn-title">Reply</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="comment-form">
                                        <h3 className="comment-form__title">Leave a Comment</h3>
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
                                            <div className="mb-3">
                                                <textarea
                                                    name="form_message"
                                                    className="form-control required"
                                                    rows={5}
                                                    placeholder="Enter Message"
                                                ></textarea>
                                            </div>
                                            <div className="mb-3">
                                                <input
                                                    name="form_botcheck"
                                                    className="form-control"
                                                    type="hidden"
                                                    defaultValue=""
                                                />
                                                <button
                                                    type="submit"
                                                    className="theme-btn btn-style-one"
                                                    data-loading-text="Please wait..."
                                                >
                                                    <span className="btn-title">Submit Comment</span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="sidebar">
                                <div className="sidebar__single sidebar__search">
                                    <form action="#" className="sidebar__search-form">
                                        <input type="search" placeholder="Search here" />
                                        <button type="submit">
                                            <i className="lnr-icon-search"></i>
                                        </button>
                                    </form>
                                </div>
                                <div className="sidebar__single sidebar__post">
                                    <h3 className="sidebar__title">Latest Posts</h3>
                                    <ul className="sidebar__post-list list-unstyled">
                                        <li>
                                            <div className="sidebar__post-image">
                                                {" "}
                                                <img src="/images/resource/news-1.jpg" alt="" />{" "}
                                            </div>
                                            <div className="sidebar__post-content">
                                                <h3>
                                                    {" "}
                                                    <span className="sidebar__post-content-meta">
                                                        <i className="fas fa-user-circle"></i>Admin
                                                    </span>{" "}
                                                    <a href="news-details.html">Top crypto exchange influencers</a>
                                                </h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sidebar__post-image">
                                                {" "}
                                                <img src="/images/resource/news-2.jpg" alt="" />{" "}
                                            </div>
                                            <div className="sidebar__post-content">
                                                <h3>
                                                    {" "}
                                                    <span className="sidebar__post-content-meta">
                                                        <i className="fas fa-user-circle"></i>Admin
                                                    </span>{" "}
                                                    <a href="news-details.html">
                                                        Necessity may give us best virtual court
                                                    </a>{" "}
                                                </h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sidebar__post-image">
                                                {" "}
                                                <img src="/images/resource/news-3.jpg" alt="" />{" "}
                                            </div>
                                            <div className="sidebar__post-content">
                                                <h3>
                                                    {" "}
                                                    <span className="sidebar__post-content-meta">
                                                        <i className="fas fa-user-circle"></i>Admin
                                                    </span>{" "}
                                                    <a href="news-details.html">You should know about business plan</a>{" "}
                                                </h3>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sidebar__single sidebar__category">
                                    <h3 className="sidebar__title">Categories</h3>
                                    <ul className="sidebar__category-list list-unstyled">
                                        <li>
                                            <a href="news-details.html">
                                                Business<span className="icon-right-arrow"></span>
                                            </a>{" "}
                                        </li>
                                        <li className="active">
                                            <a href="news-details.html">
                                                Digital Agency<span className="icon-right-arrow"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="news-details.html">
                                                Introductions<span className="icon-right-arrow"></span>
                                            </a>{" "}
                                        </li>
                                        <li>
                                            <a href="news-details.html">
                                                New Technologies<span className="icon-right-arrow"></span>
                                            </a>{" "}
                                        </li>
                                        <li>
                                            <a href="news-details.html">
                                                Parallax Effects<span className="icon-right-arrow"></span>
                                            </a>{" "}
                                        </li>
                                        <li>
                                            <a href="news-details.html">
                                                Web Development<span className="icon-right-arrow"></span>
                                            </a>{" "}
                                        </li>
                                    </ul>
                                </div>
                                <div className="sidebar__single sidebar__tags">
                                    <h3 className="sidebar__title">Tags</h3>
                                    <div className="sidebar__tags-list">
                                        {" "}
                                        <a href="#">Consulting</a> <a href="#">Agency</a> <a href="#">Business</a>{" "}
                                        <a href="#">Digital</a> <a href="#">Experience</a> <a href="#">Technology</a>{" "}
                                    </div>
                                </div>
                                <div className="sidebar__single sidebar__comments">
                                    <h3 className="sidebar__title">Recent Comments</h3>
                                    <ul className="sidebar__comments-list list-unstyled">
                                        <li>
                                            <div className="sidebar__comments-icon">
                                                {" "}
                                                <i className="fas fa-comments"></i>{" "}
                                            </div>
                                            <div className="sidebar__comments-text-box">
                                                <p>
                                                    A wordpress commenter on <br />
                                                    launch new mobile app
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sidebar__comments-icon">
                                                {" "}
                                                <i className="fas fa-comments"></i>{" "}
                                            </div>
                                            <div className="sidebar__comments-text-box">
                                                <p>
                                                    {" "}
                                                    <span>John Doe</span> on template:
                                                </p>
                                                <h5>comments</h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sidebar__comments-icon">
                                                {" "}
                                                <i className="fas fa-comments"></i>{" "}
                                            </div>
                                            <div className="sidebar__comments-text-box">
                                                <p>
                                                    A wordpress commenter on <br />
                                                    launch new mobile app
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sidebar__comments-icon">
                                                {" "}
                                                <i className="fas fa-comments"></i>{" "}
                                            </div>
                                            <div className="sidebar__comments-text-box">
                                                <p>
                                                    {" "}
                                                    <span>John Doe</span> on template:
                                                </p>
                                                <h5>comments</h5>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--Blog Details End--> */}
        </>
    )
}
