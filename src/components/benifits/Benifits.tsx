import SkillItem from "./SkillItem"

type Props = {}

export default function Benifits({ }: Props) {
	return (
		<>
			{/* <!-- Company Benefits --> */}
			<section className="why-choose-us-home2-2">
				<div className="bg-image d-none d-xl-block" style={{ backgroundImage: "url(images/background/home-2-divider-bg-2.jpg)" }}></div>
				<div className="bg-shape"><div className="shape" style={{ backgroundImage: "url(images/background/about1-bg-home1.jpg)" }}></div></div>
				<div className="container-fluid">
					<div className="row">
						{/* <!-- Image Column --> */}
						<div className="image-column col-xl-7">
							<div className="image-box hide-desktop"><img src="images/background/home-2-divider-bg.jpg" alt="" /></div>
						</div>
						{/* <!-- Content Column --> */}
						<div className="content-column col-xl-4 col-lg-8">
							<div className="inner-column wow fadeInLeft">
								<div className="sec-title">
									<span className="sub-title">Company Benefits</span>
									<h2>Greener Tomorrow for <br />Your Business!</h2>
									<div className="text">The amount of energy you use will depend on the type of business you run. However, there are lots of ways that you can save energy no matter what you do.</div>
								</div>
								<ul className="list-style-four d-sm-flex align-items-sm-center mb-40">
									<li className="mr-20"><i className="fa fa-check-circle mr-15"></i> Technical Support</li>
									<li><i className="fa fa-check-circle mr-15"></i> Best Energy Solutions</li>
								</ul>

								{/* <!--Skills--> */}
								<SkillItem
									skilltitle={"Wind Turbines"}
									dataWidth={"73"}
									dataSpeed={"3000"}
									dataStop={"73"}
									quantity={0} />
								<SkillItem
									skilltitle={"Solar Panels"}
									dataWidth={"57"}
									dataSpeed={"3000"}
									dataStop={"57"}
									quantity={0} />
								<SkillItem
									skilltitle={"Solar Panels"}
									dataWidth={"57"}
									dataSpeed={"3000"}
									dataStop={"57"}
									quantity={0} />
								<SkillItem
									skilltitle={"Solar Panels"}
									dataWidth={"57"}
									dataSpeed={"3000"}
									dataStop={"57"}
									quantity={0} />
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End Company Benefits --> */}

		</>
	)
}