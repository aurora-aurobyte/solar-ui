import { RouterLink } from "routes/components"

export type Product = {
    id: string
    title: string
    categoryId: string
    image: string
    price: number
}

type Props = {
    product: Product
    favourite: boolean
    onClickFavourite: (id: string) => void
}

const ProductItem = ({ product, favourite, onClickFavourite }: Props) => {
    const navigateTo = "/products/" + product.id
    return (
        <div className="product-block  col-lg-3 col-md-6 col-sm-12">
            <div className="inner-box">
                <div className="image">
                    <RouterLink href={navigateTo}>
                        <img src={product.image} alt={product.title} />
                    </RouterLink>
                </div>
                <div className="content">
                    <h4>
                        <RouterLink href={navigateTo}>{product.title}</RouterLink>
                    </h4>
                    {/* <span className="price">Rs. 36,470</span> */}
                    {/* <span className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </span> */}
                </div>
                <div className="icon-box">
                    <span
                        className={"ui-btn like-btn " + (favourite ? "fav" : "")}
                        onClick={() => onClickFavourite(product.id)}
                    >
                        <i className="fa fa-heart"></i>
                    </span>
                    <RouterLink href="/shop-cart" className="ui-btn add-to-cart">
                        <i className="fa fa-shopping-cart"></i>
                    </RouterLink>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
