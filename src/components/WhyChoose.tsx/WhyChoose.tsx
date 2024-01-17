type WhyChoose = {
    title: string
    description: string
}

type Props = {}

import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  full_name: string;
  address: string;
  usage: string;
  email: string;
  phone: string;
}



const whyChoose: WhyChoose[] = [
    {
        title: "TOP QUALITY FOR LOWEST PRICE",
        description: "High quality solar power system for lower price in the market.",
    },
    {
        title: "ACCESS ENERGY BEST SUPERVISION",
        description:
            "Solar Power System Installation Done Under The supervision of Qualified Engineer And Well Experienced Technical Team.",
    },
    {
        title: "QUICK SERVICE",
        description: "Efficient and speedy after sales services.",
    },
    {
        title: "POWER GENERATION GURANTEE",
        description:
            "25-30 years Power generation gurantee for the solar module and 10 years warranty for the invertor.",
    },
    {
        title: "SYSTEM WEB MONITORING",
        description: "Centralized monitoring system lets you monitor your entire solar system in real time.",
    },
    {
        title: "OUR INSTALLATION STANDARD",
        description: "Installation in done according to SEA (sustainable energy authority) & CEB/LECO standard.",
    },
]

export default function WhyChoose({}: Props) {
    const [formData, setFormData] = useState<FormData>({
        full_name: '',
        address: '',
        usage: '',
        email: '',
        phone: '',
      });
    
      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // console.log('Form Data:', formData);
        // You can send the form data to the server or perform other actions here
      };
    return (
        <>
            {/* <!-- Why Choose Us --> */}
            <section className="why-choose-us pb-lg-0">
                <div className="bg-image" style={{ backgroundImage: "url(images/icons/bg-pattern-1.png)" }}></div>
                <div className="auto-container">
                    <div className="row">
                        {/* <!-- Content Column --> */}
                        <div className="content-column col-lg-6">
                            <div className="inner-column wow fadeInRight">
                                <div className="sec-title light">
                                    <span className="sub-title">Why Choose Us</span>
                                    <h2>WHY WE ARE THE BEST SOLAR PROVIDER</h2>
                                </div>
                                {/* <!-- Feature Block --> */}
                                {whyChoose.map((item: WhyChoose, id: number) => (
                                    <div
                                        key={id}
                                        className={
                                            "feature-block-two " +
                                            (id < whyChoose.length - 1 ? "pb-30" : "border-bottom-0")
                                        }
                                    >
                                        <div className="inner-box">
                                            <i className="icon fas fa-check"></i>
                                            <h4 className="title">{item.title}</h4>
                                            <p className="text">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* <!-- form Column --> */}
                        <div className="form-column col-lg-6">
                            <div className="inner-column">
                                <p className="fs-6 mb-5 text-light">
                                    We believe in a future where renewable energy sources play a vital role in reducing
                                    carbon emissions and creating a sustainable planet.
                                </p>
                                {/* <!-- Contact Form --> */}
                                <div className="contact-form wow fadeInLeft">
                                    {/* <!--Contact Form--> */}
                                    <form method="post" action="get" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-lg-12 form-group">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="full_name"
                                                    placeholder="Your Name"
                                                    value={formData.full_name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="col-lg-12 form-group">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="address"
                                                    placeholder="Your Address"
                                                    value={formData.address}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="col-lg-12 form-group">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="usage"
                                                    placeholder="Monthly Usage/ Expected in unit (124 unit)"
                                                    value={formData.usage}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="col-lg-12 form-group">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="Email"
                                                    placeholder="Your Email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="col-lg-12 form-group">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="Phone"
                                                    placeholder="Phone No"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            {/* <div className="col-lg-12 form-group">
                                                <textarea
                                                    name="form_message"
                                                    className="form-control required"
                                                    rows={6}
                                                    placeholder="Enter Message"
                                                ></textarea>
                                            </div> */}
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <button
                                                    className="theme-btn btn-style-three"
                                                    type="submit"
                                                    name="submit-form"
                                                >
                                                    <span className="btn-title">Submit Request</span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/* <!--End Contact Form --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Why Choose Us --> */}
        </>
    )
}
