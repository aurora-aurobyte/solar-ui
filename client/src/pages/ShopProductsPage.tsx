

type Props = {}

export default function ShopProductsPage({}: Props) {
  return (
    <>
    {/* <!-- Start main-content --> */}
	<section className="page-title" style={{backgroundImage: "url(images/background/page-title-bg.png)"}}>
		<div className="auto-container">
			<div className="title-outer text-center">
				<h1 className="title">Shop</h1>
				<ul className="page-breadcrumb">
					<li><a href="index.html">Home</a></li>
					<li>Products</li>
				</ul>
			</div>
		</div>
	</section>
	{/* <!-- end main-content --> */}

	{/* <!-- Featured Products --> */}
	<section className="featured-products">
		<div className="auto-container">

			{/* <!--MixitUp Galery--> */}
			<div className="mixitup-gallery">
				{/* <!--Filter--> */}
				<div className="filters clearfix">
					<ul className="filter-tabs filter-btns clearfix">
						<li className="active filter" data-role="button" data-filter="all">All</li>
						<li className="filter" data-role="button" data-filter=".dairy">Cyber</li>
						<li className="filter" data-role="button" data-filter=".pantry">Digital</li>
						<li className="filter" data-role="button" data-filter=".meat">Software</li>
						<li className="filter" data-role="button" data-filter=".fruit">Technology</li>
						<li className="filter" data-role="button" data-filter=".vagetables">Development</li>
					</ul>
				</div>

				<div className="filter-list row">
					{/* <!--Product Block--> */}
					<div className="product-block all mix pantry fruit col-lg-3 col-md-6 col-sm-12">
						<div className="inner-box">
							<div className="image"><a href="shop-product-details.html"><img src="images/resource/products/1.jpg" alt=""/></a></div>
							<div className="content">
								<h4><a href="shop-product-details.html">Show Piece</a></h4>
								<span className="price">$32.00</span>
								<span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
							</div>
							<div className="icon-box">
								<a href="shop-product-details.html" className="ui-btn like-btn"><i className="fa fa-heart"></i></a>
								<a href="shop-cart.html" className="ui-btn add-to-cart"><i className="fa fa-shopping-cart"></i></a>
							</div>
						</div>
					</div>

					{/* <!--Product Block--> */}
					<div className="product-block all mix dairy meat fruit col-lg-3 col-md-6 col-sm-12">
						<div className="inner-box">
							<div className="image"><a href="shop-product-details.html"><img src="images/resource/products/2.jpg" alt=""/></a></div>
							<div className="content">
								<h4><a href="shop-product-details.html">Leather Belt</a></h4>
								<span className="price">$52.00</span>
								<span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
							</div>
							<div className="icon-box">
								<a href="shop-product-details.html" className="ui-btn like-btn"><i className="fa fa-heart"></i></a>
								<a href="shop-cart.html" className="ui-btn add-to-cart"><i className="fa fa-shopping-cart"></i></a>
							</div>
						</div>
					</div>

					{/* <!--Product Block--> */}
					<div className="product-block all mix pantry fruit vagetables col-lg-3 col-md-6 col-sm-12">
						<div className="inner-box">
							<div className="image"><a href="shop-product-details.html"><img src="images/resource/products/3.jpg" alt=""/></a></div>
							<div className="content">
								<h4><a href="shop-product-details.html">Sunglasses</a></h4>
								<span className="price">$42.00</span>
								<span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
							</div>
							<div className="icon-box">
								<a href="shop-product-details.html" className="ui-btn like-btn"><i className="fa fa-heart"></i></a>
								<a href="shop-cart.html" className="ui-btn add-to-cart"><i className="fa fa-shopping-cart"></i></a>
							</div>
						</div>
					</div>

					{/* <!--Product Block--> */}
					<div className="product-block all mix dairy meat vagetables col-lg-3 col-md-6 col-sm-12">
						<div className="inner-box">
							<div className="image"><a href="shop-product-details.html"><img src="images/resource/products/4.jpg" alt=""/></a></div>
							<div className="content">
								<h4><a href="shop-product-details.html">Backpack</a></h4>
								<span className="price">$22.00</span>
								<span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
							</div>
							<div className="icon-box">
								<a href="shop-product-details.html" className="ui-btn like-btn"><i className="fa fa-heart"></i></a>
								<a href="shop-cart.html" className="ui-btn add-to-cart"><i className="fa fa-shopping-cart"></i></a>
							</div>
						</div>
					</div>

					{/* <!--Product Block--> */}
					<div className="product-block all mix pantry meat fruit col-lg-3 col-md-6 col-sm-12">
						<div className="inner-box">
							<div className="image"><a href="shop-product-details.html"><img src="images/resource/products/5.jpg" alt=""/></a></div>
							<div className="content">
								<h4><a href="shop-product-details.html">Hand Watch</a></h4>
								<span className="price">$34.00</span>
								<span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
							</div>
							<div className="icon-box">
								<a href="shop-product-details.html" className="ui-btn like-btn"><i className="fa fa-heart"></i></a>
								<a href="shop-cart.html" className="ui-btn add-to-cart"><i className="fa fa-shopping-cart"></i></a>
							</div>
						</div>
					</div>

					{/* <!--Product Block--> */}
					<div className="product-block all mix dairy pantry col-lg-3 col-md-6 col-sm-12">
						<div className="inner-box">
							<div className="image"><a href="shop-product-details.html"><img src="images/resource/products/6.jpg" alt=""/></a></div>
							<div className="content">
								<h4><a href="shop-product-details.html">Party Bag</a></h4>
								<span className="price">$25.00</span>
								<span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
							</div>
							<div className="icon-box">
								<a href="shop-product-details.html" className="ui-btn like-btn"><i className="fa fa-heart"></i></a>
								<a href="shop-cart.html" className="ui-btn add-to-cart"><i className="fa fa-shopping-cart"></i></a>
							</div>
						</div>
					</div>

					{/* <!--Product Block--> */}
					<div className="product-block all mix fruit vagetables col-lg-3 col-md-6 col-sm-12">
						<div className="inner-box">
							<div className="image"><a href="shop-product-details.html"><img src="images/resource/products/7.jpg" alt=""/></a></div>
							<div className="content">
								<h4><a href="shop-product-details.html">Coffee Mug</a></h4>
								<span className="price">$20.00</span>
								<span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
							</div>
							<div className="icon-box">
								<a href="shop-product-details.html" className="ui-btn like-btn"><i className="fa fa-heart"></i></a>
								<a href="shop-cart.html" className="ui-btn add-to-cart"><i className="fa fa-shopping-cart"></i></a>
							</div>
						</div>
					</div>

					{/* <!--Product Block--> */}
					<div className="product-block all mix dairy pantry meat vagetables col-lg-3 col-md-6 col-sm-12">
						<div className="inner-box">
							<div className="image"><a href="shop-product-details.html"><img src="images/resource/products/8.jpg" alt=""/></a></div>
							<div className="content">
								<h4><a href="shop-product-details.html">Smart Watch</a></h4>
								<span className="price">$40.00</span>
								<span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
							</div>
							<div className="icon-box">
								<a href="shop-product-details.html" className="ui-btn like-btn"><i className="fa fa-heart"></i></a>
								<a href="shop-cart.html" className="ui-btn add-to-cart"><i className="fa fa-shopping-cart"></i></a>
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