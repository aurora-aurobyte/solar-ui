import React from 'react'

type Props = {}

export default function PieChart({}: Props) {
  return (
    <section className="bg-white pt-60">
		<div className="auto-container">
			<div className="row">
				<div className="col-lg-6">
					<div className="graph-box d-md-flex align-items-center justify-content-md-between wow fadeInRight">
						{/* <!-- Pie Graph --> */}
						<div className="pie-graph d-sm-flex align-items-center text-center text-sm-start mb-4 mb-md-0">
							<div className="graph-outer">
								<input type="text" className="dial" data-fgColor="#87AB42" data-bgColor="#f9f9f9" data-width="125" data-height="125"
									data-linecap="normal" value="90"/>
								<div className="inner-text count-box"><span className="count-text txt" data-stop="99" data-speed="2000"></span>%</div>
							</div>
							<h4 className="title mt-0 ms-4">Projects Completed</h4>
						</div>
						{/* <!-- Pie Graph --> */}
						<div className="pie-graph d-sm-flex align-items-center text-center text-sm-start">
							<div className="graph-outer">
								<input type="text" className="dial" data-fgColor="#87AB42" data-bgColor="#f9f9f9" data-width="125" data-height="125"
									data-linecap="normal" value="50"/>
								<div className="inner-text count-box"><span className="count-text txt" data-stop="50" data-speed="2000"></span>%</div>
							</div>
							<h4 className="title mt-0 ms-4">Clients Satisfied</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}