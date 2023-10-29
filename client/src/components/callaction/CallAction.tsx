import ThemeButton from "./ThemeButton"


type Props = {}

export default function CallAction({}: Props) {
  return (
    <>
    {/* <!-- Call To Action Two --> */}
	<section className="call-to-action style-two" style={{backgroundImage: "url(./images/main-slider/1.jpg)"}}>
		<div className="auto-container">
			<div className="outer-box d-md-flex align-items-md-center justify-content-md-between">
				<div className="sec-title light mb-0">
					<h2 className="my-0">Fastest & secure way to get <br/> clean, safe and renewable <br/> energy</h2>
				</div>
				<ThemeButton title="Submit" onClick={()=>console.log('')}/>
			</div>
		</div>
	</section>
	{/* <!--End Call To Action Two --> */}
    </>
  )
}