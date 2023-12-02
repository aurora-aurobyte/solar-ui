import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface CartItem {
    productId: string
    unitPrice: number
    quantity: number
    productName: string
    productImage: string
}

interface CartState {
    cartItems: CartItem[]
}

const initialState: CartState = {
    cartItems: JSON.parse(localStorage.getItem("cart-items") || "[]"),
}

function filterQuantity(quantity: number) {
    if (quantity < 0) return 0
    return quantity
}

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartItem: (state, action: PayloadAction<CartItem>) => {
            const cartItem = state.cartItems.find(
                (cartItem: CartItem) => cartItem.productId === action.payload.productId
            )
            if (cartItem) {
                cartItem.quantity = filterQuantity(action.payload.quantity)
            } else {
                state.cartItems.push({ ...action.payload, quantity: filterQuantity(action.payload.quantity) })
            }
            localStorage.setItem("cart-items", JSON.stringify(state.cartItems))
        },
        modifyQuantity: (state, action: PayloadAction<{ productId: string; newQuantity: number }>) => {
            const cartItem = state.cartItems.find(
                (cartItem: CartItem) => cartItem.productId === action.payload.productId
            )
            if (cartItem) {
                cartItem.quantity = filterQuantity(action.payload.newQuantity)
            }
            localStorage.setItem("cart-items", JSON.stringify(state.cartItems))
        },
        removeCartItem: (state, action: PayloadAction<{ productId: string }>) => {
            const index = state.cartItems.findIndex(
                (cartItem: CartItem) => cartItem.productId === action.payload.productId
            )
            if (index > -1) {
                state.cartItems.splice(index, 1)
            }
            localStorage.setItem("cart-items", JSON.stringify(state.cartItems))
        },
    },
})

export default CartSlice.reducer
export const { addCartItem, modifyQuantity, removeCartItem } = CartSlice.actions
