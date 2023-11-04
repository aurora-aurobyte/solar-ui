

type Props = {}

export default function WhyChoose2({}: Props) {
  return (
    <>
    {/* <!-- Why Chose Section --> */}
    <section className="why-choose-home2">
		<div className="bg-image" style={{backgroundImage: "url(images/background/5.jpg)"}}></div>
		<div className="auto-container">
			<div className="row">
				{/* <!-- Why Chose Column --> */}
				<div className="col-lg-6 col-md-12 col-sm-12">
					<div className="sec-title mt-100">
						<span className="sub-title">WHY CHOOSE US</span>
						<h2>We Create <br/>Opportunity to Reach Potential</h2>
					</div>
					<div className="featire-block-1 d-flex align-items-center mb-30">
						<div className="icon mr-30 flex-shrink-0"><span className="flaticon-solar-panel-1"></span></div>
						<div className="fb-content">
							<h5 className="mb-0">Safety and Reliability</h5>
							<div className="text">Aenean placerat ut lacus nec pulvinar. Donec eu leo, ante at, commodo diam</div>
						</div>
					</div>
					<div className="featire-block-1 d-flex align-items-center mb-md-30">
						<div className="icon mr-30 flex-shrink-0"><span className="flaticon-solar-energy-2"></span></div>
						<div className="fb-content">
							<h5 className="mb-0">Best energy solution</h5>
							<div className="text">Interdum et malesuada fames ac ante ipsum primis in faucibus donec tempor nisi neque.</div>
						</div>
					</div>
				</div>
				{/* <!-- form Column --> */}
				<div className="form-column col-lg-6 col-md-12 col-sm-12">
					<div className="inner-column">
						{/* <!-- Contact Form --> */}
						<div className="contact-form home2-style">
							{/* <!--Contact Form--> */}
							<form method="post" action="get" id="contact-form">
								<div className="row">
									<div className="col-md-12 form-group">
										<label>Your Name:</label>
										<input type="text" name="full_name" placeholder="" required />
									</div>
									<div className="col-md-6 form-group">
										<label>Your Email:</label>
										<input type="text" name="Email" placeholder="" required />
									</div>
									<div className="col-md-6 form-group">
										<label>Phone No::</label>
										<input type="text" name="Phone" placeholder="" required />
									</div>
									<div className="col-md-12 form-group">
										<label>Number of Panels</label>
										<div className="range-slider-one">
											<input type="text" className="range-amount" name="field-name" readOnly />
											<div className="distance-range-slider"></div>
										</div>
									</div>
									<div className="col-md-6 form-group">
										<label>Panel type:</label>
										<select className="custom-select">
											<option value="">Select</option>
											<option value="">Monocrystalline</option>
											<option value="">Polycrystalline</option>
											<option value="">Thin-film</option>
										</select>
									</div>
									<div className="col-md-6 form-group">
										<label>Capacity (VA):</label>
										<select className="custom-select">
											<option value="">Select</option>
											<option value="">100 Watt (W)</option>
											<option value="">1 Kilowatt (kW)</option>
											<option value="">1 Gigawatt (GW)</option>
										</select>
									</div>
									<div className="col-md-12 form-group">
										<button className="theme-btn btn-style-three hvr-light" type="submit" name="submit-form"><span className="btn-title">Submit Request</span></button>
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
    {/* <!--End Why Chose Section --> */}
    </>
  )
}