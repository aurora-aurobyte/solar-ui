

type Props = {}

export default function Feature({}: Props) {
  return (
   <>
   {/* <!-- Features Section Two --> */}
	<section className="features-section-two mt-md-100 pt-lg-0">
		<div className="auto-container">
			<div className="row">
				<div className="col-lg-4 col-sm-6">
					{/* <!-- Feature Block --> */}
					<div className="feature-block1-home2">
						<div className="inner">
							<i className="icon flaticon-plant flex-shrink-0"></i>
							<h5 className="title">Maximize Green Resources</h5>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-sm-6">
					{/* <!-- Feature Block --> */}
					<div className="feature-block1-home2">
						<div className="inner">
							<i className="icon flaticon-wind-energy-1 flex-shrink-0"></i>
							<h5 className="title">Future with Green Energy</h5>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-sm-6">
					{/* <!-- Feature Block --> */}
					<div className="feature-block1-home2">
						<div className="inner">
							<i className="icon flaticon-solar-panel flex-shrink-0"></i>
							<h5 className="title">Clean & Renewable Energy</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- End Features Section--> */}
   </>
  )
}