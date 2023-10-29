
type Props = {}

export default function Service({}: Props) {
  return (
    <>
    {/* <!-- Services Section Two --> */}
	<section className="services-section-home2">
		<div className="auto-container">
			<div className="row">
				<div className="col-lg-5">
					<div className="sec-title">
						<span className="sub-title">Specialise In The Transportation</span>
						<h2>Offering Sustainable Energy Services</h2>
					</div>
				</div>
				<div className="col-lg-7">
					<div className="sec-title">
						<p className="text mt-0">By offering sustainable energy services, you can help reduce greenhouse gas emissions, promote energy independence, and provide customers with clean, reliable energy solutions that can save them money and help protect the environment.</p>
					</div>
				</div>
			</div>
      <div className="row">
      	<div className="col-lg-12">
      		<div className="home2-service-slider owl-carousel owl-theme">
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
            {/* <!-- Service Block Two --> */}
            <div className="service-block-home2 wow fadeInUp">
              <figure className="image"><a href="page-service-details.html"><img src="images/resource/service-1.jpg" alt="" /></a></figure>
              <div className="inner-box ">
                <i className="icon flaticon-wind-turbine"></i>
                <h4 className="title mt-0"><a href="page-service-details.html">Wind Turbines</a></h4>
                <div className="text">Hybrid energy refers to the use of multiple sources of energy to meet our energy needs.</div>
                <a href="page-service-details.html" className="read-more">Read More</a>
              </div>
            </div>
            {/* <!-- Service Block Two --> */}
            <div className="service-block-home2 wow fadeInUp">
              <figure className="image"><a href="page-service-details.html"><img src="images/resource/service-2.jpg" alt="" /></a></figure>
              <div className="inner-box ">
                <i className="icon flaticon-settings"></i>
                <h4 className="title mt-0"><a href="page-service-details.html">Maintenance</a></h4>
                <div className="text">Hybrid energy refers to the use of multiple sources of energy to meet our energy needs.</div>
                <a href="page-service-details.html" className="read-more">Read More</a>
              </div>
            </div>
            {/* <!-- Service Block Two --> */}
            <div className="service-block-home2 wow fadeInUp">
              <figure className="image"><a href="page-service-details.html"><img src="images/resource/service-3.jpg" alt="" /></a></figure>
              <div className="inner-box ">
                <i className="icon flaticon-windmill"></i>
                <h4 className="title mt-0"><a href="page-service-details.html">Wind Generators</a></h4>
                <div className="text">Hybrid energy refers to the use of multiple sources of energy to meet our energy needs.</div>
                <a href="page-service-details.html" className="read-more">Read More</a>
              </div>
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