

type Props = {}

export default function AboutPage({ }: Props) {
  return (
    <>
      {/* <!-- Preloader --> */}
      {/* <div className="preloader"></div> */}

      {/* <!-- Start main-content --> */}
      <section className="page-title" style={{ backgroundImage: "url(images/background/page-title-bg.png)" }}>
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
      <div style={{ backgroundImage: "url(./images/background/home-2-faq-bg.jpg)", padding: '1%' }}>
        <div className="blog-details__content p-lg-1 ">
          <h3 className="blog-details__title">Company Overview</h3>
          <p className="blog-details__text-2">
            Access Energy Engineering (Pvt) Ltd ( Reg No:- ) is a dynamic and innovative company that serves
            the emerging renewable energy & eco building trade in Sri Lanka, a country experiencing a rapid
            growth and has an increasing demand for energy & eco-friendly. With the limited power generation
            capacity and increasing demand, growing road network, Sri Lanka is looking for products and
            services to boost its development drive. As a result of this the country has witnessed a rapid growing
            demand for energy

          </p>
          <p className="blog-details__text-2">
            Our aim at Access Energy Engineering (Pvt) Ltd is to participate in the development drive of
            Sri Lanka by providing renewable energy solutions to its growing energy demand. As a
            country located near equator we have been blessed with abundant Sun Light throughout the
            year. This as well as government’s policy to promote renewable energy by cutting taxes on
            most renewable energy products has worked well for solar power solutions to be very
            lucrative. Further it is a clean form of energy, helping 'sustainable green development' for
            the wellbeing of our future generations

          </p>

        </div>
        <div className="p-1">
          <h4 className="blog-details__title">
            The company with a history of over five year’s background, we have a competent service / Installation team island wide.
          </h4>
        </div>

        <div className="row">
          <div className="blog-details__content p-lg-1  col-lg-4 border-1">
            <h5 className="blog-details__title">VISION
            </h5>
            <p className="blog-details__text-2">
              Our Vision is to provide high quality and cost effective sustainable-renewable energy solutions across all markets sectors, thereby improving quality of present and future human life.
            </p>
          </div>
          <div className="blog-details__content p-lg-1 col-lg-4 ">
            <h5 className="blog-details__title">GOALS
            </h5>
            <p className="blog-details__text-2">
              Access Energy Engineering is committed to increase the renewable energy capacities striving to meet a target of 100 megawatts to be a market leader grid-connected solar PV roof top share of Srilanka.
            </p>
          </div>
          <div className="blog-details__content p-lg-1 col-lg-4 ">
            <h5 className="blog-details__title">MISSION
            </h5>
            <p className="blog-details__text-2">
              Envisioning ENERGY FOR ALL – as our prime motto and quality as our business USP, Our efforts in main VISION streaming solar is to become a World leader and a Rooftop Solar (RTS) Company of Choice executing and operating our projects efficiently and maintaining the highest standards of quality, safety and environmental sustainability.

            </p>
          </div>
        </div>
      </div>
    </>
  )
}