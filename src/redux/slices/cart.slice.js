import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartProducts: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            let exist = false;
            state.cartProducts.forEach(pdt => {
                if (pdt?.name === action.payload.name) {
                    exist = true;
                }
            })
            if(!exist)
            state.cartProducts.push(action.payload);
        },
        removeCartItem: (state, action) => {
            console.log(action.payload)
            state.cartProducts = state.cartProducts.filter((cartProduct) => cartProduct.name != action.payload.name);
        },
        modifyCartItem: (state, action) => {
            state.cartProducts.forEach(product => {
                if (product._id === action.payload.product._id)
                    {
                        product = action.payload.product;
                    }
            })
        }
    }
})

export const {addCartItem, removeCartItem, modifyCartItem} = cartSlice.actions;
export const getCartProducts = (state) =>state.cart.cartProducts;

export default cartSlice.reducer;