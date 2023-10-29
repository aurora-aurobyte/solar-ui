

type Props = {}

export default function AboutPage({}: Props) {
  return (
    <>
	{/* <!-- Preloader --> */}
	{/* <div className="preloader"></div> */}

	{/* <!-- Start main-content --> */}
	<section className="page-title" style={{backgroundImage: "url(images/background/page-title-bg.png)"}}>
		<div className="auto-container">
			<div className="title-outer text-center">
				<h1 className="title">About Us</h1>
				<ul className="page-breadcrumb">
					<li><a href="index.html">Home</a></li>
					<li>About Us</li>
				</ul>
			</div>
		</div>
	</section>
	{/* <!-- end main-content --> */}

  {/* <!-- About Section Two / Style Two --> */}
  <section className="about-section-two mt-lg-5">
    <figure className="floating-home2-about"><img src="images/icons/layout1-left.png" alt=""/></figure>
    <div className="auto-container">
      <div className="row">
        <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
          <div className="inner-column ps-lg-5">
            <div className="sec-title mb-30">
              <span className="sub-title">Get To Know Us</span>
              <h2>Providing Renewable Energy Solutions</h2>
              <div className="text">Geothermal energy is a clean and reliable source of renewable energy that uses heat from the earth’s core to generate electricity.</div>
            </div>
            <ul className="list-style-two">
              <li><i className="fa fa-check-circle"></i> Solutions can help reduce the risk of oil spills</li>
              <li><i className="fa fa-check-circle"></i> Help reduce the impact of climate change</li>
            </ul>
            <div className="d-sm-flex align-items-sm-center justify-content-sm-between mt-20">
              <div className="home2-support-1">
                <h5 className="title">24/7 Support</h5>
                <p className="text mb-30">24/7 support refers to customer service or technical assistance</p>
                <a href="page-about.html" className="theme-btn btn-style-one hvr-light"><span className="btn-title">Explore Now</span></a>
              </div>
              <div className="icon-box1-home2 mt-4 mt-sm-0">
                <i className="icon flaticon-quality"></i>
                <h6 className="title">We’re Certified Solar Experts</h6>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Image Column --> */}
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="home2-about1-img-col">
            <figure className="image-1"><img src="images/resource/about-1.jpg" alt=""/></figure>
            <figure className="image-2 bounce-y d-none d-sm-block"><img src="images/resource/about-3.jpg" alt="" /> </figure>
            <figure className="image-3"><img src="images/resource/favicon_big.png" alt=""/></figure>
            <figure className="image-4 bounce-y"><img src="images/icons/dot.png" alt=""/></figure>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!--Emd About Section Two --> */}

  {/* <!-- Services Section --> */}
  <section className="services-section-home1 pb-lg-0">
    <div className="auto-container">
      <div className="sec-title text-center">
        <span className="sub-title">SPECIALISE IN THE ENERGY SERVICE</span>
        <h2>Sustainable Energy Services</h2>
      </div>
      <div className="row">
        {/* <!-- Service Block --> */}
        <div className="service-block col-lg-3 col-sm-6 wow fadeInUp">
          <div className="inner-box">
            <div className="content-box">
              <i className="icon flaticon-wind-energy-1"></i>
              <span className="sub-title">01 Service</span>
              <h4 className="title"><a href="page-service-details.html">Wind Turbines</a></h4>
              <div className="text">Hybrid energy refers to the use of multiple sources ...</div>
              <a href="" className="read-more"><i className="fa fa-chevron-right"></i></a>
            </div>
            <div className="image-box">
              <figure className="image">
                <a href="page-service-details.html"><img src="images/resource/service-1.jpg" alt="" /></a>
              </figure>
            </div>
          </div>
        </div>
        {/* <!-- Service Block --> */}
        <div className="service-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="200ms">
          <div className="inner-box">
            <div className="content-box">
              <i className="icon flaticon-settings-2"></i>
              <span className="sub-title">02 Service</span>
              <h4 className="title"><a href="page-service-details.html">Maintenance</a></h4>
              <div className="text">Wind turbines are devices that convert wind energy ...</div>
              <a href="" className="read-more"><i className="fa fa-chevron-right"></i></a>
            </div>
            <div className="image-box">
              <figure className="image">
                <a href="page-service-details.html"><img src="images/resource/service-2.jpg" alt="" /></a>
              </figure>
            </div>
          </div>
        </div>
        {/* <!-- Service Block --> */}
        <div className="service-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="400ms">
          <div className="inner-box">
            <div className="content-box">
              <i className="icon flaticon-windmill"></i>
              <span className="sub-title">03 Service</span>
              <h4 className="title"><a href="page-service-details.html">Wind Generators</a></h4>
              <div className="text">Wind generators are devices that harness the ...</div>
              <a href="" className="read-more"><i className="fa fa-chevron-right"></i></a>
            </div>
            <div className="image-box">
              <figure className="image">
                <a href="page-service-details.html"><img src="images/resource/service-3.jpg" alt="" /></a>
              </figure>
            </div>
          </div>
        </div>
        {/* <!-- Service Block --> */}
        <div className="service-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
          <div className="inner-box">
            <div className="content-box">
              <i className="icon flaticon-solar-panel"></i>
              <span className="sub-title">04 Service</span>
              <h4 className="title"><a href="page-service-details.html">Solar PV Systems</a></h4>
              <div className="text">A Solar PV (photovoltaic) system is a type of ...</div>
              <a href="" className="read-more"><i className="fa fa-chevron-right"></i></a>
            </div>
            <div className="image-box">
              <figure className="image">
                <a href="page-service-details.html"><img src="images/resource/service-4.jpg" alt="" /></a>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- End Services Section--> */}

  {/* <!-- Why Choose Us --> */}
  <section className="why-choose-us pb-lg-0">
    <div className="bg-image" style={{backgroundImage: "url(images/icons/bg-pattern-1.png)"}}></div>
    <div className="auto-container">
      <div className="row">
        {/* <!-- Content Column --> */}
        <div className="content-column col-lg-6">
          <div className="inner-column wow fadeInRight">
            <div className="sec-title light">
              <span className="sub-title">Why Choose Us</span>
              <h2>We are Building a Sustainable Future</h2>
            </div>
            {/* <!-- Feature Block --> */}
            <div className="feature-block-two pb-30">
              <div className="inner-box">
                <i className="icon fas fa-check"></i>
                <h4 className="title">Best energy solution</h4>
                <p className="text">The best energy solution depends on several factors, including your specific needs, location, budget, and environmental considerations.</p>
              </div>
            </div>
            {/* <!-- Feature Block --> */}
            <div className="feature-block-two border-bottom-0">
              <div className="inner-box">
                <i className="icon fas fa-check"></i>
                <h4 className="title">24/7 Technical Support</h4>
                <p className="text">At Sustainable Energy Services, we understand the importance of reliable and uninterrupted access to technical support when it comes to sustainable energy systems.</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- form Column --> */}
        <div className="form-column col-lg-6">
          <div className="inner-column">
            <p className="fs-6 mb-5 text-light">We believe in a future where renewable energy sources play a vital role in reducing carbon emissions and creating a sustainable planet.</p>
            {/* <!-- Contact Form --> */}
            <div className="contact-form wow fadeInLeft">
              {/* <!--Contact Form--> */}
              <form method="post" action="get" id="contact-form">
                <div className="row">
                  <div className="col-lg-12 form-group">
                    <input type="text" name="full_name" placeholder="Your Name" required />
                  </div>
                  <div className="col-lg-12 form-group">
                    <input type="text" name="Email" placeholder="Your Email" required />
                  </div>
                  <div className="col-lg-12 form-group">
                    <input type="text" name="Phone" placeholder="Phone No" required />
                  </div>
                  <div className="col-lg-12 form-group">
                    <textarea name="form_message" className="form-control required" rows={6} placeholder="Enter Message"></textarea>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <button className="theme-btn btn-style-three" type="submit" name="submit-form"><span className="btn-title">Submit Request</span></button>
                  </div>
                </div>
              </form>
            </div>
            {/* <!--End Contact Form --> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- End Why Choose Us --> */}

  {/* <!-- Pie Chart --> */}
  <section className="bg-white pt-60">
    <div className="auto-container">
      <div className="row">
        <div className="col-lg-6">
          <div className="graph-box d-md-flex align-items-center justify-content-md-between wow fadeInRight">
            {/* <!-- Pie Graph --> */}
            <div className="pie-graph d-sm-flex align-items-center text-center text-sm-start mb-4 mb-md-0">
              <div className="graph-outer">
                <input type="text" className="dial" data-fgColor="#ff6d2e" data-bgColor="#f9f9f9" data-width="125" data-height="125"
                  data-linecap="normal" value="90"/>
                <div className="inner-text count-box"><span className="count-text txt" data-stop="99" data-speed="2000"></span>%</div>
              </div>
              <h4 className="title mt-0 ms-4">Projects Completed</h4>
            </div>
            {/* <!-- Pie Graph --> */}
            <div className="pie-graph d-sm-flex align-items-center text-center text-sm-start">
              <div className="graph-outer">
                <input type="text" className="dial" data-fgColor="#ff6d2e" data-bgColor="#f9f9f9" data-width="125" data-height="125"
                  data-linecap="normal" value="50"/>
                <div className="inner-text count-box"><span className="count-text txt" data-stop="50" data-speed="2000"></span>%</div>
              </div>
              <h4 className="title mt-0 ms-4">Clients Satisfied</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- End Pie Chart --> */}

  {/* <!-- Project Section --> */}
  <section className="project-section">
    <div className="large-container">
      <div className="sec-title text-center">
        <span className="sub-title">LASTEST PROJECT</span>
        <h2>Our Latest Projects</h2>
      </div>
      {/* <!-- Prject Carousel --> */}
      <div className="project-carousel owl-carousel owl-theme wow fadeInUp">
        {/* <!-- Project Block --> */}
        <div className="project-block">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <a href="images/resource/project-1.jpg" className="lightbox-image"><img src="images/resource/project-1.jpg" alt="" /></a>
              </figure>
              <a href="page-project-details.html" className="icon"><i className="fa fa-plus"></i></a>
            </div>
            <div className="content-box">
              <span className="sub-title">Solar Energy</span>
              <h4 className="title"><a href="page-project-details.html">Maximizing Solar ROI</a></h4>
            </div>
          </div>
        </div>
        {/* <!-- Project Block --> */}
        <div className="project-block">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <a href="images/resource/project-2.jpg" className="lightbox-image"><img src="images/resource/project-2.jpg" alt="" /></a>
              </figure>
              <a href="page-project-details.html" className="icon"><i className="fa fa-plus"></i></a>
            </div>
            <div className="content-box">
              <span className="sub-title">Solar Energy</span>
              <h4 className="title"><a href="page-project-details.html">Diversifying Your Solar</a></h4>
            </div>
          </div>
        </div>
        {/* <!-- Project Block --> */}
        <div className="project-block">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <a href="images/resource/project-3.jpg" className="lightbox-image"><img src="images/resource/project-3.jpg" alt="" /></a>
              </figure>
              <a href="page-project-details.html" className="icon"><i className="fa fa-plus"></i></a>
            </div>
            <div className="content-box">
              <span className="sub-title">Solar Energy</span>
              <h4 className="title"><a href="page-project-details.html">The Benefits of Solar</a></h4>
            </div>
          </div>
        </div>
        {/* <!-- Project Block --> */}
        <div className="project-block">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <a href="images/resource/project-4.jpg" className="lightbox-image"><img src="images/resource/project-4.jpg" alt="" /></a>
              </figure>
              <a href="page-project-details.html" className="icon"><i className="fa fa-plus"></i></a>
            </div>
            <div className="content-box">
              <span className="sub-title">Solar Energy</span>
              <h4 className="title"><a href="page-project-details.html">Shining a Light</a></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!--End Project Section --> */}
    </>
  )
}