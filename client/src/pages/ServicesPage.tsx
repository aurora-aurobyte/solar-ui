

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
				<div className="col-xl-4 col-md-6">
          {/* <!-- Service Block Two --> */}
          <div className="service-block-home2 wow fadeInUp">
            <figure className="image"><a href="page-service-details.html"><img src="images/resource/service-5.jpg" alt=""/></a></figure>
            <div className="inner-box ">
              <i className="icon flaticon-solar-panel"></i>
              <h4 className="title mt-0"><a href="page-service-details.html">Installation and commissioning</a></h4>
              <div className="text">System installation begins with installing solar panels on the roof including solar power optimizer and attaching panels. Our electrical experts will then connect the optimizer to the inverter and to your circuit breaker box which generates electricity to your home or business.</div>
              <a href="page-service-details.html" className="read-more">Read More</a>
            </div>
          </div>
        </div>
				<div className="col-xl-4 col-md-6">
          {/* <!-- Service Block Two --> */}
          <div className="service-block-home2 wow fadeInUp">
            <figure className="image"><a href="page-service-details.html"><img src="images/resource/service-1.jpg" alt=""/></a></figure>
            <div className="inner-box ">
              <i className="icon flaticon-wind-turbine"></i>
              <h4 className="title mt-0"><a href="page-service-details.html">System Solutions and approval</a></h4>
              <div className="text">Once choosing the most suitable solar system we will provide a comprehensive solar system drawing along with a projected energy report at no cost. We also ensure to guide you through all the paperwork necessary to be approved for CEB or LECO requirement standards.</div>
              <a href="page-service-details.html" className="read-more">Read More</a>
            </div>
          </div>
        </div>
				<div className="col-xl-4 col-md-6">
          {/* <!-- Service Block Two --> */}
          <div className="service-block-home2 wow fadeInUp">
            <figure className="image"><a href="page-service-details.html"><img src="images/resource/service-2.jpg" alt=""/></a></figure>
            <div className="inner-box ">
              <i className="icon flaticon-settings"></i>
              <h4 className="title mt-0"><a href="page-service-details.html">Field Inspection and Consultation</a></h4>
              <div className="text">Access Energy Engineering's qualified team will perform an inspection of your property, complete an engineering assessment, and consult with you to determine the best solar power system for your property. Your home’s architecture, current and future consumption requirements and financial situation will be considered.</div>
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