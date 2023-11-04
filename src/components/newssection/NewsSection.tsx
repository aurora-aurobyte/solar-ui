import NewsBlock from "./NewsBlock"


type Props = {}

export default function NewSection({}: Props) {
  return (
   <>
   {/* <!-- News Section --> */}
	<section className="news-section pb-0">
		<div className="auto-container">
			<div className="sec-title text-center">
				<span className="sub-title">Our News From Blog</span>
				<h2>Latest News, Advices & Best <br/>Posts from the Blog</h2>
			</div>
			<div className="row">
				{/* <!-- News Block --> */}
				<NewsBlock/>
				{/* <!-- News Block --> */}
				<NewsBlock/>
				{/* <!-- News Block --> */}
				<NewsBlock/>
			</div>
		</div>
	</section>
	{/* <!--End News Section --> */}
   </>
  )
}