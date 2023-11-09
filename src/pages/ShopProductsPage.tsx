import { RouterLink } from "routes/components"

type Props = {}

export default function ShopProductsPage({}: Props) {
    return (
        <>
            {/* <!-- Start main-content --> */}
            <section className="page-title" style={{ backgroundImage: "url(images/background/page-title-bg.png)" }}>
                <div className="auto-container">
                    <div className="title-outer text-center">
                        <h1 className="title">Shop</h1>
                        <ul className="page-breadcrumb">
                            <li>
                                <RouterLink href="/">Home</RouterLink>
                            </li>
                            <li>Products</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <!-- end main-content --> */}
            {/* 
	<!-- Featured Products --> */}
            <section className="featured-products">
                <div className="auto-container">
                    {/* <!--MixitUp Galery--> */}
                    <div className="mixitup-gallery">
                        {/* <!--Filter--> */}
                        <div className="filters clearfix">
                            <ul className="filter-tabs filter-btns clearfix">
                                <li className="active filter" data-role="button" data-filter="panels">
                                    Panels
                                </li>
                                <li className="filter" data-role="button" data-filter=".inverters">
                                    Inverters
                                </li>
                                <li className="filter" data-role="button" data-filter=".waterPump">
                                    Water Pump
                                </li>
                                <li className="filter" data-role="button" data-filter=".streetLight">
                                    Street Light
                                </li>
                            </ul>
                        </div>

                        <div className="filter-list row">
                            {/* <!--Product Block--> */}
                            <div className="product-block  col-lg-3 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image">
                                        <RouterLink href="/products/1">
                                            <img src="/images/resource/products/1.jpg" alt="" />
                                        </RouterLink>
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <RouterLink href="/products/1">Show Piece</RouterLink>
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
                                        <RouterLink href="/products/1" className="ui-btn like-btn">
                                            <i className="fa fa-heart"></i>
                                        </RouterLink>
                                        <RouterLink href="/shop-cart" className="ui-btn add-to-cart">
                                            <i className="fa fa-shopping-cart"></i>
                                        </RouterLink>
                                    </div>
                                </div>
                            </div>

                            {/* <!--Product Block--> */}
                            <div className="product-block  col-lg-3 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image">
                                        <RouterLink href="/products/2">
                                            <img src="/images/resource/products/2.jpg" alt="" />
                                        </RouterLink>
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <RouterLink href="/products/2">Leather Belt</RouterLink>
                                        </h4>
                                        <span className="price">$52.00</span>
                                        <span className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </span>
                                    </div>
                                    <div className="icon-box">
                                        <RouterLink href="/products/2" className="ui-btn like-btn">
                                            <i className="fa fa-heart"></i>
                                        </RouterLink>
                                        <RouterLink href="/shop-cart" className="ui-btn add-to-cart">
                                            <i className="fa fa-shopping-cart"></i>
                                        </RouterLink>
                                    </div>
                                </div>
                            </div>

                            {/* <!--Product Block--> */}
                            <div className="product-block  col-lg-3 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image">
                                        <RouterLink href="/products/3">
                                            <img src="/images/resource/products/3.jpg" alt="" />
                                        </RouterLink>
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <RouterLink href="/products/3">Sunglasses</RouterLink>
                                        </h4>
                                        <span className="price">$42.00</span>
                                        <span className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </span>
                                    </div>
                                    <div className="icon-box">
                                        <RouterLink href="/products/3" className="ui-btn like-btn">
                                            <i className="fa fa-heart"></i>
                                        </RouterLink>
                                        <RouterLink href="/shop-cart" className="ui-btn add-to-cart">
                                            <i className="fa fa-shopping-cart"></i>
                                        </RouterLink>
                                    </div>
                                </div>
                            </div>

                            {/* <!--Product Block--> */}
                            <div className="product-block  col-lg-3 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image">
                                        <RouterLink href="/products/4">
                                            <img src="/images/resource/products/4.jpg" alt="" />
                                        </RouterLink>
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <RouterLink href="/products/4">Backpack</RouterLink>
                                        </h4>
                                        <span className="price">$22.00</span>
                                        <span className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </span>
                                    </div>
                                    <div className="icon-box">
                                        <RouterLink href="/products/4" className="ui-btn like-btn">
                                            <i className="fa fa-heart"></i>
                                        </RouterLink>
                                        <RouterLink href="/shop-cart" className="ui-btn add-to-cart">
                                            <i className="fa fa-shopping-cart"></i>
                                        </RouterLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Featured Products --> */}
        </>
    )
}
