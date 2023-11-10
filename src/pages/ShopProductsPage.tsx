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
                            <div className="product-block  col-lg-3 col-md-6 col-sm-12" >
                                <div className="inner-box">
                                    <div className="image">
                                        <RouterLink href="/products/1">
                                            <img src="/images/resource/products/solar-1.jpg" alt="" />
                                        </RouterLink>
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <RouterLink href="/products/1">JinKO Solar Panel</RouterLink>
                                        </h4>
                                        {/* <span className="price">Rs. 36,470</span> */}
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
                                            <img src="/images/resource/products/solar-2.webp" alt="" />
                                        </RouterLink>
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <RouterLink href="/products/2">AE Solar Panel</RouterLink>
                                        </h4>
                                        {/* <span className="price">Rs 2,250</span> */}
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
                                            <img src="/images/resource/products/solar-3.jfif" alt="" />
                                        </RouterLink>
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <RouterLink href="/products/3">JA Solar Panel</RouterLink>
                                        </h4>
                                        {/* <span className="price">Rs. 390</span> */}
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
                                            <img src="/images/resource/products/Inverter-SMA.jpg" alt="" />
                                        </RouterLink>
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <RouterLink href="/products/4">
                                            SMA Inverter
                                            </RouterLink>
                                        </h4>
                                        {/* <span className="price">Rs. 550</span> */}
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
                            {/* <!--Product Block--> */}
                            <div className="product-block  col-lg-3 col-md-6 col-sm-12" >
                                <div className="inner-box">
                                    <div className="image">
                                        <RouterLink href="/products/1">
                                            <img src="/images/resource/products/Inverter-Solax.jfif" alt="" />
                                        </RouterLink>
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <RouterLink href="/products/1">Solax Inverter</RouterLink>
                                        </h4>
                                        {/* <span className="price">Rs. 36,470</span> */}
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
                            <div className="product-block  col-lg-3 col-md-6 col-sm-12" >
                                <div className="inner-box">
                                    <div className="image">
                                        <RouterLink href="/products/1">
                                            <img src="/images/resource/products/Inverter-Solis.jpg" alt="" />
                                        </RouterLink>
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <RouterLink href="/products/1">Solis Inverter</RouterLink>
                                        </h4>
                                        {/* <span className="price">Rs. 36,470</span> */}
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
                            <div className="product-block  col-lg-3 col-md-6 col-sm-12" >
                                <div className="inner-box">
                                    <div className="image">
                                        <RouterLink href="/products/1">
                                            <img src="/images/resource/products/FIMER Inverter.jpg" alt="" />
                                        </RouterLink>
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <RouterLink href="/products/1">FIMER Inverter</RouterLink>
                                        </h4>
                                        {/* <span className="price">Rs. 36,470</span> */}
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
                            <div className="product-block  col-lg-3 col-md-6 col-sm-12" >
                                <div className="inner-box">
                                    <div className="image">
                                        <RouterLink href="/products/1">
                                            <img src="/images/resource/products/deye inverter.png" alt="" />
                                        </RouterLink>
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <RouterLink href="/products/1">Inverter deye</RouterLink>
                                        </h4>
                                        {/* <span className="price">Rs. 36,470</span> */}
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
                            <div className="product-block  col-lg-3 col-md-6 col-sm-12" >
                                <div className="inner-box">
                                    <div className="image">
                                        <RouterLink href="/products/1">
                                            <img src="/images/resource/products/Solar Water Panel.webp" alt="" />
                                        </RouterLink>
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <RouterLink href="/products/1">Solar Water Panel</RouterLink>
                                        </h4>
                                        {/* <span className="price">Rs. 36,470</span> */}
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
                            <div className="product-block  col-lg-3 col-md-6 col-sm-12" >
                                <div className="inner-box">
                                    <div className="image">
                                        <RouterLink href="/products/1">
                                            <img src="/images/resource/products/phoenix spd.webp" alt="" />
                                        </RouterLink>
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <RouterLink href="/products/1">Phoenix SPD</RouterLink>
                                        </h4>
                                        {/* <span className="price">Rs. 36,470</span> */}
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
                            <div className="product-block  col-lg-3 col-md-6 col-sm-12" >
                                <div className="inner-box">
                                    <div className="image">
                                        <RouterLink href="/products/1">
                                            <img src="/images/resource/products/SPD Suntree.jfif" alt="" />
                                        </RouterLink>
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <RouterLink href="/products/1">Suntree SPD</RouterLink>
                                        </h4>
                                        {/* <span className="price">Rs. 36,470</span> */}
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
                            <div className="product-block  col-lg-3 col-md-6 col-sm-12" >
                                <div className="inner-box">
                                    <div className="image">
                                        <RouterLink href="/products/1">
                                            <img src="/images/resource/products/Street Light.jpeg" alt="" />
                                        </RouterLink>
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <RouterLink href="/products/1">Street Light</RouterLink>
                                        </h4>
                                        {/* <span className="price">Rs. 36,470</span> */}
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
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Featured Products --> */}
        </>
    )
}
