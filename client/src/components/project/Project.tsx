

type Props = {}

export default function Project({}: Props) {
  return (
    <>
    {/* <!-- Project Section --> */}
	<section className="project-section pb-0 pt-xs--0">
		<div className="auto-container">
			<div className="sec-title text-center">
				<span className="sub-title">LASTEST PROJECT</span>
				<h2>Our Latest Projects</h2>
			</div>
			<div className="row">
				<div className="col-lg-12">
					<div className="project-block-home2 text-center position-relative overflow-hidden">
						<img className="w-100 img-fluid" src="images/resource/video-home2.jpg" alt="" />
						<div className="video-box">
							<a href="https://www.youtube.com/watch?v=Fvae8nxzVz4" className="play-now-two lightbox-image"><i className="icon fa fa-play"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!--End Project Section --> */}
    </>
  )
}