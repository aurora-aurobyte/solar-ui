type Props = {}

export default function HeaderSearch({}: Props) {
  return (
    <div className="search-popup">
					<span className="search-back-drop"></span>
					<button className="close-search"><span className="fa fa-times"></span></button>

					<div className="search-inner">
						<form method="post" action="index.html">
							<div className="form-group">
								<input type="search" name="search-field" value="" placeholder="Search..." required />
								<button type="submit"><i className="fa fa-search"></i></button>
							</div>
						</form>
					</div>
				</div>
  )
}