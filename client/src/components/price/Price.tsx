import PriceBlock from "./PriceBlock"
import TitleColumn from "./TitleColumn"


type Props = {}

export default function Price({ }: Props) {
    return (
        <>
            {/* <!-- Pricing Section --> */}
            <section className="pricing-section">
                <div className="bg-layer d-none d-lg-block"></div>
                <div className="auto-container">
                    <div className="row">
                        {/* <!-- Title column --> */}
                        <div className="title-column col-lg-4">
                            <TitleColumn subTitle={"Pricing & Plans"}
                                subtext={"Effective & affordable plans"}
                                listOfStyleText={["Get Right Solutions for Shipment", "Expert Logistics Team Members"]}
                                footText={"Effective plans can be a game-changer for anyone looking to achieve their goals, whether they are personal or professional."} />
                        </div>
                        <div className="pricing-column col-lg-8">
                            <div className="row">
                                {/* <!-- Pricing Block --> */}
                                <PriceBlock
                                    title={"standed Plan"}
                                    price={"49.00"} 
                                    pricetype={"$"} 
                                    duration={"Per Month"} 
                                    features={[
                                        " 1 Installation",
                                        " Wind Generators",
                                        "Real Solar PV Systems",
                                        "100% Energy Saver",
                                        "Technical team of enthusiastic",
                                    ]} buttonName={"Select Now"} />

                                <PriceBlock title={"Basic Plan"} price={"99.00"} pricetype={"$"} duration={"Per Month"} features={[
                                    "1 Installation",
                                    "Wind Generators",
                                    "Real Solar PV Systems",
                                    "100% Energy Saver",
                                    "Technical team of enthusiastic"
                                ]} buttonName={""} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Pricing Section --> */}
        </>
    )
}