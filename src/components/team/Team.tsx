import { useEffect } from "react";


type Props = {}

export default function Team({ }: Props) {
    useEffect(() => {
		// @ts-ignore
		const $carousel = $('.four-items-carousel');
		if ($carousel.length) {
			 // Check selected elements
			$carousel.owlCarousel({
			  rtl: true,
			  loop: true,
			  margin: 20,
			  nav: false,
			  smartSpeed: 500,
			  autoHeight: true,
			  autoplay: true,
			  autoplayTimeout: 10000,
			  navText: ['<span class="fa fa-long-arrow-alt-left"></span>', '<span class="fa fa-long-arrow-alt-right"></span>'],
			  responsive: {
				0: {
				  items: 1
				},
				768: {
				  items: 2
				},
				1024: {
				  items: 3
				},
				1200: {
				  items: 4
				},
			  }
			});
		  }
	
	}, [])
    return (
        <>
            {/* <!-- Team Section Seven --> */}
  <section className="team-section">
      <div className="auto-container">
          <div className="sec-title text-center">
              <span className="sub-title">MEET PROFESSIONALS</span>
              <h2>Our Expert Members</h2>
          </div>
          <div className="four-items-carousel owl-carousel owl-theme default-navs wow fadeInUp">
              {/* <!-- Team block Seven --> */}
              <div className="team-block">
                  <div className="inner-box">
                      <div className="image-box">
                          <figure className="image"><a href="page-team-details.html"><img src="images/resource/team-1.jpg" alt=""/></a></figure>
                      </div>
                      <div className="info-box">
                          <h4 className="name"><a href="page-team-details.html">Kevin Hardson</a></h4>
                          <span className="designation">Engineer</span>
                          <div className="social-links">
                              <a href="#"><i className="fab fa-facebook-f"></i></a>
                              <a href="#"><i className="fab fa-twitter"></i></a>
                              <a href="#"><i className="fab fa-instagram"></i></a>
                              <a href="#"><i className="fab fa-pinterest-p"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
              {/* <!-- Team block Seven --> */}
              <div className="team-block">
                  <div className="inner-box">
                      <div className="image-box">
                          <figure className="image"><a href="page-team-details.html"><img src="images/resource/team-2.jpg" alt=""/></a></figure>
                      </div>
                      <div className="info-box">
                          <h4 className="name"><a href="page-team-details.html">Jerome Bell</a></h4>
                          <span className="designation">Project Manager</span>
                          <div className="social-links">
                              <a href="#"><i className="fab fa-facebook-f"></i></a>
                              <a href="#"><i className="fab fa-twitter"></i></a>
                              <a href="#"><i className="fab fa-instagram"></i></a>
                              <a href="#"><i className="fab fa-pinterest-p"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
              {/* <!-- Team block Seven --> */}
              <div className="team-block">
                  <div className="inner-box">
                      <div className="image-box">
                          <figure className="image"><a href="page-team-details.html"><img src="images/resource/team-3.jpg" alt=""/></a></figure>
                      </div>
                      <div className="info-box">
                          <h4 className="name"><a href="page-team-details.html">John Brown</a></h4>
                          <span className="designation">Engineer</span>
                          <div className="social-links">
                              <a href="#"><i className="fab fa-facebook-f"></i></a>
                              <a href="#"><i className="fab fa-twitter"></i></a>
                              <a href="#"><i className="fab fa-instagram"></i></a>
                              <a href="#"><i className="fab fa-pinterest-p"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
              {/* <!-- Team block Seven --> */}
              <div className="team-block">
                  <div className="inner-box">
                      <div className="image-box">
                          <figure className="image"><a href="page-team-details.html"><img src="images/resource/team-4.jpg" alt=""/></a></figure>
                      </div>
                      <div className="info-box">
                          <h4 className="name"><a href="page-team-details.html">Courtney Henry</a></h4>
                          <span className="designation">Engineer</span>
                          <div className="social-links">
                              <a href="#"><i className="fab fa-facebook-f"></i></a>
                              <a href="#"><i className="fab fa-twitter"></i></a>
                              <a href="#"><i className="fab fa-instagram"></i></a>
                              <a href="#"><i className="fab fa-pinterest-p"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
              {/* <!-- Team block Seven --> */}
              <div className="team-block">
                  <div className="inner-box">
                      <div className="image-box">
                          <figure className="image"><a href="page-team-details.html"><img src="images/resource/team-2.jpg" alt=""/></a></figure>
                      </div>
                      <div className="info-box">
                          <h4 className="name"><a href="page-team-details.html">Jerome Bell</a></h4>
                          <span className="designation">Project Manager</span>
                          <div className="social-links">
                              <a href="#"><i className="fab fa-facebook-f"></i></a>
                              <a href="#"><i className="fab fa-twitter"></i></a>
                              <a href="#"><i className="fab fa-instagram"></i></a>
                              <a href="#"><i className="fab fa-pinterest-p"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
              {/* <!-- Team block Seven --> */}
              <div className="team-block">
                  <div className="inner-box">
                      <div className="image-box">
                          <figure className="image"><a href="page-team-details.html"><img src="images/resource/team-3.jpg" alt=""/></a></figure>
                      </div>
                      <div className="info-box">
                          <h4 className="name"><a href="page-team-details.html">Jenny Wilson</a></h4>
                          <span className="designation">Team Leader</span>
                          <div className="social-links">
                              <a href="#"><i className="fab fa-facebook-f"></i></a>
                              <a href="#"><i className="fab fa-twitter"></i></a>
                              <a href="#"><i className="fab fa-instagram"></i></a>
                              <a href="#"><i className="fab fa-pinterest-p"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  {/* <!-- End Team Section --> */}

        </>
    )
}