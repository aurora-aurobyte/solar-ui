

type Props = {}

export default function Faq({}: Props) {
  return (
   <>
    {/* <!-- FAQ Section --> */}
  <section className="faqs-section-home2" style={{backgroundImage: "url(./images/background/home-2-faq-bg.jpg)"}}>
    <div className="auto-container">
      <div className="row">
        {/* <!-- FAQ Column --> */}
        <div className="faq-column col-lg-6">
          <div className="inner-column mb-md-50">
            <ul className="accordion-box style-two bg-transparent p-0 wow fadeInLeft">
              {/* <!--Block--> */}
              <li className="accordion block active-block pl-30 pr-30">
                <div className="acc-btn border-bottom-0 active">Produce Your Own Clean Save The Environment
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className="acc-content current">
                  <div className="content border-bottom-0 pt-0">
                    <div className="text">Reduce, reuse, and recycle: This is a classNameic but effective way to reduce waste and conserve resources. Try to use reusable bags, containers, and water bottles, and recycle items that can't be reused.</div>
                  </div>
                </div>
              </li>
              {/* <!--Block--> */}
              <li className="accordion block pl-30 pr-30">
                <div className="acc-btn border-bottom-0">On-Site Service And Support For Certification
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className="acc-content">
                  <div className="content border-bottom-0 pt-0">
                    <div className="text">Reduce, reuse, and recycle: This is a classNameic but effective way to reduce waste and conserve resources. Try to use reusable bags, containers, and water bottles, and recycle items that can't be reused.</div>
                  </div>
                </div>
              </li>
              {/* <!--Block--> */}
              <li className="accordion block pl-30 pr-30">
                <div className="acc-btn border-bottom-0">Light Source For Stable Conversion Efficiency
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className="acc-content">
                  <div className="content border-bottom-0 pt-0">
                    <div className="text">Reduce, reuse, and recycle: This is a classNameic but effective way to reduce waste and conserve resources. Try to use reusable bags, containers, and water bottles, and recycle items that can't be reused.</div>
                  </div>
                </div>
              </li>
              {/* <!--Block--> */}
              <li className="accordion block pl-30 pr-30">
                <div className="acc-btn border-bottom-0">Do You Give Guarantee And After Sales Service?
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className="acc-content">
                  <div className="content border-bottom-0 pt-0">
                    <div className="text">Reduce, reuse, and recycle: This is a classNameic but effective way to reduce waste and conserve resources. Try to use reusable bags, containers, and water bottles, and recycle items that can't be reused.</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- Content Column --> */}
        <div className="content-column col-lg-6">
          <div className="inner-column wow fadeInRight">
            <div className="sec-title mb-40">
              <span className="sub-title">Company Benefits</span>
              <h2>Give Your Dream a Success</h2>
            </div>
            <div className="home-2-tabs">
            	<ul className="nav nav-tabs" id="myTab" role="tablist">
							  <li className="nav-item mr-20" role="presentation">
							    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Always Clean Energy</button>
							  </li>
							  <li className="nav-item" role="presentation">
							    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Life Sustainable</button>
							  </li>
							</ul>
							<div className="tab-content" id="myTabContent">
							  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
							  	<div className="d-sm-flex align-items-sm-center mt-40">
							  		<div className="img flex-shrink-0 mr-20"><img className="rounded-circle" src="images/resource/home-2-tab-img-1.jpg" alt="" /></div>
							  		<div className="content">
							  			<h5>Maximize Green & Clean Resources</h5>
							  			<p className="text"> Maximizing green and clean resources is essential for promoting sustainable development and reducing our impact on the environment.</p>
							  		</div>
							  	</div>
							  </div>
							  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
							  	<div className="d-sm-flex align-items-sm-center mt-40">
							  		<div className="img flex-shrink-0 mr-20"><img className="rounded-circle" src="images/resource/home-2-tab-img-2.jpg" alt="" /></div>
							  		<div className="content">
							  			<h5>Maximize Green & Clean Resources</h5>
							  			<p className="text"> Maximizing green and clean resources is essential for promoting sustainable development and reducing our impact on the environment.</p>
							  		</div>
							  	</div>
							  </div>
							</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!--End FAQ Section --> */}
   </>
  )
}