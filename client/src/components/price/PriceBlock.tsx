

interface Props  {
    title:string,
    price:string,
    pricetype:string,
    duration:string,
    features:string [],
    buttonName:string
}

export default function PriceBlock(props: Props) {
    const {title,price,duration,features,pricetype,buttonName} =props
  return (
   <>
   <div className="pricing-block col-sm-6 wow fadeInRight">
                          <div className="inner-box">
                              <span className="title">{title}</span>
                              <div className="price-box">
                                  <h4 className="price"><sup>{pricetype}</sup>{price}</h4>
                                  <span className="validaty">{duration}</span>
                              </div>
                              <figure className="image"><img src="images/icons/plan1.png" alt="" /></figure>
                              <ul className="features">
                                  {features.map((feature)=><li key={feature}>{feature}</li>)}
                              </ul>
                              <div className="btn-box">
                                  <a href="page-pricing.html" className="theme-btn btn-style-three"><span className="btn-title">{buttonName}</span></a>
                              </div>
                          </div>
                      </div>
   </>
  )
}