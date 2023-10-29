

type Props = {}

export default function ServicesPage({}: Props) {
  return (
    <>
    {/* <!-- Start main-content --> */}
	<section className="page-title" style={{backgroundImage: "url(images/background/page-title-bg.png)"}}>
		<div className="auto-container">
			<div className="title-outer text-center">
				<h1 className="title">Services</h1>
				<ul className="page-breadcrumb">
					<li><a href="index.html">Home</a></li>
					<li>Services</li>
				</ul>
			</div>
		</div>
	</section>
	{/* <!-- end main-content --> */}

	{/* <!-- Services Section Two --> */}
	<section className="services-section-home2">
		<div className="large-container">
      <div className="row">
				<div className="col-xl-3 col-md-6">
          {/* <!-- Service Block Two --> */}
          <div className="service-block-home2 wow fadeInUp">
            <figure className="image"><a href="page-service-details.html"><img src="images/resource/service-5.jpg" alt=""/></a></figure>
            <div className="inner-box ">
              <i className="icon flaticon-solar-panel"></i>
              <h4 className="title mt-0"><a href="page-service-details.html">Hybrid Energy</a></h4>
              <div className="text">Hybrid energy refers to the use of multiple sources of energy to meet our energy needs.</div>
              <a href="page-service-details.html" className="read-more">Read More</a>
            </div>
          </div>
        </div>
				<div className="col-xl-3 col-md-6">
          {/* <!-- Service Block Two --> */}
          <div className="service-block-home2 wow fadeInUp">
            <figure className="image"><a href="page-service-details.html"><img src="images/resource/service-1.jpg" alt=""/></a></figure>
            <div className="inner-box ">
              <i className="icon flaticon-wind-turbine"></i>
              <h4 className="title mt-0"><a href="page-service-details.html">Wind Turbines</a></h4>
              <div className="text">Hybrid energy refers to the use of multiple sources of energy to meet our energy needs.</div>
              <a href="page-service-details.html" className="read-more">Read More</a>
            </div>
          </div>
        </div>
				<div className="col-xl-3 col-md-6">
          {/* <!-- Service Block Two --> */}
          <div className="service-block-home2 wow fadeInUp">
            <figure className="image"><a href="page-service-details.html"><img src="images/resource/service-2.jpg" alt=""/></a></figure>
            <div className="inner-box ">
              <i className="icon flaticon-settings"></i>
              <h4 className="title mt-0"><a href="page-service-details.html">Maintenance</a></h4>
              <div className="text">Wind turbines are devices that convert wind energy into electrical power.</div>
              <a href="page-service-details.html" className="read-more">Read More</a>
            </div>
          </div>
        </div>
				<div className="col-xl-3 col-md-6">
          {/* <!-- Service Block Two --> */}
          <div className="service-block-home2 wow fadeInUp">
            <figure className="image"><a href="page-service-details.html"><img src="images/resource/service-3.jpg" alt=""/></a></figure>
            <div className="inner-box ">
              <i className="icon flaticon-windmill"></i>
              <h4 className="title mt-0"><a href="page-service-details.html">Wind Generators</a></h4>
              <div className="text">Wind generators are devices that harness the power of wind to generate electricity.</div>
              <a href="page-service-details.html" className="read-more">Read More</a>
            </div>
          </div>
        </div>
      </div>
		</div>
	</section>
	{/* <!--End Services Section --> */}
    </>
  )
}