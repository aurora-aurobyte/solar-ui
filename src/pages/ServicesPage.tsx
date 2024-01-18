import PageTitle from "components/common/PageTitle"
import ServiceItem, { Service } from "components/service/ServiceItem"

const posts: Service[] = [
    {
        id: "1",
        title: "Installation and commissionin",
        description:
            "System installation begins with installing solar panels on the roof including solar power optimizer and attaching panels. Our electrical experts will then connect the optimizer to the inverter and to your circuit breaker box which generates electricity to your home or business.",
        image: "/images/resource/service-6.jpg",
        icon: "flaticon-solar-panel",
    },
    {
        id: "2",
        title: "System Solutions and approval",
        description:
            "Once choosing the most suitable solar system we will provide a comprehensive solar system drawing along with a projected energy report at no cost. We also ensure to guide you through all the paperwork necessary to be approved for CEB or LECO requirement standards.",
        image: "/images/resource/service-5.jpg",
        icon: "flaticon-solar-panel",
    },
    {
        id: "3",
        title: "Field Inspection and Consultation",
        description:
            "Access Energy Engineering's qualified team will perform an inspection of your property, complete an engineering assessment, and consult with you to determine the best solar power system for your property. Your home’s architecture, current and future consumption requirements and financial situation will be considered.",
        image: "/images/resource/service-2.jpg",
        icon: "flaticon-solar-panel",
    },
]

type Props = {}

export default function ServicesPage({}: Props) {
    return (
        <>
            <PageTitle title="Services" links={[{ title: "Home", href: "/" }]} />

            {/* <!-- Services Section Two --> */}
            <section className="services-section-home2">
                <div className="large-container">
                    <div className="row">
                        {posts.map((service: Service, id: number) => (
                            <ServiceItem key={id} service={service} />
                        ))}
                    </div>
                </div>
            </section>
            {/* <!--End Services Section --> */}
        </>
    )
}
