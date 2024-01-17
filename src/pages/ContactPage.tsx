import { ChangeEvent, FormEvent, useState } from "react"

type Props = {}

const defaultValues = {
    name: "",
    email: "",
    purpose: "",
    phone: "",
    message: "",
}

export default function ContactPage({}: Props) {
    const [values, setValues] = useState(defaultValues)

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setValues((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        const message =
            `Name: ${values.name}\n` +
            `Email: ${values.email}\n` +
            `Purpose: ${values.purpose}\n` +
            `Phone: ${values.phone}\n` +
            `Message: ${values.message}`
        const url = `https://wa.me/94771886719?text=${encodeURI(message)}`
        const a = document.createElement("a")
        a.target = "_blank"
        a.style.display = "none"
        a.href = url
        document.body.appendChild(a)
        a.click()
    }

    const handleClearClick = () => {
        setValues(defaultValues)
    }

    return (
        <>
            {/* <!-- Start main-content --> */}
            <section className="page-title" style={{ backgroundImage: "url(images/background/page-title-bg.png)" }}>
                <div className="auto-container">
                    <div className="title-outer text-center">
                        <h1 className="title">Contact Us</h1>
                        <ul className="page-breadcrumb">
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <!-- end main-content --> */}

            {/* <!--Contact Details Start--> */}
            <section className="contact-details">
                <div className="container ">
                    <div className="row">
                        <div className="col-xl-7 col-lg-6">
                            <div className="sec-title">
                                <span className="sub-title">Send us email</span>
                                <h2>Feel free to write</h2>
                            </div>
                            {/* <!-- Contact Form --> */}
                            <form id="contact_form" name="contact_form" className="" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input
                                                name="name"
                                                className="form-control"
                                                type="text"
                                                placeholder="Enter Name"
                                                value={values.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input
                                                name="email"
                                                className="form-control required email"
                                                type="email"
                                                placeholder="Enter Email"
                                                value={values.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input
                                                name="purpose"
                                                className="form-control required"
                                                type="text"
                                                placeholder="Enter Purpose"
                                                value={values.purpose}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input
                                                name="phone"
                                                className="form-control"
                                                type="phone"
                                                placeholder="Enter Phone"
                                                value={values.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        name="message"
                                        className="form-control required"
                                        rows={7}
                                        placeholder="Enter Message"
                                        value={values.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div className="mb-5 row">
                                    <div className="col">
                                        <button
                                            type="submit"
                                            className="theme-btn btn-style-one mb-3 mb-sm-0"
                                            data-loading-text="Please wait..."
                                        >
                                            <span className="btn-title">Send message</span>
                                        </button>
                                    </div>
                                    <div className="col">
                                        <button
                                            type="reset"
                                            className="theme-btn btn-style-one bg-theme-color5"
                                            onClick={handleClearClick}
                                        >
                                            <span className="btn-title">Reset</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            {/* <!-- Contact Form Validation--> */}
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="contact-details__right">
                                <div className="sec-title">
                                    <span className="sub-title">Need A Help ?</span>
                                    <h2>We are happy to assist you...</h2>
                                </div>
                                <ul className="list-unstyled contact-details__info">
                                    <li className="d-block d-sm-flex align-items-sm-center ">
                                        <div className="icon bg-theme-color2">
                                            <span className="lnr-icon-phone-plus"></span>
                                        </div>
                                        <div className="text ml-xs--0 mt-xs-10">
                                            <h6>Have any question?</h6>
                                            <a href="tel:+94 212223829" style={{ marginRight: 10 }}>
                                                <span>Free</span> +94 212223829
                                            </a>
                                            <a href="tel:+94 771208700"> +94 771208700</a>
                                        </div>
                                    </li>
                                    <li className="d-block d-sm-flex align-items-sm-center ">
                                        <div className="icon">
                                            <span className="lnr-icon-envelope1"></span>
                                        </div>
                                        <div className="text ml-xs--0 mt-xs-10">
                                            <h6>Write email</h6>
                                            <a href="mailto:accessenergyeng@gmail.com">accessenergyeng@gmail.com</a>
                                        </div>
                                    </li>
                                    <li className="d-block d-sm-flex align-items-sm-center ">
                                        <div className="icon">
                                            <span className="lnr-icon-location"></span>
                                        </div>
                                        <div className="text ml-xs--0 mt-xs-10">
                                            <h6>Visit</h6>
                                            <span>No.100, Main Street Jaffna, Srilanka.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--Contact Details End--> */}

            {/* <!-- Map Section--> */}
            <section className="map-section">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15733.069324337113!2d80.0172569!3d9.6581841!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe57815046d813%3A0xc442742402956e36!2sAccess%20Energy%20Engineering!5e0!3m2!1sen!2slk!4v1701189060399!5m2!1sen!2slk"
                    width="100%"
                    height={500}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </section>
            {/* <!--End Map Section--> */}
        </>
    )
}
