

type Props = {}

export default function HeadTop({}: Props) {
  return (
    <div className="header-top">
					<div className="top-left">
						{/* <!-- Info List --> */}
						<ul className="list-style-one">
							<li><i className="fa fa-map-marker-alt"></i> 380 St Kilda Road, Australia</li>
							<li><i className="fa fa-clock"></i> Mon - Sat: 8am - 5pm</li>
							<li><i className="fa fa-phone-volume"></i> <a href="tel:+92(8800)87890">+92 (8800) 87890</a></li>
						</ul>
					</div>

					<div className="top-right">
						<ul className="social-icon-one">
							<li><a href="#"><span className="fab fa-facebook-square"></span></a></li>
							<li><a href="#"><span className="fab fa-twitter"></span></a></li>
							<li><a href="#"><span className="fab fa-pinterest-p"></span></a></li>
							<li><a href="#"><span className="fab fa-instagram"></span></a></li>
						</ul>
					</div>
				</div>
  )
}