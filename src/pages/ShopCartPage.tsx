import PageTitle from "components/common/PageTitle"
import { ChangeEvent } from "react"
import { RouterLink } from "routes/components"
import { CartItem, modifyQuantity, removeCartItem } from "store/features/cartSlice"
import { useAppDispatch, useAppSelector } from "store/store"

type Props = {}

export default function ShopCartPage({}: Props) {
    const cartItems = useAppSelector((state) => state.cart.cartItems)
    const dispatch = useAppDispatch()

    const incrementQuantity = (productId: string, quantity: number) => {
        dispatch(modifyQuantity({ productId, newQuantity: quantity }))
    }

    const handleRemoveItem = (productId: string) => {
        dispatch(removeCartItem({ productId }))
    }

    return (
        <>
            <PageTitle title="Cart" />

            {/* <!--cart Start--> */}
            <section>
                <div className="container pb-100">
                    <div className="section-content">
                        <div className="row">
                            {cartItems.length ? (
                                <div className="col-md-12">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-bordered tbl-shopping-cart">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>Photo</th>
                                                    <th>Product Name</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cartItems.map((cartItem: CartItem, id: number) => (
                                                    <tr key={id} className="cart_item">
                                                        <td className="product-remove">
                                                            <button
                                                                title="Remove this item"
                                                                className="remove"
                                                                onClick={() => handleRemoveItem(cartItem.productId)}
                                                            >
                                                                ×
                                                            </button>
                                                        </td>
                                                        <td className="product-thumbnail">
                                                            <a href="#">
                                                                {cartItem.productImage && (
                                                                    <img
                                                                        alt={cartItem.productName}
                                                                        src={cartItem.productImage}
                                                                    />
                                                                )}
                                                            </a>
                                                        </td>
                                                        <td className="product-name">
                                                            <a href="shop-product-details.html">
                                                                {cartItem.productName}
                                                            </a>
                                                            {/* <ul className="variation">
                                                            <li className="variation-size">
                                                                Size: <span>Medium</span>
                                                            </li>
                                                        </ul> */}
                                                        </td>
                                                        <td className="product-price">
                                                            <span className="amount">{cartItem.unitPrice}</span>
                                                        </td>
                                                        <td className="product-quantity">
                                                            <div className="product-details__quantity">
                                                                <div className="quantity-box">
                                                                    <button
                                                                        type="button"
                                                                        className="sub"
                                                                        onClick={() =>
                                                                            incrementQuantity(
                                                                                cartItem.productId,
                                                                                cartItem.quantity - 1
                                                                            )
                                                                        }
                                                                    >
                                                                        <i className="fa fa-minus"></i>
                                                                    </button>
                                                                    <input
                                                                        type="number"
                                                                        id="1"
                                                                        value={cartItem.quantity}
                                                                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                                            incrementQuantity(
                                                                                cartItem.productId,
                                                                                cartItem.quantity - 1
                                                                            )
                                                                        }
                                                                    />
                                                                    <button
                                                                        type="button"
                                                                        className="add"
                                                                        onClick={() =>
                                                                            incrementQuantity(
                                                                                cartItem.productId,
                                                                                cartItem.quantity + 1
                                                                            )
                                                                        }
                                                                    >
                                                                        <i className="fa fa-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="product-subtotal">
                                                            <span className="amount">
                                                                {cartItem.unitPrice * cartItem.quantity}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            ) : (
                                <div className="alert alert-primary" role="alert">
                                    Cart is Empty! <RouterLink href="/products">Click here to add shop</RouterLink>
                                </div>
                            )}

                            <div className="col-md-12 mt-30">
                                <div className="row">
                                    <div className="col-md-5">
                                        <h4>Calculate Shipping</h4>
                                        <form className="form" action="#">
                                            <div className="mb-10">
                                                <select className="form-control">
                                                    <option>Select Country</option>
                                                    <option>Australia</option>
                                                    <option>UK</option>
                                                    <option>USA</option>
                                                </select>
                                            </div>
                                            <div className="mb-10">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="State/country"
                                                    defaultValue=""
                                                />
                                            </div>
                                            <div className="mb-10">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Postcod/zip"
                                                    defaultValue=""
                                                />
                                            </div>
                                            <div className="mb-30">
                                                <button type="button" className="theme-btn btn-style-one">
                                                    <span className="btn-title">Update Totals</span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-2"></div>
                                    <div className="col-md-5">
                                        <h4>Cart Totals</h4>
                                        <table className="table table-bordered cart-total">
                                            <tbody>
                                                <tr>
                                                    <td>Cart Subtotal</td>
                                                    <td>$180.00</td>
                                                </tr>
                                                <tr>
                                                    <td>Shipping and Handling</td>
                                                    <td>$70.00</td>
                                                </tr>
                                                <tr>
                                                    <td>Order Total</td>
                                                    <td>$250.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <a className="theme-btn btn-style-one" href="shop-checkout.html">
                                            <span className="btn-title">Proceed to Checkout</span>{" "}
                                        </a>{" "}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--cart Start--> */}
        </>
    )
}
