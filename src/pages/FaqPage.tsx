

type Props = {}

export default function FaqPage({}: Props) {
  return (
    <>
    {/* <!-- FAQ Section --> */}
  <section className="faqs-section-home1" style={{backgroundImage: "url(./images/background/5.jpg)"}}>
      <div className="auto-container">
          <div className="row">
              {/* <!-- FAQ Column --> */}
              <div className="faq-column col-lg-6 order-4">
                  <div className="inner-column">
                      <ul className="accordion-box style-two wow fadeInLeft">
                          {/* <!--Block--> */}
                          <li className="accordion block active-block">
                              <div className="acc-btn active">What warranties do I have for installation?
                                  <div className="icon fa fa-plus"></div>
                              </div>
                              <div className="acc-content current">
                                  <div className="content">
                                      <div className="text">There are many variations of passages of available, but the majority have suffered alteration in some form.</div>
                                  </div>
                              </div>
                          </li>
                          {/* <!--Block--> */}
                          <li className="accordion block">
                              <div className="acc-btn">What is included in your services?
                                  <div className="icon fa fa-plus"></div>
                              </div>
                              <div className="acc-content">
                                  <div className="content">
                                      <div className="text">There are many variations of passages of available, but the majority have suffered alteration in some form.</div>
                                  </div>
                              </div>
                          </li>
                          {/* <!--Block--> */}
                          <li className="accordion block">
                              <div className="acc-btn">What are the payment methods?
                                  <div className="icon fa fa-plus"></div>
                              </div>
                              <div className="acc-content">
                                  <div className="content">
                                      <div className="text">There are many variations of passages of available, but the majority have suffered alteration in some form.</div>
                                  </div>
                              </div>
                          </li>
                          {/* <!--Block--> */}
                          <li className="accordion block">
                              <div className="acc-btn">How fast I get my order?
                                  <div className="icon fa fa-plus"></div>
                              </div>
                              <div className="acc-content">
                                  <div className="content">
                                      <div className="text">There are many variations of passages of available, but the majority have suffered alteration in some form.</div>
                                  </div>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
              {/* <!-- Content Column --> */}
              <div className="content-column col-lg-6">
                  <div className="inner-column wow fadeInRight">
                      <div className="sec-title">
                          <span className="sub-title">frequently asked questions</span>
                          <h2>Things you need to know and we know your’s</h2>
                      </div>
                      <div className="faq-block">
                          <div className="inner-box">
                              <i className="icon lnr-icon-arrow-right"></i>
                              <h4>Best energy solution</h4>
                              <div className="text">The best energy solution depends on several factors, including your specific needs.</div>
                          </div>
                      </div>
                      <div className="faq-block">
                          <div className="inner-box">
                              <i className="icon lnr-icon-arrow-right"></i>
                              <h4>Expert Technical Support Members</h4>
                              <div className="text">At Sustainable Energy Services, our technical support team consists of expert members</div>
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