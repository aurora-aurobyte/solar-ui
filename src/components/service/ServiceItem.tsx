import { RouterLink } from "routes/components"

export type Service = {
    id: string
    title: string
    description: string
    image: string
    icon: string
}

type Props = {
    service: Service
}

const ServiceItem = ({ service }: Props) => {
    const navigateTo = "/services/" + service.id
    return (
        <div className="col-xl-4 col-md-6">
            {/* <!-- Service Block Two --> */}
            <div className="service-block-home2 wow fadeInUp">
                <figure className="image">
                    <span>
                        <img src={service.image} alt={service.title} />
                    </span>
                    {/* <RouterLink href={navigateTo}>
                        <img src={service.image} alt={service.title} />
                    </RouterLink> */}
                </figure>
                <div className="inner-box ">
                    <i className={"icon " + service.icon}></i>
                    <h4 className="title mt-0">
                        <span className="link">{service.title}</span>
                    </h4>
                    <div className="text">{service.description}</div>
                    <span className="read-more">Read More</span>
                    {/* <RouterLink href={navigateTo} className="read-more">
                        Read More
                    </RouterLink> */}
                </div>
            </div>
        </div>
    )
}

export default ServiceItem
