import PageTitle from "components/common/PageTitle"
import { RouterLink } from "routes/components"
import ProductItem, { Product } from "components/product/ProductItem"
import { useEffect, useState } from "react"

type Category = {
    id: string
    title: string
}

type Props = {}

const categories: Category[] = [
    { id: "1", title: "Panels" },
    { id: "2", title: "Inverters" },
    { id: "3", title: "Water Pump" },
    { id: "4", title: "Street Light" },
]

const products: Product[] = [
    {
        id: "1",
        title: "JinKO Solar Panel",
        categoryId: "1",
        image: "/images/resource/products/solar-1.jpg",
        price: 0,
    },
    {
        id: "2",
        title: "AE Solar Panel",
        categoryId: "1",
        image: "/images/resource/products/solar-2.webp",
        price: 0,
    },
    {
        id: "3",
        title: "JA Solar Panel",
        categoryId: "1",
        image: "/images/resource/products/solar-3.jfif",
        price: 0,
    },
    {
        id: "4",
        title: "SMA Inverter",
        categoryId: "2",
        image: "/images/resource/products/Inverter-SMA.jpg",
        price: 0,
    },
    {
        id: "5",
        title: "Solax Inverter",
        categoryId: "2",
        image: "/images/resource/products/Inverter-Solax.jfif",
        price: 0,
    },
    {
        id: "6",
        title: "Solis Inverter",
        categoryId: "2",
        image: "/images/resource/products/Inverter-Solis.jpg",
        price: 0,
    },
    {
        id: "7",
        title: "FIMER Inverter",
        categoryId: "2",
        image: "/images/resource/products/FIMER Inverter.jpg",
        price: 0,
    },
    {
        id: "8",
        title: "Inverter deye",
        categoryId: "2",
        image: "/images/resource/products/deye inverter.png",
        price: 0,
    },
    {
        id: "9",
        title: "Solar Water Panel",
        categoryId: "1",
        image: "/images/resource/products/Solar Water Panel.webp",
        price: 0,
    },
    {
        id: "10",
        title: "Phoenix SPD",
        categoryId: "1",
        image: "/images/resource/products/phoenix spd.webp",
        price: 0,
    },
    {
        id: "11",
        title: "Suntree SPD",
        categoryId: "1",
        image: "/images/resource/products/SPD Suntree.jfif",
        price: 0,
    },
    {
        id: "12",
        title: "Street Light",
        categoryId: "4",
        image: "/images/resource/products/Street Light.jpeg",
        price: 0,
    },
]

export default function ShopProductsPage({}: Props) {
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [favourites, setFavourites] = useState<string[]>(JSON.parse(localStorage.getItem("fav-products") || "[]"))

    const handleFavClick = (id: string) => {
        setFavourites((favourites: string[]) => {
            if (favourites.includes(id)) {
                return favourites.filter((fav: string) => id !== fav)
            } else {
                return [...favourites, id]
            }
        })
    }

    useEffect(() => {
        localStorage.setItem("fav-products", JSON.stringify(favourites))
    }, [favourites])

    return (
        <>
            <PageTitle title="Products" />

            {/* 
	<!-- Featured Products --> */}
            <section className="featured-products">
                <div className="auto-container">
                    {/* <!--MixitUp Galery--> */}
                    <div className="mixitup-gallery">
                        {/* <!--Filter--> */}
                        <div className="filters clearfix">
                            <ul className="filter-tabs filter-btns clearfix">
                                {[{ title: "All", id: "all" }, ...categories].map((category: Category) => (
                                    <li
                                        key={category.id}
                                        className={"filter " + (selectedCategory === category.id ? "active" : "")}
                                        data-role="button"
                                        data-filter={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                    >
                                        {category.title}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="filter-list row">
                            {/* <!--Product Block--> */}
                            {products
                                .filter(
                                    (product: Product) =>
                                        selectedCategory === "all" || selectedCategory === product.categoryId
                                )
                                .map((product: Product) => (
                                    <ProductItem
                                        product={product}
                                        favourite={favourites.includes(product.id)}
                                        onClickFavourite={handleFavClick}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Featured Products --> */}
        </>
    )
}
