interface Plan {
    capacity: number
    panel: number
    unitFrom: number
    unitTo: number
    area: number
}

const plans: Plan[] = [
    {
        capacity: 2,
        panel: 5,
        unitFrom: 234,
        unitTo: 270,
        area: 144,
    },
    {
        capacity: 3,
        panel: 8,
        unitFrom: 312,
        unitTo: 360,
        area: 192,
    },
    {
        capacity: 4,
        panel: 10,
        unitFrom: 468,
        unitTo: 540,
        area: 288,
    },
    {
        capacity: 5,
        panel: 13,
        unitFrom: 546,
        unitTo: 630,
        area: 336,
    },
    {
        capacity: 6,
        panel: 15,
        unitFrom: 702,
        unitTo: 810,
        area: 432,
    },
    {
        capacity: 7,
        panel: 18,
        unitFrom: 858,
        unitTo: 990,
        area: 528,
    },
    {
        capacity: 10,
        panel: 25,
        unitFrom: 1209,
        unitTo: 1395,
        area: 744,
    },
    {
        capacity: 15,
        panel: 38,
        unitFrom: 1833,
        unitTo: 2115,
        area: 1128,
    },
    {
        capacity: 20,
        panel: 50,
        unitFrom: 2496,
        unitTo: 2880,
        area: 1536,
    },
]

type Props = {}

export default function TableComponent({}: Props) {
    return (
        <section className="services-section-home1 pb-lg-0">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">SPECIALISE IN THE ENERGY SERVICE</span>
                    <h2>Save Energy and make profit for your solar system</h2>
                </div>
                <div className="justify-content-center">
                    <div className="container">
                        <div className="table-responsive wow fadeInUp">
                            <table className="table table-striped table-bordered tbl-shopping-cart">
                                <thead>
                                    <tr>
                                        <th>
                                            <span>System Capacity</span>
                                            <ul className="variation">
                                                <li className="variation-size">(KW)</li>
                                            </ul>
                                        </th>
                                        <th>
                                            <span>Solar panel Half Cout</span>
                                            <ul className="variation">
                                                <li className="variation-size">(400W - 500W)</li>
                                            </ul>
                                        </th>
                                        <th>
                                            <span>Units</span>
                                            <ul className="variation">
                                                <li className="variation-size">(KWh)</li>
                                            </ul>
                                        </th>
                                        <th>
                                            <span>Area</span>
                                            <ul className="variation">
                                                <li className="variation-size">(Square Feet)</li>
                                            </ul>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {plans.map((plan: Plan, id: number) => (
                                        <tr key={id} className="cart_item">
                                            <td className="product-thumbnail">{plan.capacity}KW</td>
                                            <td className="product-price">{plan.panel}</td>
                                            <td className="product-quantity">
                                                {plan.unitFrom}-{plan.unitTo}
                                            </td>
                                            <td className="product-subtotal">{plan.area}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
