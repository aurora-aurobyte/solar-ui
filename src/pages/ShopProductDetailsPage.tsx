import { useEffect } from "react"

type Props = {}

export default function ShopProductDetailsPage({}: Props) {
    useEffect(() => {
        //Gallery Filters
        // @ts-ignore
        if ($(".filter-list").length) {
            console.log("Setting up")
            // @ts-ignore
            $(".filter-list").mixItUp({})
        }

        // @ts-ignore
        if ($(".product-details .bxslider").length) {
            // @ts-ignore
            $(".product-details .bxslider").bxSlider({
                nextSelector: ".product-details #slider-next",
                prevSelector: ".product-details #slider-prev",
                nextText: '<i class="fa fa-angle-right"></i>',
                prevText: '<i class="fa fa-angle-left"></i>',
                mode: "fade",
                auto: "true",
                speed: "700",
                pagerCustom: ".product-details .slider-pager .thumb-box",
            })
        }
    }, [])
    return (
        <>
            {/* <!-- Start main-content --> */}
            <section className="page-title" style={{ backgroundImage: "url(/images/background/page-title-bg.png)" }}>
                <div className="auto-container">
                    <div className="title-outer text-center">
                        <h1 className="title">Product Deatils</h1>
                        <ul className="page-breadcrumb">
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>Shop</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <!-- end main-content --> */}

            {/* <!--Product Details Start--> */}
            <section className="product-details">
                <div className="container pb-70">
                    <div className="row">
                        <div className="col-lg-6 col-xl-6">
                            <div className="bxslider">
                                <div className="slider-content">
                                    <figure className="image-box">
                                        <a
                                            href="/images/resource/products/product-details.jpg"
                                            className="lightbox-image"
                                            data-fancybox="gallery"
                                        >
                                            <img src="/images/resource/products/product-details.jpg" alt="" />
                                        </a>
                                    </figure>
                                    <div className="slider-pager">
                                        <ul className="thumb-box">
                                            <li>
                                                {" "}
                                                <a className="active" data-slide-index="0" href="#">
                                                    <figure>
                                                        <img
                                                            src="/images/resource/products/product-details.jpg"
                                                            alt=""
                                                        />
                                                    </figure>
                                                </a>{" "}
                                            </li>
                                            <li>
                                                {" "}
                                                <a data-slide-index="1" href="#">
                                                    <figure>
                                                        <img
                                                            src="/images/resource/products/product-details2.jpg"
                                                            alt=""
                                                        />
                                                    </figure>
                                                </a>{" "}
                                            </li>
                                            <li>
                                                {" "}
                                                <a data-slide-index="2" href="#">
                                                    <figure>
                                                        <img
                                                            src="/images/resource/products/product-details3.jpg"
                                                            alt=""
                                                        />
                                                    </figure>
                                                </a>{" "}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="slider-content">
                                    <figure className="image-box">
                                        <a
                                            href="/images/resource/products/product-details2.jpg"
                                            className="lightbox-image"
                                            data-fancybox="gallery"
                                        >
                                            <img src="/images/resource/products/product-details2.jpg" alt="" />
                                        </a>
                                    </figure>
                                    <div className="slider-pager">
                                        <ul className="thumb-box">
                                            <li>
                                                {" "}
                                                <a className="active" data-slide-index="0" href="#">
                                                    <figure>
                                                        <img
                                                            src="/images/resource/products/product-details.jpg"
                                                            alt=""
                                                        />
                                                    </figure>
                                                </a>{" "}
                                            </li>
                                            <li>
                                                {" "}
                                                <a data-slide-index="1" href="#">
                                                    <figure>
                                                        <img
                                                            src="/images/resource/products/product-details2.jpg"
                                                            alt=""
                                                        />
                                                    </figure>
                                                </a>{" "}
                                            </li>
                                            <li>
                                                {" "}
                                                <a data-slide-index="2" href="#">
                                                    <figure>
                                                        <img
                                                            src="/images/resource/products/product-details3.jpg"
                                                            alt=""
                                                        />
                                                    </figure>
                                                </a>{" "}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="slider-content">
                                    <figure className="image-box">
                                        <a
                                            href="/images/resource/products/product-details3.jpg"
                                            className="lightbox-image"
                                            data-fancybox="gallery"
                                        >
                                            <img src="/images/resource/products/product-details3.jpg" alt="" />
                                        </a>
                                    </figure>
                                    <div className="slider-pager">
                                        <ul className="thumb-box">
                                            <li>
                                                {" "}
                                                <a className="active" data-slide-index="0" href="#">
                                                    <figure>
                                                        <img
                                                            src="/images/resource/products/product-details.jpg"
                                                            alt=""
                                                        />
                                                    </figure>
                                                </a>{" "}
                                            </li>
                                            <li>
                                                {" "}
                                                <a data-slide-index="1" href="#">
                                                    <figure>
                                                        <img
                                                            src="/images/resource/products/product-details2.jpg"
                                                            alt=""
                                                        />
                                                    </figure>
                                                </a>{" "}
                                            </li>
                                            <li>
                                                {" "}
                                                <a data-slide-index="2" href="#">
                                                    <figure>
                                                        <img
                                                            src="/images/resource/products/product-details3.jpg"
                                                            alt=""
                                                        />
                                                    </figure>
                                                </a>{" "}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6 product-info">
                            <div className="product-details__top">
                                <h3 className="product-details__title">
                                    AE SOlar Panel <span>Rs. 35,500</span>{" "}
                                </h3>
                            </div>
                            <div className="product-details__reveiw">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <span>2 Customer Reviews</span>
                            </div>
                            <div className="product-details__content">
                                <p className="product-details__content-text1">
                                    AE Solar, TIER1 manufacturer from Germany has proven itself to be a dynamic and
                                    progressive enterprise, positioning itself as one of the leading privately-owned
                                    businesses since its inception in 2003.
                                </p>
                                <p className="product-details__content-text2">
                                    <strong>REF.</strong> 4231/406 <br />
                                    Available in store
                                </p>
                            </div>

                            <div className="product-details__quantity">
                                <h3 className="product-details__quantity-title">Choose quantity</h3>
                                <div className="quantity-box">
                                    <button type="button" className="sub text-white">
                                        <i className="fa fa-minus"></i>
                                    </button>
                                    <input type="number" id="1" defaultValue="1" />
                                    <button type="button" className="add text-white">
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="product-details__buttons">
                                <div className="product-details__buttons-1">
                                    <a href="shop-cart.html" className="theme-btn btn-style-one">
                                        <span className="btn-title">Add to Cart</span>
                                    </a>
                                </div>
                                <div className="product-details__buttons-2">
                                    <a href="shop-product-details.html" className="theme-btn btn-style-one">
                                        <span className="btn-title">Add to Wishlist</span>
                                    </a>
                                </div>
                            </div>
                            <div className="product-details__social">
                                <div className="title mt-10">
                                    <h3>Share with friends</h3>
                                </div>
                                <ul className="social-icon-one product-share">
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-pinterest"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--Product Details End--> */}

            {/* <!--Product Description Start--> */}
            <section className="product-description">
                <div className="container pt-0 pb-90">
                    <div className="product-discription">
                        <div className="tabs-box">
                            <div className="tab-btn-box text-center">
                                <ul className="tab-btns tab-buttons clearfix">
                                    <li className="tab-btn active-btn" data-tab="#tab-1">
                                        Description
                                    </li>
                                    <li className="tab-btn" data-tab="#tab-2">
                                        Reviews
                                    </li>
                                </ul>
                            </div>
                            <div className="tabs-content">
                                <div className="tab active-tab" id="tab-1">
                                    <div className="text">
                                        <h3 className="product-description__title">Description</h3>
                                        <p className="product-description__text1">
                                            Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There
                                            are many variations of passages of Lorem Ipsum available, but the majority
                                            have alteration in some injected or words which don't look even slightly
                                            believable. If you are going to use a passage of Lorem Ipsum, you need to be
                                            sure there isn't anything embarrang hidden in the middle of text.
                                        </p>
                                        <div className="product-description__list">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <p>
                                                        <span className="fa fa-arrow-right"></span> Nam at elit nec
                                                        neque suscipit gravida.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        <span className="fa fa-arrow-right"></span> Aenean egestas orci
                                                        eu maximus tincidunt.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        <span className="fa fa-arrow-right"></span> Curabitur vel turpis
                                                        id tellus cursus laoreet.
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="product-description__tex2">
                                            All the Lorem Ipsum generators on the Internet tend to repeat predefined
                                            chunks as necessary, making this the first true generator on the Internet.
                                            It uses a dictionary of over 200 Latin words, combined with a handful of
                                            model sentence structures, to generate Lorem Ipsum which looks reasonable.
                                        </p>
                                    </div>
                                </div>
                                <div className="tab" id="tab-2">
                                    <div className="customer-comment">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 comment-column">
                                                <div className="single-comment-box">
                                                    <div className="inner-box">
                                                        <figure className="comment-thumb">
                                                            <img src="/images/resource/testi-2.jpg" alt="" />
                                                        </figure>
                                                        <div className="inner">
                                                            <ul className="rating clearfix">
                                                                <li>
                                                                    <i className="fas fa-star"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-star"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-star"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-star"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-star"></i>
                                                                </li>
                                                            </ul>
                                                            <h5>
                                                                Jon D. William, <span>10 Jan, 2023 . 4:00 pm</span>
                                                            </h5>
                                                            <p>
                                                                Aliquam hendrerit a augue insuscipit. Etiam aliquam
                                                                massa quis des mauris commodo.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 comment-column">
                                                <div className="single-comment-box">
                                                    <div className="inner-box">
                                                        <figure className="comment-thumb">
                                                            <img src="/images/resource/testi-1.jpg" alt="" />
                                                        </figure>
                                                        <div className="inner">
                                                            <ul className="rating clearfix">
                                                                <li>
                                                                    <i className="fas fa-star"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-star"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-star"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-star"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-star"></i>
                                                                </li>
                                                            </ul>
                                                            <h5>
                                                                Aleesha Brown, <span>12 Feb, 2023 . 8:00 pm</span>
                                                            </h5>
                                                            <p>
                                                                Aliquam hendrerit a augue insuscipit. Etiam aliquam
                                                                massa quis des mauris commodo.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-box">
                                        <h3>Add Your Comments</h3>
                                        <form
                                            id="contact_form"
                                            name="contact_form"
                                            className=""
                                            action="includes/sendmail.php"
                                            method="post"
                                        >
                                            <div className="mb-3">
                                                <textarea
                                                    name="form_message"
                                                    className="form-control required"
                                                    rows={7}
                                                    placeholder="Enter Message"
                                                ></textarea>
                                            </div>
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
                                            <div className="col-lg-12 col-md-12 col-sm-12 column">
                                                <div className="review-box clearfix">
                                                    <p>Your Review</p>
                                                    <ul className="rating clearfix">
                                                        <li>
                                                            <i className="far fa-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="far fa-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="far fa-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="far fa-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="far fa-star"></i>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 column">
                                                <div className="form-group clearfix">
                                                    <div className="custom-controls-stacked">
                                                        <label className="custom-control material-checkbox">
                                                            <input type="checkbox" className="material-control-input" />
                                                            <span className="material-control-indicator"></span>
                                                            <span className="description">
                                                                Save my name, email, and website in this browser for the
                                                                next time I comment.
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
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
                    </div>
                </div>
            </section>
            {/* <!--Product Description End--> */}

            <section className="related-product">
                <div className="container pt-0 pb-90">
                    <h3>Related Products</h3>
                    <div className="row clearfix">
                        <div className="col">
                            {/* <!--MixitUp Galery--> */}
                            <div className="mixitup-gallery">
                                <div className="filter-list row">
                                    {/* <!--Product Block--> */}
                                    <div className="product-block all mix pantry fruit col-lg-3 col-md-6 col-sm-12">
                                        <div className="inner-box">
                                            <div className="image">
                                                <a href="shop-product-details.html">
                                                    <img src="/images/resource/products/1.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    <a href="shop-product-details.html">Headphone</a>
                                                </h4>
                                                <span className="price">$32.00</span>
                                                <span className="rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </div>
                                            <div className="icon-box">
                                                <a href="shop-product-details.html" className="ui-btn like-btn">
                                                    <i className="fa fa-heart"></i>
                                                </a>
                                                <a href="shop-cart.html" className="ui-btn add-to-cart">
                                                    <i className="fa fa-shopping-cart"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--Product Block--> */}
                                    <div className="product-block all mix dairy meat fruit col-lg-3 col-md-6 col-sm-12">
                                        <div className="inner-box">
                                            <div className="image">
                                                <a href="shop-product-details.html">
                                                    <img src="/images/resource/products/2.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    <a href="shop-product-details.html">Lagage</a>
                                                </h4>
                                                <span className="price">$32.00</span>
                                                <span className="rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </div>
                                            <div className="icon-box">
                                                <a href="shop-product-details.html" className="ui-btn like-btn">
                                                    <i className="fa fa-heart"></i>
                                                </a>
                                                <a href="shop-cart.html" className="ui-btn add-to-cart">
                                                    <i className="fa fa-shopping-cart"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--Product Block--> */}
                                    <div className="product-block all mix pantry fruit vagetables col-lg-3 col-md-6 col-sm-12">
                                        <div className="inner-box">
                                            <div className="image">
                                                <a href="shop-product-details.html">
                                                    <img src="/images/resource/products/3.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    <a href="shop-product-details.html">Watch</a>
                                                </h4>
                                                <span className="price">$32.00</span>
                                                <span className="rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </div>
                                            <div className="icon-box">
                                                <a href="shop-product-details.html" className="ui-btn like-btn">
                                                    <i className="fa fa-heart"></i>
                                                </a>
                                                <a href="shop-cart.html" className="ui-btn add-to-cart">
                                                    <i className="fa fa-shopping-cart"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--Product Block--> */}
                                    <div className="product-block all mix dairy pantry meat vagetables col-lg-3 col-md-6 col-sm-12">
                                        <div className="inner-box">
                                            <div className="image">
                                                <a href="shop-product-details.html">
                                                    <img src="/images/resource/products/8.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    <a href="shop-product-details.html">SD Card</a>
                                                </h4>
                                                <span className="price">$32.00</span>
                                                <span className="rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </div>
                                            <div className="icon-box">
                                                <a href="shop-product-details.html" className="ui-btn like-btn">
                                                    <i className="fa fa-heart"></i>
                                                </a>
                                                <a href="shop-cart.html" className="ui-btn add-to-cart">
                                                    <i className="fa fa-shopping-cart"></i>
                                                </a>
                                            </div>
                                        </div>
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
