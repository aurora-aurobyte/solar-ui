
type Props = {}

export default function PricePage({}: Props) {
  return (
    <>

	{/* <!-- Start main-content --> */}
	<section className="page-title" style={{backgroundImage: "url(images/background/page-title-bg.png)"}}>
		<div className="auto-container">
			<div className="title-outer text-center">
				<h1 className="title">Pricing</h1>
				<ul className="page-breadcrumb">
					<li><a href="index.html">Home</a></li>
					<li>Pricing</li>
				</ul>
			</div>
		</div>
	</section>
	{/* <!-- end main-content --> */}

	{/* <!-- Pricing Section --> */}
	<section className="">
		<div className="container pb-70">
      <div className="row">
        {/* <!-- Pricing Block --> */}
        <div className="pricing-block col-lg-4 col-md-6 wow fadeInRight" data-wow-delay="400ms">
          <div className="inner-box">
            <div className="title-box">
              <h3 className="title">Stater  Plan</h3>
              <div className="text">Lorem Ipsum is simply text of the printing Lorem Ipsum is simply dummy text</div>
            </div>
            <div className="price-box">
              <h2 className="price">$23<sub>/Month</sub></h2>
            </div>
            <ul className="features">
              <li><i className="fa fa-circle-check"></i>Mistakes To Avoid</li>
              <li><i className="fa fa-circle-check"></i>Your Startup</li>
              <li><i className="fa fa-circle-check"></i>Knew About Fonts</li>
              <li><i className="fa fa-circle-check"></i>Winning Metric for Your Startup</li>
            </ul>
            <a href="#" className="theme-btn btn-style-one read-more"><span className="btn-title">Buy Now <i className="fa fa-arrow-right"></i></span></a>
          </div>
        </div>
        {/* <!-- Pricing Block --> */}
        <div className="pricing-block col-lg-4 col-md-6 wow fadeInUp">
          <div className="inner-box">
            <div className="title-box">
              <h3 className="title">Standard Package</h3>
              <div className="text">Lorem Ipsum is simply text of the printing Lorem Ipsum is simply dummy text</div>
            </div>
            <div className="price-box">
              <h2 className="price">$46<sub>/Month</sub></h2>
            </div>
            <ul className="features">
              <li><i className="fa fa-circle-check"></i>Mistakes To Avoid</li>
              <li><i className="fa fa-circle-check"></i>Your Startup</li>
              <li><i className="fa fa-circle-check"></i>Knew About Fonts</li>
              <li><i className="fa fa-circle-check"></i>Winning Metric for Your Startup</li>
            </ul>
            <a href="#" className="theme-btn btn-style-one read-more"><span className="btn-title">Buy Now <i className="fa fa-arrow-right"></i></span></a>
          </div>
        </div>
         {/* <!-- Pricing Block --> */}
         <div className="pricing-block col-lg-4 col-md-6 wow fadeInRight" data-wow-delay="400ms">
          <div className="inner-box">
            <div className="title-box">
              <h3 className="title">Savings Plan</h3>
              <div className="text">Lorem Ipsum is simply text of the printing Lorem Ipsum is simply dummy text</div>
            </div>
            <div className="price-box">
              <h2 className="price">$19<sub>/Month</sub></h2>
            </div>
            <ul className="features">
              <li><i className="fa fa-circle-check"></i>Mistakes To Avoid</li>
              <li><i className="fa fa-circle-check"></i>Your Startup</li>
              <li><i className="fa fa-circle-check"></i>Knew About Fonts</li>
              <li><i className="fa fa-circle-check"></i>Winning Metric for Your Startup</li>
            </ul>
            <a href="#" className="theme-btn btn-style-one read-more"><span className="btn-title">Buy Now <i className="fa fa-arrow-right"></i></span></a>
          </div>
        </div>
      </div>
		</div>
	</section>
	{/* <!--End Pricing Section --> */}
    </>
  )
}