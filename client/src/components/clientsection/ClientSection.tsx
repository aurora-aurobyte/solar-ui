

type Props = {}

export default function ClientSection({}: Props) {
  return (
   <>
   {/* <!-- Clients Section --> */}
	<section className="clients-section-home4 border-top">
		<div className="auto-container">
			{/* <!-- Sponsors Outer --> */}
			<div className="sponsors-outer">
				{/* <!--clients carousel--> */}
				<ul className="clients-carousel owl-carousel owl-theme">
					<li className="slide-item">
						<a href="#"><img src="images/clients/1.jpg" alt="" /></a>
					</li>
					<li className="slide-item">
						<a href="#"><img src="images/clients/2.jpg" alt="" /></a>
					</li>
					<li className="slide-item">
						<a href="#"><img src="images/clients/3.jpg" alt="" /></a>
					</li>
					<li className="slide-item">
						<a href="#"><img src="images/clients/4.jpg" alt="" /></a>
					</li>
					<li className="slide-item">
						<a href="#"><img src="images/clients/5.jpg" alt="" /></a>
					</li>
				</ul>
			</div>
		</div>
	</section>
	{/* <!--End Clients Section --> */}

   </>
  )
}