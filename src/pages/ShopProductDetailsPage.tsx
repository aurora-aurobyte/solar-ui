import Loader from "components/common/Loader"
import { FormEvent, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { addCartItem } from "store/features/cartSlice"
import { useAppDispatch } from "store/store"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

type Product = {
    id: string
    title: string
    description: string
    image: string
    subImages: string[]
    price: number
    rating: number
    numOfRatings: number
    isAvailable: boolean
    ref: string
    additionalDescription?: string
    features?: string[]
}

type Props = {}

const products: Product[] = [
    {
        id: "1",
        title: "JinKO Solar Panel",
        description:
            "The innovative solar panel of the future combines cutting-edge technology and design features to maximize efficiency and sustainability. Smart soldering techniques ensure precise and reliable connections between solar cells, enhancing the overall performance and durability of the panel. The incorporation of optimized electrical parameters ensures that the solar panel operates at its peak efficiency, converting sunlight into electricity with unmatched precision.",
        image: "/images/resource/products/solar-1.jpg",
        subImages: [
            "/images/resource/products/product-details.jpg",
            "/images/resource/products/product-details2.jpg",
            "/images/resource/products/product-details3.jpg",
        ],
        price: 65000,
        rating: 5,
        numOfRatings: 2,
        isAvailable: true,
        ref: "4231/406",
        additionalDescription: "The solar panel's design also emphasizes an optimized module size, striking a balance between space utilization and energy production. This thoughtful approach allows for flexible installation options, making it suitable for various environments and applications. Additionally, the use of gallium-doped technology further boosts the panel's efficiency by enhancing light absorption and electron mobility, resulting in increased energy yield.",
        features: [
            "Power 465W",
            "Module Efficiency 20.71%",
            "Open Circuit Voltage (Voc) 51.92V",
            "Short Circuit Current 11.59A",
            "Weight 25Kg",
            "465W data sheet",
        ],
    },
    {
        id: "2",
        title: "AE Solar Panel",
        description:
            "AE Solar panels are made from high-quality monocrystalline silicon cells, which are known for their high efficiency in converting sunlight into electricity. The panels are also designed to be durable and weather-resistant, withstanding harsh conditions such as hail, snow, and extreme temperatures. AE Solar panels are backed by a 25-year warranty, ensuring long-term performance and peace of mind.",
        image: "",
        subImages: [
            "/images/resource/products/product-details2.jpg",
            "/images/resource/products/product-details.jpg",
            "/images/resource/products/product-details3.jpg",
        ],
        price: 64000,
        rating: 4,
        numOfRatings: 12,
        isAvailable: true,
        ref: "4231/407",
        additionalDescription: "AE Solar guarantees high-quality and best performance of photovoltaic modules using only superior raw materials and components from Tier 1 Grade A suppliers. AE Smart Hot-Spot Free Series with Power Range : 255W-350W (increasing efficiency up to 30%) available in mono- and polycrystalline Thanks to an innovative and patented technology AE Hot Spot Free Modules generate up to 30% more power with less sunlight in comparison to standard modules and have no fire risk caused by hot-spot cells.",
        features: [
            "Innovative and patented technology",
            "No reduction of module stability and No fire risk, which is caused by hot-spot cells",
            "Linear Performance Guarantee: 30 years",
            "All PV modules are tested through an electroluminescence inspection system",
        ],
    },
    {
        id: "3",
        title: "JA Solar Panel",
        description:
            "Founded in May 18. 2005, JA Solar Technology Co., Ltd was officially listed on the A-share market in 2019 with the market capitalization of around 20 billion US dollars. The major business of JA Solar is to produce solar cells, solar modules, and PV system.",
        image: "",
        subImages: [
            "/images/resource/products/product-details2.jpg",
            "/images/resource/products/product-details.jpg",
            "/images/resource/products/product-details3.jpg",
        ],
        price: 67000,
        rating: 4,
        numOfRatings: 12,
        isAvailable: true,
        ref: "4231/408",
        additionalDescription: "",
        features: [
            "Type – JAM72S20-450/MR",
            "Rated Maximem Power(pmax)[W] – 450",
            "Open-circuit Voltage – 49.70",
            "Maximem Power Voltage(vmp)[V] – 41.52",
            "Short-circuit Current (Isc)[A] – 11.36A",
            "Maximum Power Current (Imp)[A] – 10.84A",
            "Module Efficiency[%] – 20.2",
            "Power tolerance – 0~+5W%",
        ],
    },
    {
        id: "4",
        title: "SMA Inverter",
        description: `Germany’s SMA has a history of more than 35 years in the development of power inverters for residential, commercial and utility scale solar and wind energy applications – far longer than most of its competitors. Inventor of the world’s first string inverter, the SMA inverter has been the quality benchmark in the solar inverter industry for decades.

SMA was the first manufacturer of solar inverters listed in the Prime Standard of the Frankfurt Stock Exchange and has also been listed in the TecDAX since 2008.`,
        image: "",
        subImages: [
            "/images/resource/products/product-details2.jpg",
            "/images/resource/products/product-details.jpg",
            "/images/resource/products/product-details3.jpg",
        ],
        price: 450000,
        rating: 4,
        numOfRatings: 12,
        isAvailable: true,
        ref: "4231/409",
        additionalDescription: `SMA Product Lines
Sunny Boy – home and small commercial systems.
Sunny Tripower – medium-sized plants through to multi-megawatt.

SMA Inverter Characteristics:
o Quality construction and designed in Germany.
o High conversion efficiencies.
o Robust – perfect for Sri Lanka’s conditions.
o Excellence in after sales service and support.
o Solid warranties, rapid turnaround and low warranty claims.
o Monitoring capabilities and access to Sunny Portal, which features almost infinite options for analyzing data and visualizing yields.

A multiple award-winner, SMA manufactures one of the world’s most trusted, reliable and efficient brands of solar inverter. SMA is one of the most recognised names in the renewable energy sector and its products are very popular in Sri Lankan home and commercial solar power installations.`,
        features: [
            "Brand : SMA",
            "Model : Sunny TriPower 10000TL",
            "Warranty: 5 years extendable warranty",
        ],
    },
    {
        id: "5",
        title: "Solax Inverter",
        description: `The SolaX X1 Boost 4.2kW Dual MPPT Solar Inverter is a market-leading product offering the perfect balance between performance, reliability, functionality, price and length of warranty.
        
*Now includes SolaX Pocket WiFi Dongle V3.0 as standard for remote monitoring via SolaX Cloud*
        
This SolaX X1 Boost 4.2kW inverter boasts a wide MPPT voltage range to allow for more energy harvesting and have a maximum input voltage of 580V, with a maximum efficiency of 98%. SolaX Power single phase inverters are IP66 rated, have no internal fan and come with optional ‘plug & play’ WiFi. The dual MPPT ‘Boost’ range is also compatible with the new SolaX ‘Smart Plug’ which allows for device romote control.`,
        image: "",
        subImages: [
            "/images/resource/products/product-details2.jpg",
            "/images/resource/products/product-details.jpg",
            "/images/resource/products/product-details3.jpg",
        ],
        price: 196000,
        rating: 4,
        numOfRatings: 12,
        isAvailable: true,
        ref: "4231/410",
        additionalDescription: `Simple, Reliable, Efficient
The SolaX X1 Boost is amongst some of the most efficient residential string solar inverters available on the market today, boasting a massive 97.8% efficiency and with a maximum DC voltage of 580V, you can ensure that you are making the most out of your solar energy.

Perfect For Small PV Arrays
The SolaX X1 Boost is the ultimate residential solar inverter, designed for homes with solar panels on different sides of the roof. With two MPPT trackers, the X1 Boost can be connected to two separate panel arrays, In addition, the X1 Boost is also IP66 rated meaning it can be installed outdoors offering more flexibility.
Note to end users: Can end-users purchase this product to save money on the cost of a replacement inverter? Yes, of course! Simply purchase the inverter and arrange for a local qualified electrician to install the unit for you (should be a 1-2 hour call-out). By sourcing the inverter yourself, you can make a huge saving on the prices quoted by installation companies for supply and fit services.

Downloads
Datasheet – SolaX X1 Boost G3
User Manual – SolaX X1 Boost G3
Installation Guide – SolaX X1 Boost G3`,
        features: [
            "Wide Voltage Range",
            "LCD Touch Display",
            "Online Monitoring via SolaX Pocket WiFi | SolaX Pocket WiFi Plus | SolaX Pocket LAN",
            "Max Efficiency Up To 98%",
            "IP66 Rated",
        ],
    },
    {
        id: "6",
        title: "Solis Inverter",
        description: `The Solis 5G 5.0kW Hybrid Inverter is a good choice for both on-grid PV operations and for secure back-up battery storage.

Solis fifth generation 5G residential hybrid inverters deliver top-of-class efficiency (97.5%), 24-hour intelligent energy management and a large 7″ color LCD for easy programming.  The Solis 5G 5.0kW Hybrid Inverter can be programmed into 3 operating modes, Solar Self-consumption, Timed Charge/Discharge  and Back-Up mode for when the home loses power.

It is important to understand that this is a hybrid solar PV inverter and battery storage controller. This means it needs to be sized just like a regular inverter would be and, if it is being retrofitted, will replace the existing inverter.`,
        image: "",
        subImages: [
            "/images/resource/products/product-details2.jpg",
            "/images/resource/products/product-details.jpg",
            "/images/resource/products/product-details3.jpg",
        ],
        price: 420000,
        rating: 4,
        numOfRatings: 12,
        isAvailable: true,
        ref: "4231/411",
        additionalDescription: `Add remote monitoring with the Solis Gen3 WiFi Dongle.

Downloads
Datasheet – Solis 5G Hybrid
User Manual – Solis 5G Hybrid
Warranty Document – Solis 5G Hybrid`,
        features: [
            "Brand : SMA",
            "Model : Sunny TriPower 10000TL",
            "Warranty: 5 years extendable warranty",
        ],
    },
    {
        id: "7",
        title: "FIMER Inverter",
        description: `The UNO-DM-TL-PLUS-US-Q single-phase inverter family,with power ratings from 3.3 to 5.0 kW, is the optimal solution for residential installations.

One size fits all
The design wraps FIMER's quality and engineering into alightweight and compact package thanks to technological choices optimized for installations with different orientation.All power ratings share the same overall volume, allowing higher performance in a minimum space, and have a dual Maximum Power Point Tracker (2 MPPT).

Easy to install, fast to commission
The wireless communication, enables a simple, fast and safe installation without the need of opening the front cover of the inverter.The featured easy commissioning routine removes the need for a long configuration process, resulting in lower installation time and costs.Improved user experience thanks to a build in User Interface (UI), which enables access to features such as advanced inverter configuration settings, dynamic feed-in control and load manager, from any WLAN enabled devices (smartphone, tablet or PC).

Smart capabilities
The embedded logging capabilities and direct transferring of the data to Internet (via Ethernet or WLAN) allow customers to enjoy the whole Aurora Vision remote monitoring experience. The advanced communication interfaces (WLAN, Ethernet, RS485) combined with an efficient Modbus (RTU/TCP) communication protocol, Sunspec compliance, allow the inverter to be easilyintegrated within any smart environment and with third partymonitoring and control systems.A complete set of control functions with the embedded efficient algorithm, enabling dynamic control of the feed-in (i.e. ZeroInjection), make the inverter suitable for worldwide applications in compliance with regulatory norms and needs of the utilities. The future-proof and flexible design enables integration with current and future devices for smart building automation

Module Level Rapid Shutdown (RSD)
UNO-DM-PLUS now offers an integrated solution to comply with the safety requirements of de-energizing a PV system at the module level. With a built-in SunSpec certified transmitter, the unit can send a powerline signal, to the modules, providing the fastest and most reliable way to be compliant with NEC 2017 and NEC 2020 (690.12) requirements. FIMER allows the customer to choose between the standard model allowing for field-installation of the Rapid Shutdown in the wire box, or the integrated RSD wire-box for an agnostic solution compatible with SunSpec compliant receivers.

Energy Viewer
This tool allows residential customers to remotely monitor the performance of their own solar plant.`,
        image: "",
        subImages: [
            "/images/resource/products/product-details2.jpg",
            "/images/resource/products/product-details.jpg",
            "/images/resource/products/product-details3.jpg",
        ],
        price: 360000,
        rating: 4,
        numOfRatings: 12,
        isAvailable: true,
        ref: "4231/412",
        additionalDescription: `Highlights
Wireless access to the embedded Web User Interface
Easy commissioning with QR code access
UL 1741 SA compliant
Future-proof with embedded connectivity for smart building and smart grid integration
Remote Over The Air (OTA) firmware upgrade for inverter and components
Modbus TCP/RTU Sunspec compliant
Remote monitoring via Aurora Vision cloud
Dual input section with independent MPPT
Integrated rapid shutdown power supplier (String level RSD)
Integrated module level RSD PLC transmitter (specific version)
FIMER PowerGain Hardware and Software optimization per MPPT
UNO-DM-3.3/3.8/4.6/5.0TL-PLUS-US-Q Data sheet | Download`,
        features: [
            "Model: UNO-DM-3.3-TL-PLUS-US-SB-RA-Q",
            "GTIN: 08054529630653",
            "Manufactured by: Fimer",
            "Condition: New",
        ],
    },
    {
        id: "8",
        title: "Inverter deye",
        description:
            "The innovative design of the SUN5K-G is not only easy to install, but also allows for quick DC and AC connections. E.g. it weighs just 4.8 kg. Commissioning is equally easy, because the integrated user interface (local LCD display and buttons) makes it possible to choose the necessary settings quickly.",
        image: "",
        subImages: [
            "/images/resource/products/product-details2.jpg",
            "/images/resource/products/product-details.jpg",
            "/images/resource/products/product-details3.jpg",
        ],
        price: 230000,
        rating: 4,
        numOfRatings: 12,
        isAvailable: true,
        ref: "4231/413",
        additionalDescription: "",
        features: [
            "2 MPP trackers, Max. efficiency up to 97.5%",
            "Zero export application, VSG application",
            "String intelligent monitoring (optional)",
            "Wide output voltage range",
            "Anti-PID function (Optional)",
            "Low start-up voltage of 80V",
        ],
    },
    {
        id: "9",
        title: "Solar Water Panel",
        description:
            "St. Anthony’s Solar hot water system contains of an evacuated tube solar collector which consists of glass tube with copper pipes running through the center. The evacuated tube solar collector captures the thermal energy from the sun. Then the captured heat is transferred into water using a circulator by pushing water through the solar collector. Then the heated water is then stored in a tank, where it is been continuously heated throughout the day. This water can be used to obtain hot water to the house at any given time. Learn more below why you should switch to St. Anthony’s solar hot water system.",
        image: "",
        subImages: [
            "/images/resource/products/product-details2.jpg",
            "/images/resource/products/product-details.jpg",
            "/images/resource/products/product-details3.jpg",
        ],
        price: 125000,
        rating: 4,
        numOfRatings: 12,
        isAvailable: true,
        ref: "4231/414",
        additionalDescription: "",
        features: [
            "#1 Solar hot water system in the market",
            "No waiting for the boiler to heat up, Ready when you are.",
            "Works under all weather conditions",
            "No negative environmental impact",
            "Works during power cuts",
            "Save on energy cost",
            "High efficient tube system",
            "Warranty up to 10 years",
        ],
    },
    {
        id: "10",
        title: "Phoenix SPD",
        description:
            "Surge protective device for 2-pos. isolated and grounded 1,000 V DC PV systems, for DIN rail mounting, 3-pos. base element, three pluggable temperature-monitored protective elements, status message on each plug.",
        image: "",
        subImages: [
            "/images/resource/products/product-details2.jpg",
            "/images/resource/products/product-details.jpg",
            "/images/resource/products/product-details3.jpg",
        ],
        price: 12500,
        rating: 4,
        numOfRatings: 12,
        isAvailable: true,
        ref: "4231/415",
        additionalDescription: `SMA Product Lines
            Sunny Boy – home and small commercial systems.
            Sunny Tripower – medium-sized plants through to multi-megawatt.

            SMA Inverter Characteristics:
            o Quality construction and designed in Germany.
            o High conversion efficiencies.
            o Robust – perfect for Sri Lanka’s conditions.
            o Excellence in after sales service and support.
            o Solid warranties, rapid turnaround and low warranty claims.
            o Monitoring capabilities and access to Sunny Portal, which features almost infinite options for analyzing data and visualizing yields.

            A multiple award-winner, SMA manufactures one of the world’s most trusted, reliable and efficient brands of solar inverter. SMA is one of the most recognised names in the renewable energy sector and its products are very popular in Sri Lankan home and commercial solar power installations.`,
        features: [
            "Brand : SMA",
            "Model : Sunny TriPower 10000TL",
            "Warranty: 5 years extendable warranty",
        ],
    },
    {
        id: "11",
        title: "Suntree SPD",
        description:
            "Germany’s SMA has a history of more than 35 years in the development of power inverters for residential, commercial and utility scale solar and wind energy applications – far longer than most of its competitors. Inventor of the world’s first string inverter, the SMA inverter has been the quality benchmark in the solar inverter industry for decades.<br /><br />SMA was the first manufacturer of solar inverters listed in the Prime Standard of the Frankfurt Stock Exchange and has also been listed in the TecDAX since 2008.",
        image: "",
        subImages: [
            "/images/resource/products/product-details2.jpg",
            "/images/resource/products/product-details.jpg",
            "/images/resource/products/product-details3.jpg",
        ],
        price: 450000,
        rating: 4,
        numOfRatings: 12,
        isAvailable: true,
        ref: "4231/416",
        additionalDescription: "",
        features: [
            "Brand	Phoenix Contact",
            "Rated Voltage	1000 V",
            "Rated Current	40 KA",
            "Model Name/Number	1000DC-PV-ST",
            "Type	2",
            "Maximum discharge current	40 KA",
            "Width	17.5 mm",
            "Depth	55.3 mm",
            "Ambient temperature	40 to 80 Degree",
            "Nominal discharge current	15 KA",
            "Height	52.4 mm",
            "Voltage protection level	1.9 KV",
            "Country of Origin	Made in India",
        ],
    },
    {
        id: "13",
        title: "Suntree SPD - SUP2H-PV SERIES SURGE PROTECTOR",
        description: `SSPD surge protective device, protect against lightning surge voltages in solar system (photovoltaic power supply system).These units must be installed in parallel on the DC networks to be protected and provide common and different modes protection. Its installed location are recommended at both ends of the DC power supply line ( solar panel side and inverter/converter side), especially if the line routing is external and long.

High energy MOVs equipped with specific thermal disconnectors and related failure indicators.`,
        image: "",
        subImages: [
            "/images/resource/products/product-details2.jpg",
            "/images/resource/products/product-details.jpg",
            "/images/resource/products/product-details3.jpg",
        ],
        price: 17500,
        rating: 4,
        numOfRatings: 12,
        isAvailable: true,
        ref: "4231/417",
        additionalDescription: "",
        features: [
            "Place of Origin: Zhejiang, China (Mainland)",
            "Brand Name: Suntree/",
            "Model Number: SSPD",
            "color: RED",
            "type: SUP2H-PV",
            "Electricity Type: DC",
            "Certificate: IEC,ROHS,ISO,CE",
            "Price: Competitive prices",
            "Quality Assurance: 18 Month",
            "Mechanical life: 10years",
            "Installation: Outdoor",
            "maximum working voltage: 250AC/30VDC",
        ],
    },
    {
        id: "12",
        title: "Street Light",
        description:`Remote control for selecting lighting profile.
High Lumen efficacy of upto 160lm/W
Microwave sensor for run time maximization
Preserves landscape as no trenching for cabling required
Environmental Friendly
1 Year warranty`,
        image: "",
        subImages: [
            "/images/resource/products/product-details2.jpg",
            "/images/resource/products/product-details.jpg",
            "/images/resource/products/product-details3.jpg",
        ],
        price: 1000,
        rating: 4,
        numOfRatings: 12,
        isAvailable: true,
        ref: "4231/418",
        additionalDescription: `Wattage	
        50W, 100W, 150W
        
        Color Temperature	
        COOL WHITE, WARM WHITE`,
        features: [
            "Brand : GREEN ELECTRIC",
            "Input Volatge (V) : 100-240",
            "Color Temperature (K) : 6500",
            "DF : 0.9",
            "CRI : 90",
            "Surge : 4KV",
            "EMC : EMC",
            "Beam Angle : 90°",
            "Life span（H）: 30000",
            "IP : 65",
            "Warranty : 2 Years",
        ],
    },
]

export default function ShopProductDetailsPage({}: Props) {
    const { productId } = useParams()
    const dispatch = useAppDispatch()

    const [product, setProduct] = useState<Product>()
    const [loading, setLoading] = useState<boolean>(true)
    const [quantity, setQuantity] = useState<number>(1)
    const [showModal, setShowModal] = useState<boolean>(false)

    const handleQuantityChange = (e: FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value
        setQuantity(parseInt(newValue) || 1)
    }

    const incrementQuantity = (increment: number) => {
        const incremented = quantity + increment
        setQuantity(incremented < 1 ? 1 : incremented)
    }

    const handleAddToCart = () => {
        if (!product) return
        dispatch(
            addCartItem({
                productId: product.id,
                unitPrice: product.price,
                quantity: quantity,
                productName: product.title,
                productImage: product.image,
            })
        )
        setShowModal(true)
        setQuantity(0)
        setTimeout(() => {
            setShowModal(false)
        }, 2000)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    useEffect(() => {
        setTimeout(() => {
            setProduct(products.find((product: Product) => product.id === productId))
            setLoading(false)
        }, 2000)
    }, [])

    useEffect(() => {
        //Gallery Filters
        // @ts-ignore
        if ($(".filter-list").length) {
            console.log("Setting up")
            // @ts-ignore
            $(".filter-list").mixItUp({})
        }

        // @ts-ignore
        if ($(".product-details .bxslider").length) {
            // @ts-ignore
            $(".product-details .bxslider").bxSlider({
                nextSelector: ".product-details #slider-next",
                prevSelector: ".product-details #slider-prev",
                nextText: '<i class="fa fa-angle-right"></i>',
                prevText: '<i class="fa fa-angle-left"></i>',
                mode: "fade",
                auto: "true",
                speed: "700",
                pagerCustom: ".product-details .slider-pager .thumb-box",
            })
        }
    }, [loading])

    if (loading) return <Loader />

    if (!product)
        return (
            <div className="product-notfound-cont">
                <div className="alert alert-danger" role="alert">
                    Product not found
                </div>
            </div>
        )

    const images: string[] = []
    if (product.image) images.push(product.image)
    if (product.subImages) images.push(...product.subImages)

    return (
        <>
            {/* <!--Product Details Start--> */}
            <section className="product-details">
                <div className="container pb-70">
                    <div className="row">
                        <div className="col-lg-6 col-xl-6">
                            <div className="bxslider">
                                {images.map((image: string) => (
                                    <div className="slider-content" key={image + "outer"}>
                                        <figure className="image-box">
                                            <a href={image} className="lightbox-image" data-fancybox="gallery">
                                                <img src={image} alt={product.title} />
                                            </a>
                                        </figure>
                                        <div className="slider-pager">
                                            <ul className="thumb-box">
                                                {images
                                                    .filter((innerImage: string) => innerImage !== image)
                                                    .map((innerImage: string) => (
                                                        <li key={innerImage + "inner"}>
                                                            {" "}
                                                            <a
                                                                className="active"
                                                                data-slide-index={images.findIndex(
                                                                    (image: string) => innerImage === image
                                                                )}
                                                                href="#"
                                                            >
                                                                <figure>
                                                                    <img src={innerImage} alt={product.title} />
                                                                </figure>
                                                            </a>{" "}
                                                        </li>
                                                    ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6 product-info">
                            <div className="product-details__top">
                                <h3 className="product-details__title">
                                    {product.title} <span>Rs. {product.price}</span>{" "}
                                </h3>
                            </div>
                            <div className="product-details__reveiw">
                                {new Array(product.rating).fill(1).map((_: any, id: number) => (
                                    <i key={id} className="fa fa-star"></i>
                                ))}
                                <span>{product.numOfRatings} Customer Reviews</span>
                            </div>
                            <div className="product-details__content">
                                <p className="product-details__content-text1" dangerouslySetInnerHTML={{
                                    __html: product.description.replace(/\n/g, '<br/>')
                                }}></p>
                                <p className="product-details__content-text2">
                                    <strong>REF.</strong> {product.ref} <br />
                                    {product.isAvailable ? "Available in store" : "Unavailable in store"}
                                </p>
                            </div>

                            <div className="product-details__quantity">
                                <h3 className="product-details__quantity-title">Choose quantity</h3>
                                <div className="quantity-box">
                                    <button
                                        type="button"
                                        className="sub text-white"
                                        onClick={() => incrementQuantity(-1)}
                                    >
                                        <i className="fa fa-minus"></i>
                                    </button>
                                    <input type="number" id="1" value={quantity} onChange={handleQuantityChange} />
                                    <button
                                        type="button"
                                        className="add text-white"
                                        onClick={() => incrementQuantity(1)}
                                    >
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="product-details__buttons">
                                <div className="product-details__buttons-1">
                                    <button className="theme-btn btn-style-one" onClick={handleAddToCart}>
                                        <span className="btn-title">Add to Cart</span>
                                    </button>
                                </div>
                                <div className="product-details__buttons-2">
                                    <a href="shop-product-details.html" className="theme-btn btn-style-one">
                                        <span className="btn-title">Add to Wishlist</span>
                                    </a>
                                </div>
                            </div>
                            <div className="product-details__social">
                                <div className="title mt-10">
                                    <h3>Share with friends</h3>
                                </div>
                                <ul className="social-icon-one product-share">
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-pinterest"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--Product Details End--> */}

            {/* <!--Product Description Start--> */}
            <section className="product-description">
                <div className="container pt-0 pb-90">
                    <div className="product-discription">
                        <div className="tabs-box">
                            <div className="tab-btn-box text-center">
                                <ul className="tab-btns tab-buttons clearfix">
                                    <li className="tab-btn active-btn" data-tab="#tab-1">
                                        Description
                                    </li>
                                    <li className="tab-btn" data-tab="#tab-2">
                                        Reviews
                                    </li>
                                </ul>
                            </div>
                            <div className="tabs-content">
                                <div className="tab active-tab" id="tab-1">
                                    <div className="text">
                                        <h3 className="product-description__title">Description</h3>
                                        <p className="product-description__text1" dangerouslySetInnerHTML={{
                                            __html: product.description.replace(/\n/g, '<br/>')
                                        }}></p>
                                        <div className="product-description__list">
                                            <ul className="list-unstyled">
                                                {product.features?.map((feature: string, id: number) => (
                                                    <li key={id}>
                                                        <p>
                                                            <span className="fa fa-arrow-right"></span> {feature}
                                                        </p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        {
                                            product.additionalDescription ?
                                        <p className="product-description__tex2" dangerouslySetInnerHTML={{
                                            __html: product.additionalDescription.replace(/\n/g, '<br/>')
                                        }}></p> : null
                                        }
                                    </div>
                                </div>
                                <div className="tab" id="tab-2">
                                    <div className="customer-comment">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 comment-column">
                                                <div className="single-comment-box">
                                                    <div className="inner-box">
                                                        <figure className="comment-thumb">
                                                            <img src="/images/resource/testi-2.jpg" alt="" />
                                                        </figure>
                                                        <div className="inner">
                                                            <ul className="rating clearfix">
                                                                <li>
                                                                    <i className="fas fa-star"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-star"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-star"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-star"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-star"></i>
                                                                </li>
                                                            </ul>
                                                            <h5>
                                                                Jon D. William, <span>10 Jan, 2023 . 4:00 pm</span>
                                                            </h5>
                                                            <p>
                                                                Aliquam hendrerit a augue insuscipit. Etiam aliquam
                                                                massa quis des mauris commodo.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 comment-column">
                                                <div className="single-comment-box">
                                                    <div className="inner-box">
                                                        <figure className="comment-thumb">
                                                            <img src="/images/resource/testi-1.jpg" alt="" />
                                                        </figure>
                                                        <div className="inner">
                                                            <ul className="rating clearfix">
                                                                <li>
                                                                    <i className="fas fa-star"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-star"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-star"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-star"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-star"></i>
                                                                </li>
                                                            </ul>
                                                            <h5>
                                                                Aleesha Brown, <span>12 Feb, 2023 . 8:00 pm</span>
                                                            </h5>
                                                            <p>
                                                                Aliquam hendrerit a augue insuscipit. Etiam aliquam
                                                                massa quis des mauris commodo.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-box">
                                        <h3>Add Your Comments</h3>
                                        <form
                                            id="contact_form"
                                            name="contact_form"
                                            className=""
                                            action="includes/sendmail.php"
                                            method="post"
                                        >
                                            <div className="mb-3">
                                                <textarea
                                                    name="form_message"
                                                    className="form-control required"
                                                    rows={7}
                                                    placeholder="Enter Message"
                                                ></textarea>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="mb-3">
                                                        <input
                                                            name="form_name"
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Enter Name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="mb-3">
                                                        <input
                                                            name="form_email"
                                                            className="form-control required email"
                                                            type="email"
                                                            placeholder="Enter Email"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 column">
                                                <div className="review-box clearfix">
                                                    <p>Your Review</p>
                                                    <ul className="rating clearfix">
                                                        <li>
                                                            <i className="far fa-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="far fa-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="far fa-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="far fa-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="far fa-star"></i>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 column">
                                                <div className="form-group clearfix">
                                                    <div className="custom-controls-stacked">
                                                        <label className="custom-control material-checkbox">
                                                            <input type="checkbox" className="material-control-input" />
                                                            <span className="material-control-indicator"></span>
                                                            <span className="description">
                                                                Save my name, email, and website in this browser for the
                                                                next time I comment.
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <input
                                                    name="form_botcheck"
                                                    className="form-control"
                                                    type="hidden"
                                                    defaultValue=""
                                                />
                                                <button
                                                    type="submit"
                                                    className="theme-btn btn-style-one"
                                                    data-loading-text="Please wait..."
                                                >
                                                    <span className="btn-title">Submit Comment</span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--Product Description End--> */}

            <section className="related-product">
                <div className="container pt-0 pb-90">
                    <h3>Related Products</h3>
                    <div className="row clearfix">
                        <div className="col">
                            {/* <!--MixitUp Galery--> */}
                            <div className="mixitup-gallery">
                                <div className="filter-list row">
                                    {/* <!--Product Block--> */}
                                    <div className="product-block all mix pantry fruit col-lg-3 col-md-6 col-sm-12">
                                        <div className="inner-box">
                                            <div className="image">
                                                <a href="shop-product-details.html">
                                                    <img src="/images/resource/products/1.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    <a href="shop-product-details.html">Headphone</a>
                                                </h4>
                                                <span className="price">$32.00</span>
                                                <span className="rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </div>
                                            <div className="icon-box">
                                                <a href="shop-product-details.html" className="ui-btn like-btn">
                                                    <i className="fa fa-heart"></i>
                                                </a>
                                                <a href="shop-cart.html" className="ui-btn add-to-cart">
                                                    <i className="fa fa-shopping-cart"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--Product Block--> */}
                                    <div className="product-block all mix dairy meat fruit col-lg-3 col-md-6 col-sm-12">
                                        <div className="inner-box">
                                            <div className="image">
                                                <a href="shop-product-details.html">
                                                    <img src="/images/resource/products/2.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    <a href="shop-product-details.html">Lagage</a>
                                                </h4>
                                                <span className="price">$32.00</span>
                                                <span className="rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </div>
                                            <div className="icon-box">
                                                <a href="shop-product-details.html" className="ui-btn like-btn">
                                                    <i className="fa fa-heart"></i>
                                                </a>
                                                <a href="shop-cart.html" className="ui-btn add-to-cart">
                                                    <i className="fa fa-shopping-cart"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--Product Block--> */}
                                    <div className="product-block all mix pantry fruit vagetables col-lg-3 col-md-6 col-sm-12">
                                        <div className="inner-box">
                                            <div className="image">
                                                <a href="shop-product-details.html">
                                                    <img src="/images/resource/products/3.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    <a href="shop-product-details.html">Watch</a>
                                                </h4>
                                                <span className="price">$32.00</span>
                                                <span className="rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </div>
                                            <div className="icon-box">
                                                <a href="shop-product-details.html" className="ui-btn like-btn">
                                                    <i className="fa fa-heart"></i>
                                                </a>
                                                <a href="shop-cart.html" className="ui-btn add-to-cart">
                                                    <i className="fa fa-shopping-cart"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--Product Block--> */}
                                    <div className="product-block all mix dairy pantry meat vagetables col-lg-3 col-md-6 col-sm-12">
                                        <div className="inner-box">
                                            <div className="image">
                                                <a href="shop-product-details.html">
                                                    <img src="/images/resource/products/8.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    <a href="shop-product-details.html">SD Card</a>
                                                </h4>
                                                <span className="price">$32.00</span>
                                                <span className="rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </div>
                                            <div className="icon-box">
                                                <a href="shop-product-details.html" className="ui-btn like-btn">
                                                    <i className="fa fa-heart"></i>
                                                </a>
                                                <a href="shop-cart.html" className="ui-btn add-to-cart">
                                                    <i className="fa fa-shopping-cart"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Body className="text-center">
                    <h5>Successfully added to cart</h5>
                    <img src="/images/alerts/success.gif" alt="" />
                </Modal.Body>

                <Modal.Footer>
                    <button className="theme-btn btn-style-one" onClick={handleClose}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
