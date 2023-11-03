import React from 'react'

type Props = {}

export default function TableComponent({ }: Props) {
    return (
        <div style={{ backgroundImage: "url(./images/background/home-2-faq-bg.jpg)", padding: '2%' }}>
            <div className="row">
                <div className="col-md-12">
                    <h1>
                        Save Energy and make profit for your solar system
                    </h1>
                </div>
            </div>
            <div className="row justify-content-end">
                <div className="col-md-9  col-sm-6 col-xl-8">
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered tbl-shopping-cart">
                            <thead style={{backgroundColor:'yellow'}}>
                                <tr>
                                    <th>
                                        <span>System Capacity</span>
                                        <ul className="variation">
                                            <li className="variation-size">
                                                (KW)
                                            </li>
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
                                <tr className="cart_item">
                                    <td className="product-thumbnail">
                                        2KW
                                    </td>
                                    <td className="product-price">
                                        5
                                    </td>
                                    <td className="product-quantity">
                                        300-400
                                    </td>
                                    <td className="product-subtotal">
                                        144
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}