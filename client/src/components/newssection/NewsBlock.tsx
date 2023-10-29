

type Props = {}

export default function NewsBlock({}: Props) {
  return (
    <div className="news-block-two col-lg-4 col-md-6">
    <div className="inner-box">
        <div className="image-box">
            <figure className="image"><a href="news-details.html"><img src="images/resource/news-4.jpg" alt="" /></a></figure>
            <span className="date"><b>10</b>Jan</span>
        </div>
        <div className="lower-content">
            <ul className="post-info mb-10">
                <li><i className="fa fa-user"></i> by Christine Eve</li>
                <li><i className="fa fa-comments"></i> 01 Comment</li>
            </ul>
            <h4 className="title mb-0"><a href="news-details.html">Winds of in the Turbine Service Industry</a></h4>
        </div>
    </div>
</div>
  )
}