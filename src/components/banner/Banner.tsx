

type Props = {}

export default function Banner({}: Props) {
  return (
    <>
    {/* <!-- Banner Section Two--> */}
	<section className="banner-section">
		<div className="banner-carousel owl-carousel owl-theme">
			{/* <!-- Slide Item --> */}
			<div className="slide-item">
				<div className="bg-image" style={{backgroundImage:'url(images/main-slider/1.jpg)'}}></div>
				<div className="auto-container">
					<div className="row">
						<div className="content-column col-lg-12 text-center">
							<div className="content-box">
								<h6 className="sub-title text-light fw-normal animate-2">Solution For All Type Of Solar Energy</h6>
								<h2 className="title animate-1">Renewable<br/> Energy Solution</h2>
								<div className="btn-box animate-3"><a href="page-about.html" className="theme-btn btn-style-one alternate"><span className="btn-title">Explore Now</span></a></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- Slide Item --> */}
			<div className="slide-item">
				<div className="bg-image" style={{backgroundImage:'url(images/main-slider/3.jpg)'}}></div>
				<div className="auto-container">
					<div className="row">
						<div className="content-column col-lg-12 text-center">
							<div className="content-box">
								<h6 className="sub-title text-light fw-normal animate-2">Solution For Environmental Protection</h6>
								<h2 className="title animate-3">A Clean Energy <br/> Revolution</h2>
								<div className="btn-box animate-4"><a href="page-about.html" className="theme-btn btn-style-one alternate"><span className="btn-title">Explore Now</span></a></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!--END Banner Section Two --> */}
    </>
  )
}